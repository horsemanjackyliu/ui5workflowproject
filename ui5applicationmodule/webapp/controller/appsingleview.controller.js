sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/PDFViewer",
    "sap/base/security/URLWhitelist",
    "ui5applicationmodule/service/FileUpload"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, PDFViewer, URLWhitelist, FileUpload) {
        "use strict";

        return Controller.extend("ui5applicationmodule.controller.appsingleview", {
            onInit: function () {

            },

            pdfRender: function () {

                var printd = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><form1><LabelForm><DeliveryId>Mirum est ut animus agitatione motuque corporis excitetut.</DeliveryId><Position>Ego ille</Position><MaterialNo>Si manu vacuas</MaterialNo><Quantity>Apros tres et quidem</Quantity><Package>Mirum est</Package><QRCode>01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789</QRCode></LabelForm><LabelForm><DeliveryId>Ad retia sedebam: erat in proximo non venabulum aut lancea, sed stilus et pugilares:</DeliveryId><Position>Licebit auctore</Position><MaterialNo>Proinde</MaterialNo><Quantity>Am undique</Quantity><Package>Ad retia sedebam</Package><QRCode>01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789</QRCode></LabelForm><LabelForm><DeliveryId>meditabar aliquid enotabamque, ut, si manus vacuas, plenas tamen ceras reportarem.</DeliveryId><Position>Vale</Position><MaterialNo>Ego ille</MaterialNo><Quantity>Si manu vacuas</Quantity><Package>Apros tres et quidem</Package><QRCode>01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789</QRCode></LabelForm></form1>";
               
                var filename = this.getView().byId("filename").getValue();

                if (!this._fileUpload) {
                    this._fileUpload = new FileUpload();
                }

                this._fileUpload.render(printd).then(renderedData=>{

                    var renderresult = JSON.parse(renderedData);

                    const deccont = atob(renderresult.fileContent);
                    var fname = renderresult.fileName;
                    const byteNumbers = new Array(deccont.length);
                    for (let i = 0; i < deccont.length; i++) {
                        byteNumbers[i] = deccont.charCodeAt(i);
                    }

                    const byteArray = new Uint8Array(byteNumbers);
                    const blob = new Blob([byteArray], { type: "application/pdf" });
                    var pdfDocumentURL = URL.createObjectURL(blob);

                    if (!this._pdfViewer) {
                        this._pdfViewer = new PDFViewer();
                        this._pdfViewer.attachError(event => ErrorHandlerSingleton.getInstance().onError(event));
                        // to show the pdf in this viewer, need to whitelist the blob protocol
                        URLWhitelist.add("blob");
                    }
                    this._pdfViewer.setSource(pdfDocumentURL);
                    this._pdfViewer.open();

                    if (!this._fileUpload) {
                        this._fileUpload = new FileUpload();
                    }
                    // console.log(blob.text());
                    this._fileUpload.fileupload(blob,filename,fname).then(result => {
                        var cmiscontS = JSON.stringify(result).replaceAll("cmis:","");
                        cmiscontS = cmiscontS.replaceAll("sap:","");
                        MessageBox.information(cmiscontS);
                        var cmiscontO= JSON.parse(cmiscontS);
                        console.log(typeof(cmiscontO));
                        var cmisid ="";
                        if(typeof(cmiscontO) === 'string'){
                             cmisid =  JSON.parse(cmiscontO).succinctProperties.objectId;
                        }else{
                            cmisid = cmiscontO.succinctProperties.objectId;
                        }
                        // console.log(cmisid);

                        this.getView().byId("dmsid").setValue(cmisid);
                                // MessageBox.information(JSON.stringify(result));
                                console.log('upload succeed');}).catch(err=>{
                                    MessageBox.information(err);console.log(err);
                                });
                }).catch(err=>{
                    MessageBox.information(JSON.stringify(err));
                })

            }
        });
    });
