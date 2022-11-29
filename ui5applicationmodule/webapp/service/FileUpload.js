sap.ui.define("FileUpload", [
    "sap/ui/base/Object"
], function (ui5Object) {
    "use strict";
    return ui5Object.extend("ui5applicationmodule.service.FileUpload", {

        fileupload: function (blob, filename, fname) {

            return new Promise((resolve, reject) => {
                var data = new FormData();
                data.append("cmisaction", "createDocument");
                data.append("propertyId[0]", "cmis:name");
                data.append("propertyValue[0]", filename);
                data.append("propertyId[1]", "cmis:objectTypeId");
                data.append("propertyValue[1]", "cmis:document");
                data.append("filename", filename);
                data.append("_charset", "UTF-8");
                data.append("includeAllowableActions", "False");
                data.append("succinct", "true");
                data.append("media", blob,filename);
                var xhr = new XMLHttpRequest();

                xhr.addEventListener("readystatechange", function () {
                    if (this.readyState !== 2) {
                        console.log(this.status);
                    }
                });
                xhr.onload = () => {
                    if (xhr.status === 201) {
                        console.log('upload succeed')
                        return resolve(xhr.response)
                    }

                    return reject(xhr.response);

                }
                console.log(data);
                xhr.open("POST", "/sdi/browser/f98b60e4-aed8-4e21-bd91-a64f0b3b4df8/root");

                xhr.send(data);


            })




        },
        render: function (content) {
            return new Promise((resolve, reject) => {
                var rendercont = btoa(content);
                var pdfcontent = {
                    embedFont: 0,
                    formLocale: "en_US",
                    formType: "print",
                    taggedPdf: 1,
                    xdpTemplate: "labelprint/PrintLabel",
                    xmlData: rendercont
                };

                var xhr = new XMLHttpRequest();
                xhr.addEventListener("readystatechange", function () {
                    if (this.readyState !== 2) {
                        // console.log(this.responseText);
                    }
                });

                xhr.onload = () => {
                    if (xhr.status === 200) {
                        return resolve(xhr.response);
                    }
                    return reject(xhr.response);
                }
                xhr.open("POST", "/adobeapi/v1/adsRender/pdf?templateSource=storageName&TraceLevel=0");
                xhr.setRequestHeader("Content-Type", "application/json")
                xhr.send(JSON.stringify(pdfcontent));
            });

        },
        blobToBase64: function (blob) {
            return new Promise((resolve, _) => {
                const reader = new FileReader();
                reader.onload = () => { return resolve(reader.result.replace("base64,", "")); }
                reader.readAsDataURL(blob);
            });
        }

    });

})