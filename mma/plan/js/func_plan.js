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
  //mjpApp.showPreloader("正在加载，请稍候。");
  promiseAjax($g.API_URL.PLAN_CREATING.compose(host), "GET", {
    month: getNextMonthTimeStamp(onlineDate)
  }).then(function(value) {
      if (value.code == $g.API_CODE.OK) {
      	if(value.data!=undefined&&value.data.length!=0){
      		currentPlan=value.data;
      		generateMap(currentPlan);
      	}else{
      		mjpApp.toast('暂不允许新建计划,请联系管理员。','',{duration:1500}).show();
      		mainView.router.back();
      	}
      	/*
        editSchedule = value.data;
        initGlobalField(editSchedule);
        $$("#factLoad").text(globalField.factLoad);
        var month = editSchedule.month;
        Promise.all([
          promiseAjax($g.API_URL.SETTING_WORKDAY.compose(host), "GET", {
            monthTimestamp: month
          }),
          promiseAjax($g.API_URL.MY_MVO.compose(host), "GET", {})
        ])
          .then(function([works, mvos]) {
            if (works.code == $g.API_CODE.OK && mvos.code == $g.API_CODE.OK) {
              showPage(works, mvos, "create");
              mjpApp.hidePreloader();
            } else if (works.code != $g.API_CODE.OK) {
              throw new Error(works.msg);
            } else {
              throw new Error(mvos.msg);
            }
          })
          .catch(function(e) {
            mjpApp.alert(e, "错误");
          });
          */
      } else {
        mjpApp.alert("请求计划：" + value.msg, "错误");
      }
    },
    function(err) {
      mjpApp.hidePreloader();
      mjpApp.alert("请求计划失败了，请稍后再试", "错误");
      console.log(err);
    }
  );
}
function generateMap(data){
	console.log(data);
	[frequentMap,dayloadMap,mvoMap,dateMap,dayMap,weekMap]=[[],[],[],[],[],[]];
	[factLoad,scaleLoad,preLoad,currentDay,maxDay,clients]=[0,0,0];
	let plan=data.data;
	plan.forEach(e=>{
		dayloadMap[e.day]=e.dayCapacity;
		
	});
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