sap.ui.require([
    "sap/m/Text",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/BindingMode",
    "sap/ui/model/resource/ResourceModel"
], function(Text,
	JSONModel,
	XMLView,
	BindingMode,
	ResourceModel){
    "use strict"

    sap.ui.getCore().attachInit( function () {

        //Create a JSON Model from an object literal
        var oModel = new JSONModel({
            firstName:  "Angel",
            lastName:   "Cruz", 
            enabled:    true,
            panelHeaderText: "Data Binding Basics"
        });

        //oModel.setDefaultBindingMode(BindingMode.OneWay);


        var oResourceModel = new ResourceModel({
            bundleName      : "sap.ui.demo.db.i18n.i18n",
            supportedLocales: ["","de"],
            fallbackLocale : ""
        })

        //Assign the JSON model to the core 
        sap.ui.getCore().setModel(oModel);
        sap.ui.getCore().setModel(oResourceModel,"i18n");


        //Display de XML View called App
        new XMLView({
            viewName: "sap.ui.demo.db.view.App",
        }).placeAt("content")

    })
});