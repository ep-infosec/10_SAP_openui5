sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"], function (_exports, _LitRenderer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* eslint no-unused-vars: 0 */
  const block0 = (context, tags, suffix) => (0, _LitRenderer.html)`<li part="native-li" tabindex="${(0, _LitRenderer.ifDefined)(context.tabIndex)}" class="${(0, _LitRenderer.classMap)(context.classes.main)}" @focusin="${context._onfocusin}" @focusout="${context._onfocusout}" @keyup="${context._onkeyup}" @keydown="${context._onkeydown}" @mouseup="${context._onmouseup}" @mousedown="${context._onmousedown}" @touchstart="${context._ontouchstart}" @touchend="${context._ontouchend}" @click="${context._onclick}" role="${(0, _LitRenderer.ifDefined)(context._accInfo.role)}" aria-expanded="${(0, _LitRenderer.ifDefined)(context._accInfo.ariaExpanded)}" title="${(0, _LitRenderer.ifDefined)(context.title)}" aria-level="${(0, _LitRenderer.ifDefined)(context._accInfo.ariaLevel)}" aria-haspopup="${(0, _LitRenderer.ifDefined)(context._accInfo.ariaHaspopup)}" aria-posinset="${(0, _LitRenderer.ifDefined)(context._accInfo.posinset)}" aria-setsize="${(0, _LitRenderer.ifDefined)(context._accInfo.setsize)}" aria-describedby="${(0, _LitRenderer.ifDefined)(context._id)}-invisibleText-describedby" aria-labelledby="${(0, _LitRenderer.ifDefined)(context._accessibleNameRef)}" aria-disabled="${(0, _LitRenderer.ifDefined)(context.ariaDisabled)}">${context.placeSelectionElementBefore ? block1(context, tags, suffix) : undefined}<div id="${(0, _LitRenderer.ifDefined)(context._id)}-content" class="ui5-li-content">${context.displayImage ? block5(context, tags, suffix) : undefined}${context.displayIconBegin ? block6(context, tags, suffix) : undefined}<div class="ui5-li-text-wrapper"><span part="title" class="ui5-li-title"><slot></slot></span>${context.description ? block7(context, tags, suffix) : undefined}${!context.typeActive ? block9(context, tags, suffix) : undefined}</div>${!context.description ? block10(context, tags, suffix) : undefined}</div>${context.displayIconEnd ? block12(context, tags, suffix) : undefined}${context.typeDetail ? block13(context, tags, suffix) : undefined}${context.placeSelectionElementAfter ? block14(context, tags, suffix) : undefined}<span id="${(0, _LitRenderer.ifDefined)(context._id)}-invisibleText" class="ui5-hidden-text">${(0, _LitRenderer.ifDefined)(context._accInfo.listItemAriaLabel)}${(0, _LitRenderer.ifDefined)(context.accessibleName)}</span><span id="${(0, _LitRenderer.ifDefined)(context._id)}-invisibleText-describedby" class="ui5-hidden-text">${(0, _LitRenderer.ifDefined)(context._accInfo.ariaSelectedText)}</span></li> `;

  const block1 = (context, tags, suffix) => (0, _LitRenderer.html)`${context.modeSingleSelect ? block2(context, tags, suffix) : undefined}${context.modeMultiSelect ? block3(context, tags, suffix) : undefined}${context.renderDeleteButton ? block4(context, tags, suffix) : undefined}`;

  const block2 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-radio-button", tags, suffix)} ?disabled="${context.isInactive}" accessible-name="${(0, _LitRenderer.ifDefined)(context._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${(0, _LitRenderer.ifDefined)(context._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${context.selected}" @click="${context.onSingleSelectionComponentPress}"></${(0, _LitRenderer.scopeTag)("ui5-radio-button", tags, suffix)}>` : (0, _LitRenderer.html)`<ui5-radio-button ?disabled="${context.isInactive}" accessible-name="${(0, _LitRenderer.ifDefined)(context._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${(0, _LitRenderer.ifDefined)(context._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${context.selected}" @click="${context.onSingleSelectionComponentPress}"></ui5-radio-button>`;

  const block3 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-checkbox", tags, suffix)} ?disabled="${context.isInactive}" ?indeterminate=${context.indeterminate} tabindex="-1" id="${(0, _LitRenderer.ifDefined)(context._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${context.selected}" aria-label="${(0, _LitRenderer.ifDefined)(context._accInfo.ariaLabel)}" @click="${context.onMultiSelectionComponentPress}"></${(0, _LitRenderer.scopeTag)("ui5-checkbox", tags, suffix)}>` : (0, _LitRenderer.html)`<ui5-checkbox ?disabled="${context.isInactive}" ?indeterminate=${context.indeterminate} tabindex="-1" id="${(0, _LitRenderer.ifDefined)(context._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${context.selected}" aria-label="${(0, _LitRenderer.ifDefined)(context._accInfo.ariaLabel)}" @click="${context.onMultiSelectionComponentPress}"></ui5-checkbox>`;

  const block4 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<div class="ui5-li-deletebtn"><${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)} tabindex="-1" data-sap-no-tab-ref id="${(0, _LitRenderer.ifDefined)(context._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${context.disableDeleteButton}" @click="${context.onDelete}" tooltip="${(0, _LitRenderer.ifDefined)(context.deleteText)}"></${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)}></div>` : (0, _LitRenderer.html)`<div class="ui5-li-deletebtn"><ui5-button tabindex="-1" data-sap-no-tab-ref id="${(0, _LitRenderer.ifDefined)(context._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${context.disableDeleteButton}" @click="${context.onDelete}" tooltip="${(0, _LitRenderer.ifDefined)(context.deleteText)}"></ui5-button></div>`;

  const block5 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-avatar", tags, suffix)} shape="Square" class="ui5-li-img"><img src="${(0, _LitRenderer.ifDefined)(context.image)}" class="ui5-li-img-inner" /></${(0, _LitRenderer.scopeTag)("ui5-avatar", tags, suffix)}>` : (0, _LitRenderer.html)`<ui5-avatar shape="Square" class="ui5-li-img"><img src="${(0, _LitRenderer.ifDefined)(context.image)}" class="ui5-li-img-inner" /></ui5-avatar>`;

  const block6 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-icon", tags, suffix)} part="icon" name="${(0, _LitRenderer.ifDefined)(context.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></${(0, _LitRenderer.scopeTag)("ui5-icon", tags, suffix)}>` : (0, _LitRenderer.html)`<ui5-icon part="icon" name="${(0, _LitRenderer.ifDefined)(context.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></ui5-icon>`;

  const block7 = (context, tags, suffix) => (0, _LitRenderer.html)`<div class="ui5-li-description-info-wrapper"><span part="description" class="ui5-li-desc">${(0, _LitRenderer.ifDefined)(context.description)}</span>${context.additionalText ? block8(context, tags, suffix) : undefined}</div>`;

  const block8 = (context, tags, suffix) => (0, _LitRenderer.html)`<span part="additional-text" class="ui5-li-additional-text">${(0, _LitRenderer.ifDefined)(context.additionalText)}</span>`;

  const block9 = (context, tags, suffix) => (0, _LitRenderer.html)`<span class="ui5-hidden-text">${(0, _LitRenderer.ifDefined)(context.type)}</span>`;

  const block10 = (context, tags, suffix) => (0, _LitRenderer.html)`${context.additionalText ? block11(context, tags, suffix) : undefined}`;

  const block11 = (context, tags, suffix) => (0, _LitRenderer.html)`<span part="additional-text" class="ui5-li-additional-text">${(0, _LitRenderer.ifDefined)(context.additionalText)}</span>`;

  const block12 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-icon", tags, suffix)} part="icon" name="${(0, _LitRenderer.ifDefined)(context.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></${(0, _LitRenderer.scopeTag)("ui5-icon", tags, suffix)}>` : (0, _LitRenderer.html)`<ui5-icon part="icon" name="${(0, _LitRenderer.ifDefined)(context.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></ui5-icon>`;

  const block13 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<div class="ui5-li-detailbtn"><${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)} design="Transparent" icon="edit" @click="${context.onDetailClick}"></${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)}></div>` : (0, _LitRenderer.html)`<div class="ui5-li-detailbtn"><ui5-button design="Transparent" icon="edit" @click="${context.onDetailClick}"></ui5-button></div>`;

  const block14 = (context, tags, suffix) => (0, _LitRenderer.html)`${context.modeSingleSelect ? block15(context, tags, suffix) : undefined}${context.modeMultiSelect ? block16(context, tags, suffix) : undefined}${context.renderDeleteButton ? block17(context, tags, suffix) : undefined}`;

  const block15 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-radio-button", tags, suffix)} ?disabled="${context.isInactive}" accessible-name="${(0, _LitRenderer.ifDefined)(context._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${(0, _LitRenderer.ifDefined)(context._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${context.selected}" @click="${context.onSingleSelectionComponentPress}"></${(0, _LitRenderer.scopeTag)("ui5-radio-button", tags, suffix)}>` : (0, _LitRenderer.html)`<ui5-radio-button ?disabled="${context.isInactive}" accessible-name="${(0, _LitRenderer.ifDefined)(context._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${(0, _LitRenderer.ifDefined)(context._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${context.selected}" @click="${context.onSingleSelectionComponentPress}"></ui5-radio-button>`;

  const block16 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-checkbox", tags, suffix)} ?disabled="${context.isInactive}" ?indeterminate=${context.indeterminate} tabindex="-1" id="${(0, _LitRenderer.ifDefined)(context._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${context.selected}" aria-label="${(0, _LitRenderer.ifDefined)(context._accInfo.ariaLabel)}" @click="${context.onMultiSelectionComponentPress}"></${(0, _LitRenderer.scopeTag)("ui5-checkbox", tags, suffix)}>` : (0, _LitRenderer.html)`<ui5-checkbox ?disabled="${context.isInactive}" ?indeterminate=${context.indeterminate} tabindex="-1" id="${(0, _LitRenderer.ifDefined)(context._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${context.selected}" aria-label="${(0, _LitRenderer.ifDefined)(context._accInfo.ariaLabel)}" @click="${context.onMultiSelectionComponentPress}"></ui5-checkbox>`;

  const block17 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<div class="ui5-li-deletebtn"><${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)} tabindex="-1" data-sap-no-tab-ref id="${(0, _LitRenderer.ifDefined)(context._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${context.disableDeleteButton}" @click="${context.onDelete}" tooltip="${(0, _LitRenderer.ifDefined)(context.deleteText)}"></${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)}></div>` : (0, _LitRenderer.html)`<div class="ui5-li-deletebtn"><ui5-button tabindex="-1" data-sap-no-tab-ref id="${(0, _LitRenderer.ifDefined)(context._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${context.disableDeleteButton}" @click="${context.onDelete}" tooltip="${(0, _LitRenderer.ifDefined)(context.deleteText)}"></ui5-button></div>`;

  var _default = block0;
  _exports.default = _default;
});