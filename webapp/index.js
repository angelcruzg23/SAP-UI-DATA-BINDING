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

        //Creating a JSON Model from a file 
        var oProduct = new JSONModel();
        oProduct.loadData("./mode/Products.json");
        sap.ui.getCore().setModel(oProduct,"products");


        //Create a JSON Model from an object literal
        var oModel = new JSONModel({
            firstName:  "Angel",
            lastName:   "Cruz", 
            enabled:    true,
            address: {
                street:  "1 any Lane",
                city:    "Walldorf",
                zip:     "610393",
                country: "Germany"
            },
            salesAmount: 12345.678988,
            currencyCode: 'EUR',
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

        var oView = new XMLView({
            viewName: "sap.ui.demo.db.view.App"});

        //Register view with message manager 
        sap.ui.getCore().getMessageManager().registerObject(oView,true);

        //Display de XML View called App
        oView.placeAt("content")

    })
});