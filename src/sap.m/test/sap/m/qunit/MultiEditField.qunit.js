/*global QUnit,sinon */
sap.ui.define([
	"sap/m/MultiEditField",
	"sap/ui/core/Item",
	"sap/ui/core/Core"
], function (MultiEditField, Item, oCore) {
	"use strict";

	QUnit.module("Default values", {
		beforeEach: function() {
			this.oMultiEditField = new MultiEditField();
			this.oMultiEditField.placeAt("qunit-fixture");
			oCore.applyChanges();
		},
		afterEach: function() {
			this.oMultiEditField.destroy();
			this.oMultiEditField = null;
		}
	});

	QUnit.test("Property 'selectedItem'", function(assert) {
		assert.strictEqual(this.oMultiEditField.getProperty("selectedItem"), null, "Default value is null");
	});

	QUnit.test("Property 'showValueHelp'", function(assert) {
		assert.equal(this.oMultiEditField.getProperty("showValueHelp"), true, "Default value is 'true'");
	});

	QUnit.test("Property 'nullable'", function(assert) {
		assert.equal(this.oMultiEditField.getProperty("nullable"), true, "Default value is 'true'");
	});

	QUnit.test("Property 'required'", function(assert) {
		assert.equal(this.oMultiEditField.getProperty("required"), false, "Default value is 'false'");
	});

	QUnit.test("Get parent of Select control", function(assert) {
		assert.equal(this.oMultiEditField.byId("select").getParent(), this.oMultiEditField.getParent(), "The parent of select control is same as MultiEditField");
	});

	QUnit.module("Basic methods", {
		beforeEach: function() {
			this.oMultiEditField = new MultiEditField({
				items: [
					new Item({
						key: "key",
						text: "sample text"
					})
				]
			});
			this.oMultiEditField.placeAt("qunit-fixture");
			oCore.applyChanges();
		},
		afterEach: function() {
			if (!this.oMultiEditField._bIsBeingDestroyed) {
				this.oMultiEditField.destroy();
			}
			this.oMultiEditField = null;
		}
	});

	QUnit.test("Check if special value items have the correct key and text", function(assert) {
		//Arrange
		var sKeepLabel = this.oMultiEditField._oRb.getText("MULTI_EDIT_KEEP_TEXT");
		var sBlankLabel = this.oMultiEditField._oRb.getText("MULTI_EDIT_BLANK_TEXT");
		var sValueHelpLabel = this.oMultiEditField._oRb.getText("MULTI_EDIT_NEW_TEXT");
		//Assert
		assert.strictEqual(this.oMultiEditField._getKeepAll().getKey(), "keep", "Item key 'keep' correct.");
		assert.strictEqual(this.oMultiEditField._getKeepAll().getText(), "< " + sKeepLabel + " >", "Item text 'Keep Existing Values' correct.");

		assert.strictEqual(this.oMultiEditField._getBlank().getKey(), "blank", "Item key 'blank' correct.");
		assert.strictEqual(this.oMultiEditField._getBlank().getText(), "< " + sBlankLabel + " >", "Item text 'Leave Blank' correct.");

		assert.strictEqual(this.oMultiEditField._getValueHelp().getKey(), "new", "Item key 'new' correct.");
		assert.strictEqual(this.oMultiEditField._getValueHelp().getText(), "< " + sValueHelpLabel + " >", "Item text 'Use Value Help' correct.");
	});

	QUnit.test("Check if special value items are destroyed on exit.", function(assert) {
		//Arrange
		var oItemTemplate = this.oMultiEditField.byId("itemTemplate");
		//Act
		this.oMultiEditField.destroy();
		//Assert
		assert.equal(this.oMultiEditField._getKeepAll()._bIsBeingDestroyed, true, "'Keep existing value' item has been destroyed.");
		assert.equal(this.oMultiEditField._getBlank()._bIsBeingDestroyed, true, "'Leave blank' item has been destroyed.");
		assert.equal(this.oMultiEditField._getValueHelp()._bIsBeingDestroyed, true, "'Set new value' item has been destroyed.");
		assert.equal(oItemTemplate._bIsBeingDestroyed, true, "Item template has been destroyed");
	});

	QUnit.test("Check if blank item is initially displayed.", function(assert) {
		assert.equal(this.oMultiEditField.indexOfItem(this.oMultiEditField._getBlank()), 1, "Blank item is displayed initially.");
	});

	QUnit.module("Selection change event handler", {
		beforeEach: function() {
			this.oMultiEditField = new MultiEditField({
				nullable: true
			});
			this.oMultiEditField.placeAt("qunit-fixture");
			oCore.applyChanges();
		},
		afterEach: function() {
			this.oMultiEditField.destroy();
			this.oMultiEditField = null;
		}
	});

	QUnit.test("Selection change event", function(assert) {
		//Arrange
		var oSelect = this.oMultiEditField.byId("select");

		//Assert
		assert.ok(oSelect.hasListeners("change"), "Selection change event handler is attached");
	});

	QUnit.test("Change event for a regular item", function(assert) {
		//Arrange
		var oItem = new Item();
		this.oMultiEditField.attachChange(onChangeHandler);
		sinon.stub(this.oMultiEditField, "_getExternalItem").returns(oItem);

		//Act
		this.oMultiEditField.byId("select").fireChange({
			selectedItem: oItem
		});

		//Assert
		function onChangeHandler(oEvent) {
			assert.equal(oEvent.getParameter("selectedItem"), oItem, "Event parameter item returns correctly");
		}
	});

	QUnit.test("Change event for 'keep all' item", function(assert) {
		//Arrange
		var oSpy = sinon.spy(this.oMultiEditField, "fireChange");
		var oSelect = this.oMultiEditField.byId("select");
		var oItem = this.oMultiEditField._getKeepAll();

		//Act
		oSelect.fireChange({
			selectedItem: oItem
		});

		//Assert
		assert.equal(oSpy.callCount, 0, "The change event is not triggered");
	});

	QUnit.test("Change event for 'leave blank' item", function(assert) {
		//Arrange
		var oSpy = sinon.spy(this.oMultiEditField, "fireChange");
		var oSelect = this.oMultiEditField.byId("select");
		var oItem = this.oMultiEditField._getBlank();

		//Act
		oSelect.fireChange({
			selectedItem: oItem
		});

		//Assert
		assert.equal(oSpy.callCount, 0, "The change event is not triggered");
	});

	QUnit.test("Change event for 'value help' item", function(assert) {
		//Arrange
		var oSpy = sinon.spy(this.oMultiEditField, "fireEvent");
		var oSelect = this.oMultiEditField.byId("select");
		var oItem = this.oMultiEditField._getValueHelp();
		sinon.stub(this.oMultiEditField, "_getExternalItem").returns(oItem);

		//Act
		oSelect.fireChange({
			selectedItem: oItem
		});

		//Assert
		assert.equal(oSpy.callCount, 1, "The fireEvent function has been called once.");
		assert.equal(oSpy.firstCall.args[0], "_valueHelpRequest", "The _valueHelpRequest event has been triggered.");
	});

	QUnit.test("Selected items are synchronized on selection", function(assert) {
		//Arrange
		var oSelect = this.oMultiEditField.byId("select");
		var oSpy = sinon.spy(this.oMultiEditField, "setProperty");
		var oItem = oSelect.getItems()[1]; //Leave blank item

		//Act
		oSelect.fireChange({
			selectedItem: oItem
		});

		//Assert
		assert.equal(oSpy.callCount, 1, "The setProperty function has been called once.");
		assert.equal(oSpy.firstCall.args[0], "selectedItem", "The first parameter has been correct.");
		assert.equal(oSpy.firstCall.args[1], this.oMultiEditField._getBlank(), "The second parameter has been correct.");
		assert.equal(oSpy.firstCall.args[2], true, "The third parameter has been correct.");
	});

	QUnit.test("Selected items are synchronized on rendering", function(assert) {
		//Arrange
		var oSelect = this.oMultiEditField.byId("select");
		var oSpy = sinon.spy(oSelect, "setSelectedItem");
		var oItem = oSelect.getItems()[1]; //Leave Blank item

		//Act
		oSelect.fireChange({
			selectedItem: oItem
		});
		this.oMultiEditField.invalidate();
		oCore.applyChanges();

		//Assert
		assert.equal(oSpy.callCount, 1, "The setSelectedKey function has been called once.");
		assert.equal(oSpy.firstCall.args[0], oItem, "The correct item instance has been passed.");
	});

	QUnit.test("The value help item is not selected from the initial state", function(assert) {
		//Arrange
		var oSelect = this.oMultiEditField.byId("select");
		var oItem = oSelect.getItems()[2]; //Value Help item

		//Act
		oSelect.fireChange({
			selectedItem: oItem
		});

		//Assert
		assert.equal(this.oMultiEditField.getSelectedItem(), null, "The selectedItem property has the default value.");
	});

	QUnit.test("The value help item is not selected with a previous selection", function(assert) {
		//Arrange
		var oSelect = this.oMultiEditField.byId("select");
		var oItem = oSelect.getItems()[2]; //Value Help item
		this.oMultiEditField.setProperty("selectedItem", this.oMultiEditField._getBlank()); // Select Nullable item

		//Act
		oSelect.fireChange({
			selectedItem: oItem
		});

		//Assert
		assert.equal(this.oMultiEditField.getSelectedItem(), this.oMultiEditField._getBlank(), "The selectedItem property has the previous value.");
	});

	QUnit.module("Setters and getters", {
		beforeEach: function (){
			this.oMultiEditField = new MultiEditField();
			this.oMultiEditField.placeAt("qunit-fixture");
			oCore.applyChanges();
		},
		afterEach: function() {
			this.oMultiEditField.destroy();
			this.oMultiEditField = null;
		}
	});

	QUnit.test("Setter for property showValueHelp", function(assert) {
		//Arrange
		this.oMultiEditField.setShowValueHelp(false);
		//Act
		oCore.applyChanges();
		//Assert
		assert.equal(this.oMultiEditField.indexOfItem(this.oMultiEditField._getValueHelp()), -1, "'Set new value' item will not be displayed.");
	});

	QUnit.test("Setter for property nullable", function(assert) {
		//Arrange
		this.oMultiEditField.setNullable(true);
		//Act
		oCore.applyChanges();
		//Assert
		assert.notEqual(this.oMultiEditField.indexOfItem(this.oMultiEditField._getBlank()), -1, "'Leave blank' item will be displayed.");
	});

	QUnit.test("Set selected item with special value item", function(assert) {
		//Arrange
		var oItem = this.oMultiEditField._getKeepAll();
		//Act
		var oResult = this.oMultiEditField.setSelectedItem(oItem);
		//Assert
		assert.equal(this.oMultiEditField.byId("select").getSelectedKey(), "keep", "The" + oItem.getText() + " item is selected and displayed in MultiEditField");
		assert.equal(this.oMultiEditField.getSelectedItem(), null, "Null is returned by getSelectedItem when special value item is selected");
		assert.equal(this.oMultiEditField, oResult, "Instance is returned");
	});

	QUnit.test("Set regular item as selected item", function(assert) {
		//Arrange
		var oItem = new Item({
			key: "SuperKey",
			text: "text"
		});
		this.oMultiEditField.addItem(oItem);

		//Act
		this.oMultiEditField.setSelectedItem(oItem);

		//Assert
		assert.equal(this.oMultiEditField.byId("select").getSelectedKey(), "SuperKey", "The item is selected and displayed in MultiEditField");
	});

	QUnit.test("Set foreign item as selected item", function(assert) {
		//Arrange
		var oItem = new Item({
			key: "key",
			text: "text"
		});

		//Act
		this.oMultiEditField.setSelectedItem(oItem);

		//Assert
		assert.notEqual(this.oMultiEditField.byId("select").getSelectedKey(), "key", "The item is not selected and displayed in MultiEditField");
		assert.equal(this.oMultiEditField.getSelectedItem(), null, "Null is returned because the item is not of the items aggregation and no item has been previously selected.");
	});

	QUnit.test("Setting a non-sap.ui.core.Item ignores the parameter", function(assert) {
		//Arrange
		//Act
		this.oMultiEditField.setSelectedItem("otto");

		//Assert
		assert.equal(this.oMultiEditField.getSelectedItem(), null, "SelectedItem is still null");
	});

	QUnit.test("Method 'getFormDoNotAdjustWidth' always returns true", function(assert) {
		assert.equal(this.oMultiEditField.getFormDoNotAdjustWidth(), true, "The method has returned the correct value.");
	});

	QUnit.test("Method 'resetSelection' updates the internal Select's selected item", function(assert) {
		//Arrange
		var oSelect = this.oMultiEditField.byId("select");
		var oSpy = sinon.spy(oSelect, "setSelectedItem");
		this.oMultiEditField._oLastSelectedItem = this.oMultiEditField.getItems()[1];

		//Act
		this.oMultiEditField.resetSelection();

		//Assert
		assert.equal(oSpy.callCount, 1, "The method 'setSelectedItem' has been called once.");
		assert.deepEqual(oSelect.getSelectedItem(), oSelect.getItems()[1], "The correct external item is mapped to the internal item and is selected.");
	});

	QUnit.module("Item rendering", {
		beforeEach: function() {
			this.oMultiEditField = new MultiEditField().placeAt("qunit-fixture");
			oCore.applyChanges();
		},
		afterEach: function() {
			this.oMultiEditField.destroy();
			this.oMultiEditField = null;
		}
	});

	QUnit.test("Keep item is added to Select", function(assert) {
		assert.ok(this.oMultiEditField.byId("select").getItemByKey("keep"), "The item with key 'keep' has been added to the internal control.");
	});

	QUnit.test("Blank item is added to Select", function(assert) {
		assert.ok(this.oMultiEditField.byId("select").getItemByKey("blank"), "The item with key 'blank' has been added to the internal control.");
	});

	QUnit.test("Blank item is not added to Select if nullable is false", function(assert) {
		//Arrange
		this.oMultiEditField.setNullable(false);

		//Act
		oCore.applyChanges();

		//Assert
		assert.notOk(this.oMultiEditField.byId("select").getItemByKey("blank"), "The item with key 'blank' has not been added to the internal control.");
	});

	QUnit.test("Value help item is added to Select", function(assert) {
		assert.ok(this.oMultiEditField.byId("select").getItemByKey("new"), "The item with key 'blank' has been added to the internal control.");
	});

	QUnit.test("Value help item is not added to Select if showValueHelp is false", function(assert) {
		//Arrange
		this.oMultiEditField.setShowValueHelp(false);

		//Act
		oCore.applyChanges();

		//Assert
		assert.notOk(this.oMultiEditField.byId("select").getItemByKey("new"), "The item with key 'new' has not been added to the internal control.");
	});

	QUnit.module("Public methods", {
		beforeEach: function() {
			this.oMultiEditField = new MultiEditField();
			this.oMultiEditField.placeAt("qunit-fixture");
			oCore.applyChanges();
		},
		afterEach: function() {
			this.oMultiEditField.destroy();
			this.oMultiEditField = null;
		}
	});

	QUnit.test("isBlankSelection function", function(assert) {
		//Arrange
		this.oMultiEditField.setNullable(true);
		oCore.applyChanges();
		var oSelect = this.oMultiEditField.byId("select");
		var oItem = oSelect.getItemByKey("blank");
		//Act
		oSelect.setSelectedItem(oItem);
		//Assert
		assert.ok(this.oMultiEditField.isBlankSelected(), "'Leave blank' item is currently selected");
	});

	QUnit.test("isKeepExistingSelection function", function(assert) {
		//Arrange
		var oSelect = this.oMultiEditField.byId("select");
		var oItem = oSelect.getItemByKey("keep");
		//Act
		oSelect.setSelectedItem(oItem);
		//Assert
		assert.ok(this.oMultiEditField.isKeepExistingSelected(), "'Keep existing value' item is currently selected");
	});

	QUnit.module("Private methods", {
		beforeEach: function() {
			this.oMultiEditField = new MultiEditField();
			this.oMultiEditField.placeAt("qunit-fixture");
			oCore.applyChanges();
		},
		afterEach: function() {
			this.oMultiEditField.destroy();
			this.oMultiEditField = null;
		}
	});

	QUnit.test("_getExternalItem function", function(assert) {
		//Arrange
		var oValidItem = new Item({
			key: "key",
			text: "text"
		});
		var oInvalidItem = new Item();
		this.oMultiEditField.setNullable(true);
		this.oMultiEditField.addItem(oValidItem);
		oCore.applyChanges();
		var oKeepItem = this.oMultiEditField.byId("select").getItemByKey("keep");
		var oBlankItem = this.oMultiEditField.byId("select").getItemByKey("blank");
		var oValueHelpItem = this.oMultiEditField.byId("select").getItemByKey("new");
		var oValidInternalItem = this.oMultiEditField.byId("select").getItemByKey("key");
		//Assert
		assert.deepEqual(this.oMultiEditField._getExternalItem(oKeepItem), this.oMultiEditField._getKeepAll(), "'Keep existing value' item is returned correctly");
		assert.deepEqual(this.oMultiEditField._getExternalItem(oBlankItem), this.oMultiEditField._getBlank(), "'Leave blank' item is returned correctly");
		assert.deepEqual(this.oMultiEditField._getExternalItem(oValueHelpItem), this.oMultiEditField._getValueHelp(), "'Set new value' item is returned correctly");
		assert.deepEqual(this.oMultiEditField._getExternalItem(oValidInternalItem), oValidItem, "regular item is returned correctly");
		assert.equal(this.oMultiEditField._getExternalItem(oInvalidItem), null, "Null is returned because the item is not part of any items aggregation.");
	});

	QUnit.test("_getInternalItem function for items with own keys", function(assert) {
		//Arrange
		var oValidItem = new Item({
			key: "key",
			text: "text"
		});
		var oInvalidItem = new Item();
		this.oMultiEditField.setNullable(true);
		this.oMultiEditField.addItem(oValidItem);
		oCore.applyChanges();
		var oKeepItem = this.oMultiEditField.byId("select").getItemByKey("keep");
		var oBlankItem = this.oMultiEditField.byId("select").getItemByKey("blank");
		var oValueHelpItem = this.oMultiEditField.byId("select").getItemByKey("new");
		var oValidInternalItem = this.oMultiEditField.byId("select").getItemByKey("key");

		//Assert
		assert.deepEqual(this.oMultiEditField._getInternalItem(this.oMultiEditField._getKeepAll()), oKeepItem, "'Keep existing value' item is returned correctly");
		assert.deepEqual(this.oMultiEditField._getInternalItem(this.oMultiEditField._getBlank()), oBlankItem, "'Leave blank' item is returned correctly");
		assert.deepEqual(this.oMultiEditField._getInternalItem(this.oMultiEditField._getValueHelp()), oValueHelpItem, "'Set new value' item is returned correctly");
		assert.deepEqual(this.oMultiEditField._getInternalItem(oValidItem), oValidInternalItem, "regular item is returned correctly");
		assert.equal(this.oMultiEditField._getInternalItem(oInvalidItem), null, "Null is returned because the item is not part of any items aggregation.");
	});

	QUnit.test("_getInternalItem function for items without own keys", function(assert) {
		//Arrange
		var oValidItem = new Item("myItem", {
			text: "text"
		});
		var oInvalidItem = new Item();
		this.oMultiEditField.addItem(oValidItem);
		oCore.applyChanges();
		var oValidInternalItem = this.oMultiEditField.byId("select").getItems()[3];

		//Assert
		assert.deepEqual(this.oMultiEditField._getInternalItem(oValidItem), oValidInternalItem, "The MultiEditField item has been correctly mapped to an internal Select item.");
		assert.equal(this.oMultiEditField._getInternalItem(oInvalidItem), null, "Null is returned because the item is not part of any items aggregation.");
	});

	QUnit.test("_isSpecialValueItem function", function(assert) {
		//Arrange
		var oKeepAllItem = this.oMultiEditField._getKeepAll();
		var oBlankItem = this.oMultiEditField._getBlank();
		var oValueHelpItem = this.oMultiEditField._getValueHelp();
		var oRegularItem = new Item();
		//Act
		assert.ok(this.oMultiEditField._isSpecialValueItem(oKeepAllItem), "'Keep existing value' item is special value item");
		assert.ok(this.oMultiEditField._isSpecialValueItem(oBlankItem), "'Leave blank' item is special value item");
		assert.ok(this.oMultiEditField._isSpecialValueItem(oValueHelpItem), "'Set new value' item is special value item");
		assert.notOk(this.oMultiEditField._isSpecialValueItem(oRegularItem), "Item is not special value item");
	});

	QUnit.test("_getInternalDomRef function", function(assert) {
		//Arrange
		var oDomRef,
			oDomRefSelect;

		oDomRefSelect = this.oMultiEditField.byId("select").getDomRef();

		//Act
		oDomRef = this.oMultiEditField._getInternalDomRef();

		//Assert
		assert.deepEqual(oDomRef, oDomRefSelect, "The DOM reference of the Select control is returned");
	});

	QUnit.test("_getInternalDomRef function returns undefined if the control has already been destroyed", function(assert) {
		//Arrange
		var oDomRef;

		this.oMultiEditField.destroy();

		//Act
		oDomRef = this.oMultiEditField._getInternalDomRef();

		//Assert
		assert.equal(typeof oDomRef, "undefined", "The DOM reference of the Select does not exist and undefined is returned.");
	});

	QUnit.test("_getInternalUIArea function", function(assert) {
		//Arrange
		var oUIArea,
			oUIAreaSelect;

		oUIAreaSelect = this.oMultiEditField.byId("select").getUIArea();

		//Act
		oUIArea = this.oMultiEditField._getInternalUIArea();

		//Assert
		assert.deepEqual(oUIArea, oUIAreaSelect, "The UI area of the Select control is returned");
	});

});
