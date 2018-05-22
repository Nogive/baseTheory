"use strict";
/*constant*********************************************************/
/*----------------------------------------------------------------*/
/*index page*******************************************************/
function requestRemotePlanListAndUpdate(listApiUrl) {
  $$.ajax({
    url: listApiUrl,
    type: "GET",
    dataType: "json",
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", cookie.getCookie("token"));
    },
    success: function(data, status, xhr) {
      //onlineDate = new Date(xhr.getResponseHeader("Date"));
      onlineDate = new Date();
      if (data.code == $g.API_CODE.OK) {
        //当有记录且没有下个月的记录，才允许新建
        //mma.getCache("account").then(function(value) {
          //currentAccount = value;
          if (currentAccount.roleId == $g.ROLE.SR) {
            $$("#planNav").hide();
            if (data.data == undefined || data.data.length == 0) {
              mma.setActionMenus(true, [MENU.create]);
            } else {
              let totals = data.data;
              let nextMonth = getNextMonthTimeStamp(onlineDate);
              if (totals[0].month == nextMonth) {
                mma.setActionMenus(false);
              } else {
                mma.setActionMenus(true, [MENU.create]);
              }
            }
          } else {
            $$("#planNav").show();
            mma.setActionMenus(false);
          }
          showPlanList(data.data);
        //});
      } else {
        mjpApp.toast("请求计划列表出错", "", { duration: 1000 }).show();
      }
      mjpApp.hidePreloader();
    },
    error: function(xhr) {
      ajaxSet.error(xhr, "加载拜访计划数据出错了, 请稍后再试。");
    }
  });
}
function showPlanList(totalItems) {
  let html = "";
  if (totalItems != undefined && totalItems.length > 0) {
    html = generateViewItems(tabContext[currentTab].planType, totalItems);
  } else {
    html = '<li class="item-content"><div class="item-inner">暂无</div></li>';
  }
  $$(tabContext[currentTab].listDomId).html(html);
  mjpApp.pullToRefreshDone();
  $$(".pull-to-refresh-layer").removeClass("martop0");
}
//generate tab
function generateViewItems(itemType, items) {
  let html = "";
  $$.each(items, function(i, e) {
    let plan = e;
    let month = getYearMonth(plan.month);
    if (itemType == "plan") {
      html +=
        '<li class="item-content" id="mplan' +
        plan.id +
        '">' +
        '<div class="item-inner">' +
        '<div class="item-title">' +
        month +
        "</div>" +
        '<div class="item-title">' +
        plan.staff.name +
        "</div>" +
        '<div class="item-after"><span data-state="' +
        plan.state +
        '" class="statusText">' +
        whichState(plan.state) +
        "</span></div>" +
        "</div>" +
        "</li>";
    } else {
      html +=
        '<li class="item-content" id="appro' +
        plan.id +
        '">' +
        '<div class="item-inner">' +
        '<div class="item-title">' +
        month +
        "</div>" +
        '<div class="item-after"><span class="emName">' +
        plan.staff.name +
        "</span></div>" +
        "</div>" +
        "</li>";
    }
  });
  return html;
}
//YYYY-MM
function getYearMonth(timestamp) {
  var date = new Date(timestamp);
  var mm = date.getMonth() + 1;
  var dd = date.getDate();

  return [date.getFullYear(), "-", (mm > 9 ? "" : "0") + mm].join("");
}
//current plan state
function whichState(str) {
  var state = "";
  switch (str) {
    case "ongoing":
      state = "审批中";
      break;
    case "denied":
      state = "驳回";
      break;
    case "draft":
      state = "草稿";
      break;
    default:
      state = "通过";
      break;
  }
  return state;
}
//Next Month TimeStamp
function getNextMonthTimeStamp(now) {
  //var now = new Date();
  if (now.getMonth() == 11) {
    var current = new Date(now.getFullYear() + 1, 0, 1);
  } else {
    var current = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  }
  return current.getTime();
}
//load some tab
function onTabShow(tab) {
  currentTab = tab;
  mjpApp.pullToRefreshTrigger(".pull-to-refresh-content");
}
//enter detail page
function enterDetailPage(id){
	if (id != undefined) {
      id = id.substring(5);
      currentPlanId = id;
      mainView.router.loadPage("detail.html?id=" + id);
    }
}
/*----------------------------------------------------------------*/

/*create page*******************************************************/
function questPlanInCreate() {
	initGlobal();
  //mjpApp.showPreloader("正在加载，请稍候。");
  promiseAjax($g.API_URL.PLAN_CREATING.compose(host), "GET", {
    month: getNextMonthTimeStamp(onlineDate)
  }).then(function(value) {
  	if(value==undefined){
  		ajaxSet.noData();
  	}else if (value.code == $g.API_CODE.OK) {
	  	if(value.data==undefined){
	  		showToast("无法获取详细计划数据，请联系管理员");
	  		mainView.router.back();
	  	}else{
	  		currentPlan=value.data;
	  		initConstantfromPlan(currentPlan);
	  		Promise.all([
          promiseAjax($g.API_URL.SETTING_WORKDAY.compose(host), "GET", {
            monthTimestamp: currentPlan.month
          }),
          promiseAjax($g.API_URL.MY_MVO.compose(host), "GET", {})
        ])
	      .then(function([works, mvos]) {
	      	let [wFlag,mFlag]=[false,false];
	      	if(works==undefined){
	      		ajax.noData('无法从服务器获取工作日数据');
	      	}else if(works.code==$g.API_CODE.OK){
	      		wFlag=true;
	      		initConstantfromWorks(works.data);
	      	}else{
	      		ajax.codeError(works);
	      	}
	      	if(mvos==undefined){
	      		ajax.noData('无法从服务器获取mvo数据');
	      	}else if(works.code==$g.API_CODE.OK){
	      		mFlag=true;
	      		initConstantfromMvos(mvos.data);
	      	}else{
	      		ajax.codeError(mvos);
	      	}
	      	if(wFlag&&mFlag){
	      		renderThePage(works.data,mvos.data,'create');
	      	}
	        mjpApp.hidePreloader();
	      })
	      .catch(function(e) {
	        ajaxSet.error(e);
	      });
	  	}
    }
  },function(err) {
      mjpApp.hidePreloader();
      ajaxSet.error(err);
    }
  );
}
function renderThePage(w,m,page){
	if (page == "create") {
    page = "";
    clients = m.records;
  } else {
    page = "Detail";
    clients = m;
  }
  //generateMvoList(clients,page);
  //generateCalendar(w.monthTimestamp,page);
  //initLocationMap(page);
}
function generateMvoList(clients,page){
	
}
function initGlobal(){
	[frequentMap,dayloadMap,mvoMap,dateMap,dayMap,weekMap,workday]=[[],[],[],[],[],[],[]];
	[factLoad,scaleLoad,preLoad,currentDay,maxDay,clients]=[0,0,0];
}
function initConstantfromPlan(data){
	console.log(data);
	let plan=data.data;
	plan.forEach(e=>{
		let timestamp=e.day;
		let capacity=parseFloat(e.dayCapacity.toFixed(2));//保留两位小数
		let outlets=e.outlets;
		dayloadMap[timestamp]=capacity;
		dayMap[timestamp]=outlets;
		factLoad+=capacity;
		outlets.forEach(e=>{
			let id=e;
			if(frequentMap[id]==undefined){
				frequentMap[id]=1;
			}else{
				frequentMap[id]+=1;
			}
			if(dateMap[id]==undefined){
				dateMap[id]=[timestamp];
			}else{
				dateMap[id].push(timestamp);
			}
		})
	});
}
function initConstantfromWorks(w){
	console.log(w);
	workday=w.workdays;
	scaleLoad=w.workingTimePerDay;
	preLoad=scaleLoad*w.days;
	let timestamp=w.monthTimestamp;
	let n=new Date(timestamp)
	let y=n.getFullYear();//年份
	let m=n.getMonth();//月
	let firstDay=new Date(y,m,1).getDay();//当月第一天date
	maxDay=getMonthAllDay(m, y);
	let weekNum = Math.ceil((maxDay + firstDay) / 7);
	for(let i=0;i<weekNum;i++){
		for(let j=0;j<7;j++){
			let idx=i*7+j;
			let d=idx-firstDay+1;
			if(d>0&&d<=maxDay){
				let currentTimestamp=new Date(y,m,d).getTime();
				if(weekMap[i]==undefined){
					weekMap[i]=[currentTimestamp];
				}else{
					weekMap[i].push(currentTimestamp);
				}
			}
		}
	}
}
function initConstantfromMvos(m){
	console.log(m);
	let mvos=m.records;
	if(mvos.length!=0){
		mvos.forEach(e=>{
			let id=e.id;
			mvoMap[id]=e;
		})
	}
}

//get maxDay in month
function getMonthAllDay(month, year) {
  var m_days = new Array(
    31,
    28 + is_leap(year),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  );
  return m_days[month];
}
// 是否为闰年
function is_leap(year) {
  return year % 100 == 0 ? (year % 400 == 0 ? 1 : 0) : year % 4 == 0 ? 1 : 0;
}
//补 0
function checkNum(i){
	return i<10?"0"+i:i;
}
/*----------------------------------------------------------------*/

/*common func in create & detail***********************************/
//ajax promise
function promiseAjax(url, type, param, headers) {
  return new Promise(function(resolve, reject) {
    $$.ajax({
      url: url,
      type: type,
      data: param,
      dataType: "json",
      headers: headers,
      beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", cookie.getCookie("token"));
      },
      success: function(data) {
        resolve(data);
      },
      error: function(e) {
        reject(e);
      }
    });
  });
}
/*----------------------------------------------------------------*/