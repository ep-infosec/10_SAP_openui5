sap.ui.define(["sap/ui/integration/Designtime"
], function (Designtime) {
	"use strict";
	return function () {
		return new Designtime({
			"form": {
				"items": {
					"stringNotEditableParameter": {
						"manifestpath": "/sap.card1/configuration/parameters/stringNotEditableParameter/value",
						"type": "string",
						"translatable": true,
						"editable": false,
						"description": "Description"
					},
					"stringNotVisibleParameter": {
						"manifestpath": "/sap.card1/configuration/parameters/stringNotVisibleParameter/value",
						"type": "string",
						"translatable": true,
						"visible": false,
						"description": "Description"
					}
				}
			}
		});
	};
});
