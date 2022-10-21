sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageBox) {
        "use strict";

        return Controller.extend("ui5applicationmodule.controller.appsingleview", {
            onInit: function () {

            },
            pressButton: function () {             
                var sEmployee = this.getView().byId("employeeInput").getValue();
                var sITequipment = this.getView().byId("itequipmentInput").getValue();
                var sQuantity = parseInt(this.getView().byId("quantityInput").getValue());

                var startContext = {employee: sEmployee, itequipment: sITequipment, quantity: sQuantity}; 
                var workflowStartPayload = {definitionId: "myui5workflow", context: startContext}

                $.ajax({
                    url: "/ui5applicationmodule/bpmworkflowruntime/v1/xsrf-token",
                    method: "GET",
                    headers: {
                        "X-CSRF-Token": "Fetch"
                    },
                    success: function (result, xhr, data) {
                        var token = data.getResponseHeader("X-CSRF-Token");
                        if (token === null) return;
                    
                        $.ajax({
                            url: "/ui5applicationmodule/bpmworkflowruntime/v1/workflow-instances",
                            type: "POST",
                            data: JSON.stringify(workflowStartPayload),
                            headers: {
                                "X-CSRF-Token": token,
                                "Content-Type": "application/json"
                            },
                            async: false,
                            success: function (data) {
                                MessageBox.information("The workflow has successfully started");
                            },
                            error: function (data) {

                            }
                        });
                    }
                });

            },
            sendCpi: function () {             
                var sEmployee = this.getView().byId("employeeInput").getValue();
                var sITequipment = this.getView().byId("itequipmentInput").getValue();
                var sQuantity = parseInt(this.getView().byId("quantityInput").getValue());

                var startContext = {employee: sEmployee, itequipment: sITequipment, quantity: sQuantity}; 
                var workflowStartPayload = {definitionId: "myui5workflow", context: startContext}

                // $.ajax({
                //     url: "/cpi/http/ui5message",
                //     method: "GET",
                //     headers: {
                //         "X-CSRF-Token": "Fetch"
                //     },
                //     success: function (result, xhr, data) {
                //         var token = data.getResponseHeader("X-CSRF-Token");
                //         if (token === null) return;
                    
                //         $.ajax({
                //             url: "/ui5applicationmodule/bpmworkflowruntime/v1/workflow-instances",
                //             type: "POST",
                //             data: JSON.stringify(workflowStartPayload),
                //             headers: {
                //                 "X-CSRF-Token": token,
                //                 "Content-Type": "application/json"
                //             },
                //             async: false,
                //             success: function (data) {
                //                 MessageBox.information("The workflow has successfully started");
                //             },
                //             error: function (data) {

                //             }
                //         });
                //     }
                // });


                $.ajax({
                    url: "/cpi/http/ui5message",
                    //  url: "https://1s4hcextension.it-cpi001-rt.cfapps.eu10.hana.ondemand.com/cpi/http/ui5message",
                    type: "POST",
                    data: JSON.stringify(workflowStartPayload),
                    headers: {
                        // "X-CSRF-Token": token,
                        "Content-Type": "application/json"
                    },
                    async: false,
                    success: function (data) {
                        MessageBox.information("message has been sent to CPI");
                    },
                    error: function (data) {
                        console.log(data);
                        MessageBox.information(data);

                } });

            }

        });
    });
