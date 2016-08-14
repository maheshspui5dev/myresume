sap.ui.controller("resume.controller.Master", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf resume.Master
*/
	splitApp:null,
	onInit: function() {
//		var splitApp = this.getView().byId("SplitAppResumeId");
		if(sap.ui.Device.system.phone){
			this.getView().byId("moreId").setVisible(true);
//			splitApp.hideMaster();
//			splitApp.setMode(sap.m.SplitAppMode.HideMode);
//			
//			return ;
//			
		}
	},
	onPress: function(evt){
//		var splitApp = this.getView().byId("SplitAppResumeId");
		this.splitApp.to("detailId");
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf resume.Master
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf resume.Master
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf resume.Master
*/
//	onExit: function() {
//
//	}

});