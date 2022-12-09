sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"], function (_exports, _LitRenderer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* eslint no-unused-vars: 0 */
  const block0 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-responsive-popover", tags, suffix)} id="${(0, _LitRenderer.ifDefined)(context._id)}-responsive-popover" allow-target-overlap placement-type="Bottom" horizontal-align="Left" hide-arrow ?_hide-header=${(0, _LitRenderer.ifDefined)(context._shouldHideHeader)} @keydown="${context._onkeydown}" @ui5-after-close="${(0, _LitRenderer.ifDefined)(context.onResponsivePopoverAfterClose)}">${context.showHeader ? block1(context, tags, suffix) : undefined}<div class="ui5-dt-picker-content ${(0, _LitRenderer.classMap)(context.classes.picker)}"><${(0, _LitRenderer.scopeTag)("ui5-calendar", tags, suffix)} class="ui5-dt-cal ${(0, _LitRenderer.classMap)(context.classes.dateTimeView)}" id="${(0, _LitRenderer.ifDefined)(context._id)}-calendar" primary-calendar-type="${(0, _LitRenderer.ifDefined)(context._primaryCalendarType)}" secondary-calendar-type="${(0, _LitRenderer.ifDefined)(context.secondaryCalendarType)}" format-pattern="${(0, _LitRenderer.ifDefined)(context._formatPattern)}" timestamp="${(0, _LitRenderer.ifDefined)(context._calendarTimestamp)}" .selectionMode="${(0, _LitRenderer.ifDefined)(context._calendarSelectionMode)}" .minDate="${(0, _LitRenderer.ifDefined)(context.minDate)}" .maxDate="${(0, _LitRenderer.ifDefined)(context.maxDate)}" @ui5-selected-dates-change="${(0, _LitRenderer.ifDefined)(context.onSelectedDatesChange)}" @ui5-show-month-press="${(0, _LitRenderer.ifDefined)(context.onHeaderShowMonthPress)}" @ui5-show-year-press="${(0, _LitRenderer.ifDefined)(context.onHeaderShowYearPress)}" ?hide-week-numbers="${context.hideWeekNumbers}" ._currentPicker="${(0, _LitRenderer.ifDefined)(context._calendarCurrentPicker)}">${(0, _LitRenderer.repeat)(context._calendarSelectedDates, (item, index) => item._id || index, (item, index) => block3(item, index, context, tags, suffix))}</${(0, _LitRenderer.scopeTag)("ui5-calendar", tags, suffix)}>${!context.phone ? block4(context, tags, suffix) : undefined}<${(0, _LitRenderer.scopeTag)("ui5-time-selection", tags, suffix)} id="${(0, _LitRenderer.ifDefined)(context._id)}-time-sel" class="ui5-dt-time ${(0, _LitRenderer.classMap)(context.classes.dateTimeView)}" value="${(0, _LitRenderer.ifDefined)(context._timeSelectionValue)}" format-pattern="${(0, _LitRenderer.ifDefined)(context._formatPattern)}" ._currentSlider="${(0, _LitRenderer.ifDefined)(context._currentTimeSlider)}" ._calendarType="${(0, _LitRenderer.ifDefined)(context._primaryCalendarType)}" @ui5-change="${(0, _LitRenderer.ifDefined)(context.onTimeSelectionChange)}" @ui5-slider-change="${(0, _LitRenderer.ifDefined)(context.onTimeSliderChange)}"></${(0, _LitRenderer.scopeTag)("ui5-time-selection", tags, suffix)}></div>${context.showFooter ? block5(context, tags, suffix) : undefined}</${(0, _LitRenderer.scopeTag)("ui5-responsive-popover", tags, suffix)}> ` : (0, _LitRenderer.html)`<ui5-responsive-popover id="${(0, _LitRenderer.ifDefined)(context._id)}-responsive-popover" allow-target-overlap placement-type="Bottom" horizontal-align="Left" hide-arrow ?_hide-header=${(0, _LitRenderer.ifDefined)(context._shouldHideHeader)} @keydown="${context._onkeydown}" @ui5-after-close="${(0, _LitRenderer.ifDefined)(context.onResponsivePopoverAfterClose)}">${context.showHeader ? block1(context, tags, suffix) : undefined}<div class="ui5-dt-picker-content ${(0, _LitRenderer.classMap)(context.classes.picker)}"><ui5-calendar class="ui5-dt-cal ${(0, _LitRenderer.classMap)(context.classes.dateTimeView)}" id="${(0, _LitRenderer.ifDefined)(context._id)}-calendar" primary-calendar-type="${(0, _LitRenderer.ifDefined)(context._primaryCalendarType)}" secondary-calendar-type="${(0, _LitRenderer.ifDefined)(context.secondaryCalendarType)}" format-pattern="${(0, _LitRenderer.ifDefined)(context._formatPattern)}" timestamp="${(0, _LitRenderer.ifDefined)(context._calendarTimestamp)}" .selectionMode="${(0, _LitRenderer.ifDefined)(context._calendarSelectionMode)}" .minDate="${(0, _LitRenderer.ifDefined)(context.minDate)}" .maxDate="${(0, _LitRenderer.ifDefined)(context.maxDate)}" @ui5-selected-dates-change="${(0, _LitRenderer.ifDefined)(context.onSelectedDatesChange)}" @ui5-show-month-press="${(0, _LitRenderer.ifDefined)(context.onHeaderShowMonthPress)}" @ui5-show-year-press="${(0, _LitRenderer.ifDefined)(context.onHeaderShowYearPress)}" ?hide-week-numbers="${context.hideWeekNumbers}" ._currentPicker="${(0, _LitRenderer.ifDefined)(context._calendarCurrentPicker)}">${(0, _LitRenderer.repeat)(context._calendarSelectedDates, (item, index) => item._id || index, (item, index) => block3(item, index, context, tags, suffix))}</ui5-calendar>${!context.phone ? block4(context, tags, suffix) : undefined}<ui5-time-selection id="${(0, _LitRenderer.ifDefined)(context._id)}-time-sel" class="ui5-dt-time ${(0, _LitRenderer.classMap)(context.classes.dateTimeView)}" value="${(0, _LitRenderer.ifDefined)(context._timeSelectionValue)}" format-pattern="${(0, _LitRenderer.ifDefined)(context._formatPattern)}" ._currentSlider="${(0, _LitRenderer.ifDefined)(context._currentTimeSlider)}" ._calendarType="${(0, _LitRenderer.ifDefined)(context._primaryCalendarType)}" @ui5-change="${(0, _LitRenderer.ifDefined)(context.onTimeSelectionChange)}" @ui5-slider-change="${(0, _LitRenderer.ifDefined)(context.onTimeSliderChange)}"></ui5-time-selection></div>${context.showFooter ? block5(context, tags, suffix) : undefined}</ui5-responsive-popover> `;

  const block1 = (context, tags, suffix) => (0, _LitRenderer.html)`${context.phone ? block2(context, tags, suffix) : undefined}`;

  const block2 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<div class="ui5-dt-picker-header"><${(0, _LitRenderer.scopeTag)("ui5-segmented-button", tags, suffix)} class="ui5-dt-picker-toggle-button"><${(0, _LitRenderer.scopeTag)("ui5-toggle-button", tags, suffix)} key="Date" ?pressed="${context.showDateView}" @click="${context._dateTimeSwitchChange}">${(0, _LitRenderer.ifDefined)(context.btnDateLabel)}</${(0, _LitRenderer.scopeTag)("ui5-toggle-button", tags, suffix)}><${(0, _LitRenderer.scopeTag)("ui5-toggle-button", tags, suffix)} key="Time" ?pressed="${context.showTimeView}" @click="${context._dateTimeSwitchChange}">${(0, _LitRenderer.ifDefined)(context.btnTimeLabel)}</${(0, _LitRenderer.scopeTag)("ui5-toggle-button", tags, suffix)}></${(0, _LitRenderer.scopeTag)("ui5-segmented-button", tags, suffix)}></div>` : (0, _LitRenderer.html)`<div class="ui5-dt-picker-header"><ui5-segmented-button class="ui5-dt-picker-toggle-button"><ui5-toggle-button key="Date" ?pressed="${context.showDateView}" @click="${context._dateTimeSwitchChange}">${(0, _LitRenderer.ifDefined)(context.btnDateLabel)}</ui5-toggle-button><ui5-toggle-button key="Time" ?pressed="${context.showTimeView}" @click="${context._dateTimeSwitchChange}">${(0, _LitRenderer.ifDefined)(context.btnTimeLabel)}</ui5-toggle-button></ui5-segmented-button></div>`;

  const block3 = (item, index, context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-date", tags, suffix)} value="${(0, _LitRenderer.ifDefined)(item)}"></${(0, _LitRenderer.scopeTag)("ui5-date", tags, suffix)}>` : (0, _LitRenderer.html)`<ui5-date value="${(0, _LitRenderer.ifDefined)(item)}"></ui5-date>`;

  const block4 = (context, tags, suffix) => (0, _LitRenderer.html)`<span class="ui5-dt-picker-separator"></span>`;

  const block5 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<div slot="footer" class="ui5-dt-picker-footer ${(0, _LitRenderer.classMap)(context.classes.footer)}"><${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)} id="ok" class="ui5-dt-picker-action" design="Emphasized" ?disabled="${context._submitDisabled}" @click="${context._submitClick}">${(0, _LitRenderer.ifDefined)(context.btnOKLabel)}</${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)}><${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)} id="cancel" class="ui5-dt-picker-action" design="Transparent" @click="${context._cancelClick}">${(0, _LitRenderer.ifDefined)(context.btnCancelLabel)}</${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)}></div>` : (0, _LitRenderer.html)`<div slot="footer" class="ui5-dt-picker-footer ${(0, _LitRenderer.classMap)(context.classes.footer)}"><ui5-button id="ok" class="ui5-dt-picker-action" design="Emphasized" ?disabled="${context._submitDisabled}" @click="${context._submitClick}">${(0, _LitRenderer.ifDefined)(context.btnOKLabel)}</ui5-button><ui5-button id="cancel" class="ui5-dt-picker-action" design="Transparent" @click="${context._cancelClick}">${(0, _LitRenderer.ifDefined)(context.btnCancelLabel)}</ui5-button></div>`;

  var _default = block0;
  _exports.default = _default;
});