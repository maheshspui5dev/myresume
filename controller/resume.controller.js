sap.ui.controller("resume.controller.resume", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf resume.resume
*/
	onInit: function() {
		this.loadMaterAViews();	
		
		// set explored app's demo model on this sample
//		var oImgModel = new JSONModel(jQuery.sap.getModulePath("resume.image", "/MAHESHGONDA.jpg"));
//		this.getView().setModel(oImgModel, "img");
	
	
	},
	
	loadMaterAViews : function(){
		
		var master  = sap.ui.view({id:"masterId", viewName:"resume.view.Master", type:sap.ui.core.mvc.ViewType.XML});
		
		var detail  = sap.ui.view({id:"detailId", viewName:"resume.view.Detail", type:sap.ui.core.mvc.ViewType.XML});
		
		var splitApp = this.getView().byId("SplitAppResumeId");
		splitApp.addMasterPage(master);
		splitApp.setInitialMaster(master);
		
		splitApp.addDetailPage(detail);
		splitApp.setInitialDetail(detail);
	},
	

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf resume.resume
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf resume.resume
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf resume.resume
*/
//	onExit: function() {
//
//	}

});