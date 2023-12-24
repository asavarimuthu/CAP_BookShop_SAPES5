sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {

            },
            onPress:function(){
                var oModel=this.getOwnerComponent().getModel();

                oModel.read("/SEPMRA_I_PriceClassification",{
                    success:function(oData){
                        console.log(oData);
                    },
                    error:function(oError){
                        console.log(oError);
                    }
                });
            }
        });
    });
