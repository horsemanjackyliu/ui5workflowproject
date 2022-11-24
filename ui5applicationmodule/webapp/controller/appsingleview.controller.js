sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/PDFViewer",
    "sap/base/security/URLWhitelist",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageBox,PDFViewer,URLWhitelist) {
        "use strict";

        return Controller.extend("ui5applicationmodule.controller.appsingleview", {
            onInit: function () {


            },
            // _openPdfViewerForSource: function (pdfDocumentURL) {
            //     if (!this._pdfViewer) {
            //         this._pdfViewer = new PDFViewer();
            //         // this.getFragment().addDependent(this._pdfViewer);
            //         this._pdfViewer.attachError(event => ErrorHandlerSingleton.getInstance().onError(event));
            //         // to show the pdf in this viewer, need to whitelist the blob protocol
            //         URLWhitelist.add("blob");
            //     }
            //     this._pdfViewer.setSource(pdfDocumentURL);
            //     this._pdfViewer.open();
            // },
            pdfRender:function(){

                var printd = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><form1><LabelForm><DeliveryId>Mirum est ut animus agitatione motuque corporis excitetut.</DeliveryId><Position>Ego ille</Position><MaterialNo>Si manu vacuas</MaterialNo><Quantity>Apros tres et quidem</Quantity><Package>Mirum est</Package><QRCode>01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789</QRCode></LabelForm><LabelForm><DeliveryId>Ad retia sedebam: erat in proximo non venabulum aut lancea, sed stilus et pugilares:</DeliveryId><Position>Licebit auctore</Position><MaterialNo>Proinde</MaterialNo><Quantity>Am undique</Quantity><Package>Ad retia sedebam</Package><QRCode>01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789</QRCode></LabelForm><LabelForm><DeliveryId>meditabar aliquid enotabamque, ut, si manus vacuas, plenas tamen ceras reportarem.</DeliveryId><Position>Vale</Position><MaterialNo>Ego ille</MaterialNo><Quantity>Si manu vacuas</Quantity><Package>Apros tres et quidem</Package><QRCode>01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789</QRCode></LabelForm></form1>";
                var printdb64 = btoa(printd);


               var pdfcontent = {
                    embedFont: 0,
                    formLocale: "en_US",
                    formType: "print",
                    taggedPdf: 1,
                    xdpTemplate: "labelprint/PrintLabel",
                    xmlData: printdb64
                 };
                 
                $.ajax({
                    url: "/adobeapi/v1/adsRender/pdf?templateSource=storageName&TraceLevel=0",
                    type: "POST",
                    data: JSON.stringify(pdfcontent),
                    headers: {
                        "Content-Type": "application/json"
                    },
                    async: false,
                    success: function (data) {

                        const deccont = atob(data.fileContent);
                        const byteNumbers = new Array(deccont.length);

                        for (let i = 0; i < deccont.length; i++) {
                            byteNumbers[i] = deccont.charCodeAt(i);
                        }

                        const byteArray = new Uint8Array(byteNumbers);
                        const blob = new Blob([byteArray], {type: "application/pdf"});
                        

                        var pdfDocumentURL = URL.createObjectURL(blob);
                        if (!this._pdfViewer) {
                                    this._pdfViewer = new PDFViewer();
                                    this._pdfViewer.attachError(event => ErrorHandlerSingleton.getInstance().onError(event));
                            //         // to show the pdf in this viewer, need to whitelist the blob protocol
                                    URLWhitelist.add("blob");
                                }
                                 this._pdfViewer.setSource(pdfDocumentURL);
                                 this._pdfViewer.open(); 



                        // this._openPdfViewerForSource(pdfDocumentURL);
                       

                    },
                    error: function (err) {
                        console.log(err);
                        MessageBox.information(JSON.stringify(err));

                } });


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

            }


        });
    });
