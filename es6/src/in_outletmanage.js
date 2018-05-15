let template = {
  SR: function(outlet) {
    let [approveText, nextHandle, html] = ["", "", ""];
    let approve = getApprovingStateString(outlet);
    if (approve != "") {
      approveText = `<div class="item-after font16">${approve}</div>`;
    }
    if (outlet.nextExaminingHandler != undefined) {
      nextHandle = `<div class="item-title font16">${
        outlet.nextExaminingHandler.name
      }</div>`;
    }
    if (approveText != "" || nextHandle != "") {
      html = `<div class="mm-content">
    <div class="item-inner">${nextHandle}${approveText}</div>
  </div>`;
    }
    return html;
  },
  SS: function(outlet) {
    let html = "";
    if (outlet.eoeExecutor != undefined) {
      html = `<div class="mm-content">
      <div class="item-inner">
        <div class="item-title font16">${outlet.eoeExecutor.name}</div>
      </div>
    </div>`;
    }
    return html;
  },
  ASM: function(outlet) {
    let [eoe, eoem, html] = ["", "", ""];
    if (outlet.eoeExecutor != undefined) {
      eoe = `<div class="item-title font16">${outlet.eoeExecutor.name}</div>`;
    }
    if (outlet.eoeExecutorManager != undefined) {
      eoem = `<div class="item-after font16">${
        outlet.eoeExecutorManager.name
      }</div>`;
    }
    if (eoe != "" || eoem != "") {
      html = `<div class="mm-content">
    <div class="item-inner">${eoe}${eoem}</div>
  </div>`;
    }
    return html;
  },
  endDom: function(outlet, type) {
    let [component, twoline] = ["", ""];
    if (currentAccount.roleId == $g.ROLE.SR) {
      twoline = this.SR(outlet);
    }
    if (currentAccount.roleId == $g.ROLE.SS) {
      twoline = this.SS(outlet);
    }
    if (currentAccount.roleId == $g.ROLE.ASM) {
      twoline = this.ASM(outlet);
    }
    if (type == "premvo") {
      component = `<span class="statusText">${returnStateText(
        outlet.mvoState
      )}</span>`;
    }
    let fistline = `<div class="mm-content">
    <div class="item-inner">
      <div class="item-title">${outlet.name}</div>
      <div class="item-after">
        ${component}
        <span class="fixwidth typeStyle">${outlet.type.name}</span>
      </div>
    </div>
  </div>`;
    let html = `<li id="${
      outlet.id
    }" class="mm-block" source="${type}" onclick="toDetail(this);">${fistline}${twoline}</li>`;
    return html;
  }
};
