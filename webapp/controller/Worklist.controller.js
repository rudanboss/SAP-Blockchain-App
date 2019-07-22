sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("eDocument.eDocument.controller.Worklist", {
		onInit: function () {

		},
		
		onNavtoDocsOverview: function(oEvent){
			var data = oEvent.getParameters().listItem.getBindingContext().getObject(); 
			
			this.getOwnerComponent().getRouter().navTo("object", {
				objectId: data.Guid,
				onBlockchain: data.OnBlockchain
			});
		}
	});
});