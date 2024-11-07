"use strict";(window["webpackJsonpPluginswag-pay-pal"]=window["webpackJsonpPluginswag-pay-pal"]||[]).push([[133],{4133:function(e,n,a){a.r(n),a.d(n,{default:function(){return s}});let{Criteria:t}=Shopware.Data;var s=Shopware.Component.wrapComponentConfig({template:'{% block swag_paypal_content_card_channel_config_express %}\n<sw-card\n    position-identifier="swag-paypal-card-channel-config-express"\n    :title="$tc(\'swag-paypal.settingForm.express.cardTitle\')"\n    :subtitle="$tc(\'swag-paypal.settingForm.express.cardSubtitle\')"\n>\n\n    {% block swag_paypal_content_card_channel_config_express_alert %}\n    <sw-alert v-if="doubleOptInConfig" variant="warning">{{ $tc(\'swag-paypal.settingForm.express.alertMessage\') }}</sw-alert>\n    {% endblock %}\n\n    {% block swag_paypal_content_card_channel_config_express_settings %}\n    <div v-if="actualConfigData" class="swag-paypal-settings-express-fields">\n\n        {% block swag_paypal_content_card_channel_config_express_settings_detail_enabled %}\n        <sw-inherit-wrapper\n            v-model:value="actualConfigData[\'SwagPayPal.settings.ecsDetailEnabled\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.ecsDetailEnabled\']"\n            :customInheritationCheckFunction="checkBoolFieldInheritance"\n        >\n            <template #content="props">\n                <sw-switch-field\n                    name="SwagPayPal.settings.ecsDetailEnabled"\n                    bordered\n                    :mapInheritance="props"\n                    :label="$tc(\'swag-paypal.settingForm.express.ecsDetailEnabled.label\')"\n                    :helpText="$tc(\'swag-paypal.settingForm.express.ecsDetailEnabled.helpText\')"\n                    :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        {% block swag_paypal_content_card_channel_config_express_settings_cart_enabled %}\n        <sw-inherit-wrapper\n            v-model:value="actualConfigData[\'SwagPayPal.settings.ecsCartEnabled\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.ecsCartEnabled\']"\n            :customInheritationCheckFunction="checkBoolFieldInheritance"\n        >\n            <template #content="props">\n                <sw-switch-field\n                    name="SwagPayPal.settings.ecsCartEnabled"\n                    bordered\n                    :mapInheritance="props"\n                    :label="$tc(\'swag-paypal.settingForm.express.ecsCartEnabled.label\')"\n                    :helpText="$tc(\'swag-paypal.settingForm.express.ecsCartEnabled.helpText\')"\n                    :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        {% block swag_paypal_content_card_channel_config_express_settings_off_canvas_enabled %}\n        <sw-inherit-wrapper\n            v-model:value="actualConfigData[\'SwagPayPal.settings.ecsOffCanvasEnabled\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.ecsOffCanvasEnabled\']"\n            :customInheritationCheckFunction="checkBoolFieldInheritance"\n        >\n            <template #content="props">\n                <sw-switch-field\n                    name="SwagPayPal.settings.ecsOffCanvasEnabled"\n                    bordered\n                    :mapInheritance="props"\n                    :label="$tc(\'swag-paypal.settingForm.express.ecsOffCanvasEnabled.label\')"\n                    :helpText="$tc(\'swag-paypal.settingForm.express.ecsOffCanvasEnabled.helpText\')"\n                    :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n\n        {% block swag_paypal_content_card_channel_config_express_settings_login_enabled %}\n        <sw-inherit-wrapper\n            v-model:value="actualConfigData[\'SwagPayPal.settings.ecsLoginEnabled\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.ecsLoginEnabled\']"\n            :customInheritationCheckFunction="checkBoolFieldInheritance"\n        >\n            <template #content="props">\n                <sw-switch-field\n                    name="SwagPayPal.settings.ecsLoginEnabled"\n                    bordered\n                    :mapInheritance="props"\n                    :label="$tc(\'swag-paypal.settingForm.express.ecsLoginEnabled.label\')"\n                    :helpText="$tc(\'swag-paypal.settingForm.express.ecsLoginEnabled.helpText\')"\n                    :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        {% block swag_paypal_content_card_channel_config_express_settings_listing_enabled %}\n        <sw-inherit-wrapper\n            v-model:value="actualConfigData[\'SwagPayPal.settings.ecsListingEnabled\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.ecsListingEnabled\']"\n            :customInheritationCheckFunction="checkBoolFieldInheritance"\n        >\n            <template #content="props">\n                <sw-switch-field\n                    name="SwagPayPal.settings.ecsListingEnabled"\n                    bordered\n                    :mapInheritance="props"\n                    :label="$tc(\'swag-paypal.settingForm.express.ecsListingEnabled.label\')"\n                    :helpText="$tc(\'swag-paypal.settingForm.express.ecsListingEnabled.helpText\')"\n                    :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        {% block swag_paypal_content_card_channel_config_express_settings_button_color %}\n        <sw-inherit-wrapper\n            v-model:value="actualConfigData[\'SwagPayPal.settings.ecsButtonColor\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.ecsButtonColor\']"\n            :customInheritationCheckFunction="checkTextFieldInheritance"\n            :label="$tc(\'swag-paypal.settingForm.express.ecsButtonColor.label\')"\n        >\n            <template #content="props">\n                <sw-single-select\n                    name="SwagPayPal.settings.ecsButtonColor"\n                    labelProperty="name"\n                    valueProperty="id"\n                    :options="buttonColorOptions"\n                    :isInherited="props.isInherited"\n                    :disabled="props.isInherited || renderSettingsDisabled"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        {% block swag_paypal_content_card_channel_config_express_settings_button_shape %}\n        <sw-inherit-wrapper\n            v-model:value="actualConfigData[\'SwagPayPal.settings.ecsButtonShape\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.ecsButtonShape\']"\n            :customInheritationCheckFunction="checkTextFieldInheritance"\n            :label="$tc(\'swag-paypal.settingForm.express.ecsButtonShape.label\')"\n        >\n            <template #content="props">\n                <sw-single-select\n                    name="SwagPayPal.settings.ecsButtonShape"\n                    labelProperty="name"\n                    valueProperty="id"\n                    :options="buttonShapeOptions"\n                    :isInherited="props.isInherited"\n                    :disabled="props.isInherited || renderSettingsDisabled"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        {% block swag_paypal_content_card_channel_config_express_settings_button_locale %}\n        <sw-inherit-wrapper\n            v-model:value="actualConfigData[\'SwagPayPal.settings.ecsButtonLanguageIso\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.ecsButtonLanguageIso\']"\n            :customInheritationCheckFunction="checkTextFieldInheritance"\n        >\n            <template #content="props">\n                <swag-paypal-locale-field\n                    name="SwagPayPal.settings.ecsButtonLanguageIso"\n                    :mapInheritance="props"\n                    :label="$tc(\'swag-paypal.settingForm.express.ecsButtonLanguageIso.label\')"\n                    :helpText="$tc(\'swag-paypal.settingForm.express.ecsButtonLanguageIso.helpText\')"\n                    :disabled="props.isInherited || renderSettingsDisabled"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                    @preventSave="preventSave"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        {% block swag_paypal_content_card_channel_config_express_settings_show_pay_later %}\n        <sw-inherit-wrapper\n            v-model:value="actualConfigData[\'SwagPayPal.settings.ecsShowPayLater\']"\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.ecsShowPayLater\']"\n            :customInheritationCheckFunction="checkBoolFieldInheritance"\n        >\n            <template #content="props">\n                <sw-switch-field\n                    name="SwagPayPal.settings.ecsShowPayLater"\n                    bordered\n                    :mapInheritance="props"\n                    :label="$tc(\'swag-paypal.settingForm.express.ecsShowPayLater.label\')"\n                    :helpText="$tc(\'swag-paypal.settingForm.express.ecsShowPayLater.helpText\')"\n                    :disabled="props.isInherited || renderSettingsDisabled"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n    </div>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["acl","repositoryFactory"],props:{actualConfigData:{type:Object,required:!0,default:()=>({})},allConfigs:{type:Object,required:!0},selectedSalesChannelId:{type:String,required:!1,default:null}},data(){return{doubleOptInConfig:!1}},created(){this.fetchSystemConfig()},computed:{buttonColorOptions(){return[{id:"blue",name:this.$tc("swag-paypal.settingForm.express.ecsButtonColor.options.blue")},{id:"black",name:this.$tc("swag-paypal.settingForm.express.ecsButtonColor.options.black")},{id:"gold",name:this.$tc("swag-paypal.settingForm.express.ecsButtonColor.options.gold")},{id:"silver",name:this.$tc("swag-paypal.settingForm.express.ecsButtonColor.options.silver")},{id:"white",name:this.$tc("swag-paypal.settingForm.express.ecsButtonColor.options.white")}]},buttonShapeOptions(){return[{id:"sharp",name:this.$tc("swag-paypal.settingForm.express.ecsButtonShape.options.sharp")},{id:"pill",name:this.$tc("swag-paypal.settingForm.express.ecsButtonShape.options.pill")},{id:"rect",name:this.$tc("swag-paypal.settingForm.express.ecsButtonShape.options.rect")}]},renderSettingsDisabled(){return!this.acl.can("swag_paypal.editor")||!this.actualConfigData["SwagPayPal.settings.ecsDetailEnabled"]&&!this.actualConfigData["SwagPayPal.settings.ecsCartEnabled"]&&!this.actualConfigData["SwagPayPal.settings.ecsOffCanvasEnabled"]&&!this.actualConfigData["SwagPayPal.settings.ecsProductDetailEnabled"]&&!this.actualConfigData["SwagPayPal.settings.ecsListingEnabled"]},systemConfigRepository(){return this.repositoryFactory.create("system_config")},systemConfigCriteria(){let e=new t;return e.addFilter(t.equals("configurationKey","core.loginRegistration.doubleOptInGuestOrder")),e.addFilter(t.equals("configurationValue","true")),e}},methods:{checkTextFieldInheritance(e){return"string"!=typeof e||e.length<=0},checkBoolFieldInheritance(e){return"boolean"!=typeof e},async fetchSystemConfig(){let e=await this.systemConfigRepository.search(this.systemConfigCriteria);this.doubleOptInConfig=e?.total!=null&&e.total>0},preventSave(e){this.$emit("preventSave",e)}}})}}]);