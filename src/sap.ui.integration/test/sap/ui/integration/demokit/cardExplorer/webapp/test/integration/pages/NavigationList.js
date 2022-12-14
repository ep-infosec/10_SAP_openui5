sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/matchers/Properties",
	"sap/ui/test/actions/Press"
], function(Opa5, Properties, Press) {
	"use strict";

	var sViewName = "App";

	Opa5.createPageObjects({
		onTheNavigationList: {

			actions: {
				iSwitchToSample: function (sKey) {
					var bIsExpanded,
						oNavigation;

					return this.waitFor({
						viewName: sViewName,
						controlType: "sap.tnt.SideNavigation",
						actions: function (oControl) {
							oNavigation = oControl;
							bIsExpanded = oNavigation.getExpanded();

							oNavigation.setExpanded(true);
						},
						success: function () {
							this.waitFor({
								viewName: sViewName,
								controlType: "sap.tnt.NavigationListItem",
								matchers: new Properties({ key: sKey }),
								actions: new Press(),
								success: function () {
									oNavigation.setExpanded(bIsExpanded);
								},
								errorMessage: "Could not NavigationListItem with key: " + sKey
							});
						},
						errorMessage: "Could not expand side navigation"
					});
				}
			},

			assertions: {
				iShouldSeeSelectedEntry: function (sKey) {
					return this.waitFor({
						controlType: "sap.tnt.NavigationListItem",
						viewName: sViewName,
						matchers: {
							properties: {
								key: sKey
							}
						},
						success: function () {
							Opa5.assert.ok(true, "Selected entry in the navigation list is correct");
						},
						errorMessage: "Item with key " + sKey + " is not selected in the navigation list"
					});
				}
			}
		}
	});
});