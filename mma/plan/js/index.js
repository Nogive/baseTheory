"use strict";
/*constant*********************************************************/
var MENU = {
  create: { id: 1, name: "新建" },
  edit: { id: 2, name: "编辑" },
  assign: { id: 3, name: "分配" },
  remove: { id: 4, name: "删除" },
  approve: { id: 5, name: "通过审批" },
  deny: { id: 6, name: "拒绝审批" },
  submit: { id: 7, name: "提交" }
};
mma.setOnActionCallback(function(data) {
	mainView.router.loadPage("create.html");
//if (data.id == MENU.create.id) {
//  currentPlanId == undefined;
//  mainView.router.loadPage("create.html");
//} else if (data.id == MENU.submit.id) {
//  arrangementPlan();
//} else if (data.id == MENU.edit.id) {
//  mainView.router.loadPage("create.html?id=" + currentPlanId);
//} else if (data.id == MENU.approve.id) {
//  goApproval(currentPlanId, true);
//} else if (data.id == MENU.deny.id) {
//  deny(currentPlanId);
//}
});
var mjpApp = new Framework7({
  init: false,
  //允许webAPP记录URL，以便回退
  pushState: true,
  notificationHold: 2000,
  modalButtonOk: "确定",
  modalButtonCancel: "取消",
  modalPreloaderTitle: "正在加载, 请稍等"
});
var $$ = Dom7;
var mainView = mjpApp.addView(".view-main", { domCache: true });

var currentPlanId;
var currentAccount={
	dataScope:[102],
	employeeId:"2100004",
	name:"葛伟峰",
	roleId:10,
	staffId:117
};
var currentTab;
var tabContext = {
  myPlan: {
    tabDomId: "#my-plan",
    planType: "plan",
    api: $g.API_URL.PLAN_LIST.compose(host),
    listDomId: "#my-plan-list",
    page: 0,
    items: 0
  },
  myApproval: {
    tabDomId: "#my-approve",
    planType: "approve",
    api: $g.API_URL.PLAN_PENDING_LIST.compose(host),
    listDomId: "#my-approve-list",
    page: 0,
    items: 0
  }
};


var map = new AMap.Map("container", {
    resizeEnable: true,
    zoom: 15,
    center: [121.329402, 31.228667]
 });
const showTime=10000;
var onlineDate=new Date();
var myScroll;
var [editSubmit,showMarkerName,currentPlan]=[false,true];
var [frequentMap,dayloadMap,mvoMap,dateMap,dayMap,weekMap,workday]=[[],[],[],[],[],[],[]];
var [factLoad,scaleLoad,preLoad,currentDay,maxDay,clients]=[0,0,0];
/*----------------------------------------------------------------*/

/*index page*******************************************************/
mjpApp.onPageInit("plan", function(page) {
  var from = GetQueryString("from");
  if (from == "home") {
    mma.setActionMenus(false);
//  mma.getCache("account").then(function(value) {
//    currentAccount = value;
//  });
  } else {
    //mma.confirmOnBack(false);
    //下拉刷新事件
    var ptrContent = $$(".pull-to-refresh-content");
    ptrContent.on("refresh", function(e) {
      $$(".pull-to-refresh-layer").addClass("martop0");
      requestRemotePlanListAndUpdate(tabContext[currentTab].api);
    });
    //请求my plan列表
    $$.each(tabContext, function(key, item) {
      $$(item.tabDomId).on("show", function() {
        onTabShow(key);
      });
    });
    currentTab = "myPlan";
    mjpApp.showTab(tabContext[currentTab].tabDomId);
    mjpApp.pullToRefreshTrigger(".pull-to-refresh-content");
  }
  $$("#my-plan-list").on("click", "li", function() {
    var id = $$(this).attr("id");
    enterDetailPage(id);
  });
  $$("#my-approve-list").on("click", "li", function() {
    var id = $$(this).attr("id");
    enterDetailPage(id);
  });
});
mjpApp.onPageReinit("plan", function(page) {
  //mma.confirmOnBack(false);
  mjpApp.pullToRefreshTrigger(".pull-to-refresh-content");
});
/*----------------------------------------------------------------*/

/*create page******************************************************/
mjpApp.onPageInit("create", function(page) {
  myScroll = new IScroll("#iscroll");
  let id = page.query.id;
  if (id == undefined) {
    mma.setActionMenus(true, [MENU.submit, MENU.draft]);
    questPlanInCreate();
  } else {
    editSchedule = detailSchedule;
    if (editSchedule.state == "draft") {
      mma.setActionMenus(true, [MENU.submit, MENU.draft]);
    } else {
      mma.setActionMenus(true, [MENU.submit]);
    }
    showEditPage(editSchedule);
  }
  //mma.confirmOnBack(true);

  /*****************隐藏按钮 和清空按钮****************/
  $$("#hideLabel").click(function() {
    if (globalField.showName) {
      $$(this).text("显示");
      globalField.showName = false;
    } else {
      $$(this).text("隐藏");
      globalField.showName = true;
    }
    if (globalField.currentVisableDay != null) {
      var showDay = globalField.currentVisableDay;
      showPlanedClient(showDay, "create");
    }
  });
  $$("#clearAll").click(function() {
    mjpApp.confirm("确定清空已经排好的计划?", "提示", function() {
      var currentPlan = editSchedule;
      currentPlan.data = [];
      globalField.daysLoad = {};
      globalField.factLoad = 0;
      globalField.frequency = {};
      $$("#calendar td").removeClass("bg_red bg_orange bg_green");
      $$("#clientList .isFill").removeClass("col_red col_orange col_green");
      $$("#factLoad").text(globalField.factLoad);
      map.clearMap();
      $$("#planedClient").hide();
    });
  });
  /*****************隐藏按钮 和清空按钮  end****************/

  //点击某个日期
  var timer = null; //定时器
  $$("#calendar").on("click", "td", function(e) {
    e.stopPropagation();
    markerMap = {};
    var isWorkday = $$(this).hasClass("validcolor");
    var day = $$(this).text();
    var key = $$("#currentMonth").text();
    if (isWorkday) {
      globalField.currentVisableDay = parseInt(day);
      $$("#calendar td").removeClass("today");
      $$(this).addClass("today");
      $$("#currentDate").text(key + "/" + checkNum(day));
      $$("#planedClient").attr({ "data-key": key, "data-day": day });
      showPlanedClient(day, "create");
      clearTimeout(timer);
      timer = setTimeout(function() {
        $$("#planedClient").hide();
      }, showTime);
    }
  });
  //点击某个MVO
  $$("#clientList").on("click", "li", function() {
    let id = $$(this)
      .attr("id")
      .substring(6);
    showPlanedDay(id, "create");
  });
  /***********定时器效果部分 start*********************/
  $$("#cancle").on("click", function() {
    $$(this)
      .parent()
      .hide();
  });
  $$("#planedClient").on("click", function(e) {
    e.stopPropagation();
  });
  $$("#planedClient").on("touchstart", function() {
    clearTimeout(timer);
  });
  $$("#planedClient").on("touchend", function() {
    timer = setTimeout(function() {
      $$("#planedClient").hide();
    }, showTime);
  });
  /***********定时器效果部分 end*********************/

  //移除某一个客户
  $$("#planedList").on("click", ".deleteClient", function() {
    var id = $$(this)
      .parents("li")
      .attr("id")
      .substring(5);
    deleteOneClient(id);
    $$(this)
      .parents("li")
      .remove();
  });

  //添加计划到某一天
  $$("#clientList").on("click", ".addToplan", function(e) {
    e.stopPropagation();
    var id = $$(this)
      .parents("li")
      .attr("id")
      .substring(6);
    if (globalField.currentVisableDay == null) {
      mjpApp.alert(
        "尚未选择日期，请先在右上角的日历里面选择日期，再进行添加",
        ""
      );
    } else {
      var checkDay = globalField.currentVisableDay;
      var dayTimestamp = Date.parse(
        $$("#currentMonth").text() + "/" + checkNum(checkDay)
      );
      if (globalField.workdays.includes(dayTimestamp)) {
        arrangePlanInCache(id, checkDay);
      } else {
        mjpApp.alert("非工作日不允许排班，请另选日期进行安排。", "");
      }
    }
  });
});
mjpApp.init();
/*----------------------------------------------------------------*/

/*create page******************************************************/