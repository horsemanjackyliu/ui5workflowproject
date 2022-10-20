/*global QUnit*/

sap.ui.define([
	"ui5applicationmodule/controller/appsingleview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("appsingleview Controller");

	QUnit.test("I should test the appsingleview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
