"use strict";(window["webpackJsonpPluginswag-pay-pal"]=window["webpackJsonpPluginswag-pay-pal"]||[]).push([[756],{756:function(e,n,t){t.r(n),t.d(n,{default:function(){return a}});var a=Shopware.Component.wrapComponentConfig({template:'{% block swag_paypal_content_card_channel_config_credentials %}\n<sw-card\n    position-identifier="swag-paypal-credentials"\n    :title="$tc(\'swag-paypal.settingForm.credentials.cardTitle\')"\n>\n\n    {% block swag_paypal_content_card_channel_config_credentials_card_container %}\n    <sw-container>\n\n        {% block swag_paypal_content_card_channel_config_credentials_card_container_settings %}\n        <div v-if="actualConfigData" class="swag-paypal-settings-credentials-fields">\n\n            {% block swag_paypal_content_card_channel_config_credentials_card_container_settings_client_id %}\n            <sw-inherit-wrapper\n                v-model:value="actualConfigData[\'SwagPayPal.settings.clientId\']"\n                :inheritedValue="selectedSalesChannelId === null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.clientId\']"\n                :customInheritationCheckFunction="checkTextFieldInheritance"\n            >\n                <template #content="props">\n                    <sw-text-field\n                        name="SwagPayPal.settings.clientId"\n                        :mapInheritance="props"\n                        :label="$tc(\'swag-paypal.settingForm.credentials.clientId.label\')"\n                        :helpText="$tc(\'swag-paypal.settingForm.credentials.clientId.tooltipText\')"\n                        :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                        :value="props.currentValue"\n                        :error="clientIdErrorState"\n                        @update:value="props.updateCurrentValue"\n                    />\n                </template>\n            </sw-inherit-wrapper>\n            {% endblock %}\n\n            {% block swag_paypal_content_card_channel_config_credentials_card_container_settings_client_secret %}\n            <sw-inherit-wrapper\n                v-model:value="actualConfigData[\'SwagPayPal.settings.clientSecret\']"\n                :inheritedValue="selectedSalesChannelId === null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.clientSecret\']"\n                :customInheritationCheckFunction="checkTextFieldInheritance"\n            >\n                <template #content="props">\n                    <sw-text-field\n                        name="SwagPayPal.settings.clientSecret"\n                        :mapInheritance="props"\n                        :label="$tc(\'swag-paypal.settingForm.credentials.clientSecret.label\')"\n                        :helpText="$tc(\'swag-paypal.settingForm.credentials.clientSecret.tooltipText\')"\n                        :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                        :value="props.currentValue"\n                        :error="clientSecretErrorState"\n                        @update:value="props.updateCurrentValue"\n                    />\n                </template>\n            </sw-inherit-wrapper>\n            {% endblock %}\n\n            {% block swag_paypal_content_card_channel_config_credentials_card_container_settings_merchant_id %}\n            <sw-inherit-wrapper\n                v-model:value="actualConfigData[\'SwagPayPal.settings.merchantPayerId\']"\n                :inheritedValue="selectedSalesChannelId === null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.merchantPayerId\']"\n                :customInheritationCheckFunction="checkTextFieldInheritance"\n            >\n                <template #content="props">\n                    <sw-text-field\n                        name="SwagPayPal.settings.merchantPayerId"\n                        :mapInheritance="props"\n                        :label="$tc(\'swag-paypal.settingForm.credentials.merchantPayerId.label\')"\n                        :helpText="$tc(\'swag-paypal.settingForm.credentials.merchantPayerId.tooltipText\')"\n                        :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                        :value="props.currentValue"\n                        @update:value="props.updateCurrentValue"\n                    />\n                </template>\n            </sw-inherit-wrapper>\n            {% endblock %}\n\n            {% block swag_paypal_content_card_channel_config_credentials_card_container_settings_actions_test %}\n            <sw-button-process\n                v-model:processSuccess="isTestLiveSuccessful"\n                class="swag-paypal-settings-credentials-fields__test-button"\n                :isLoading="isTestingLive"\n                :disabled="testLiveButtonDisabled"\n                @click="onTest(false)"\n            >\n                {{ $tc(\'swag-paypal.settingForm.testLive\') }}\n            </sw-button-process>\n            {% endblock %}\n\n            {% block swag_paypal_content_card_channel_config_credentials_card_container_settings_sandbox %}\n            <sw-inherit-wrapper\n                v-model:value="actualConfigData[\'SwagPayPal.settings.sandbox\']"\n                :inheritedValue="selectedSalesChannelId === null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.sandbox\']"\n                :customInheritationCheckFunction="checkBoolFieldInheritance"\n            >\n                <template #content="props">\n                    <sw-switch-field\n                        name="SwagPayPal.settings.sandbox"\n                        :mapInheritance="props"\n                        :label="$tc(\'swag-paypal.settingForm.credentials.sandbox.label\')"\n                        :helpText="$tc(\'swag-paypal.settingForm.credentials.sandbox.tooltipText\')"\n                        :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                        :value="props.currentValue"\n                        @update:value="props.updateCurrentValue"\n                    />\n                </template>\n            </sw-inherit-wrapper>\n            {% endblock %}\n\n            {% block swag_paypal_content_card_channel_config_credentials_card_container_settings_client_id_sandbox %}\n            <sw-inherit-wrapper\n                v-model:value="actualConfigData[\'SwagPayPal.settings.clientIdSandbox\']"\n                :inheritedValue="selectedSalesChannelId === null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.clientIdSandbox\']"\n                :customInheritationCheckFunction="checkTextFieldInheritance"\n            >\n                <template #content="props">\n                    <sw-text-field\n                        name="SwagPayPal.settings.clientIdSandbox"\n                        :mapInheritance="props"\n                        :label="$tc(\'swag-paypal.settingForm.credentials.clientIdSandbox.label\')"\n                        :helpText="$tc(\'swag-paypal.settingForm.credentials.clientIdSandbox.tooltipText\')"\n                        :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                        :value="props.currentValue"\n                        :error="clientIdSandboxErrorState"\n                        @update:value="props.updateCurrentValue"\n                    />\n                </template>\n            </sw-inherit-wrapper>\n            {% endblock %}\n\n            {% block swag_paypal_content_card_channel_config_credentials_card_container_settings_client_secret_sandbox %}\n            <sw-inherit-wrapper\n                v-model:value="actualConfigData[\'SwagPayPal.settings.clientSecretSandbox\']"\n                :inheritedValue="selectedSalesChannelId === null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.clientSecretSandbox\']"\n                :customInheritationCheckFunction="checkTextFieldInheritance"\n            >\n                <template #content="props">\n                    <sw-text-field\n                        name="SwagPayPal.settings.clientSecretSandbox"\n                        :mapInheritance="props"\n                        :label="$tc(\'swag-paypal.settingForm.credentials.clientSecretSandbox.label\')"\n                        :helpText="$tc(\'swag-paypal.settingForm.credentials.clientSecretSandbox.tooltipText\')"\n                        :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                        :value="props.currentValue"\n                        :error="clientSecretSandboxErrorState"\n                        @update:value="props.updateCurrentValue"\n                    />\n                </template>\n            </sw-inherit-wrapper>\n            {% endblock %}\n\n            {% block swag_paypal_content_card_channel_config_credentials_card_container_settings_merchant_id_sandbox %}\n            <sw-inherit-wrapper\n                v-model:value="actualConfigData[\'SwagPayPal.settings.merchantPayerIdSandbox\']"\n                :inheritedValue="selectedSalesChannelId === null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.merchantPayerIdSandbox\']"\n                :customInheritationCheckFunction="checkTextFieldInheritance"\n            >\n                <template #content="props">\n                    <sw-text-field\n                        name="SwagPayPal.settings.merchantPayerIdSandbox"\n                        :mapInheritance="props"\n                        :label="$tc(\'swag-paypal.settingForm.credentials.merchantPayerIdSandbox.label\')"\n                        :helpText="$tc(\'swag-paypal.settingForm.credentials.merchantPayerIdSandbox.tooltipText\')"\n                        :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                        :value="props.currentValue"\n                        @update:value="props.updateCurrentValue"\n                    />\n                </template>\n            </sw-inherit-wrapper>\n            {% endblock %}\n\n            {% block swag_paypal_content_card_channel_config_credentials_card_container_settings_actions_test_sandbox %}\n            <sw-button-process\n                v-model:processSuccess="isTestSandboxSuccessful"\n                :isLoading="isTestingSandbox"\n                :disabled="testSandboxButtonDisabled"\n                @click="onTest(true)"\n            >\n                {{ $tc(\'swag-paypal.settingForm.testSandbox\') }}\n            </sw-button-process>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["acl","SwagPayPalApiCredentialsService"],mixins:[Shopware.Mixin.getByName("swag-paypal-notification")],props:{actualConfigData:{type:Object,required:!0,default:()=>({})},allConfigs:{type:Object,required:!0},selectedSalesChannelId:{type:String,required:!1,default:null},clientIdErrorState:{type:Object,required:!1,default:null},clientSecretErrorState:{type:Object,required:!1,default:null},clientIdSandboxErrorState:{type:Object,required:!1,default:null},clientSecretSandboxErrorState:{type:Object,required:!1,default:null},clientIdFilled:{type:Boolean,required:!0},clientSecretFilled:{type:Boolean,required:!0},clientIdSandboxFilled:{type:Boolean,required:!0},clientSecretSandboxFilled:{type:Boolean,required:!0},isLoading:{type:Boolean,required:!0}},data(){return{isTestingLive:!1,isTestingSandbox:!1,isTestLiveSuccessful:!1,isTestSandboxSuccessful:!1}},computed:{testLiveButtonDisabled(){return this.isLoading||!this.clientSecretFilled||!this.clientIdFilled||this.isTestingLive},testSandboxButtonDisabled(){return this.isLoading||!this.clientSecretSandboxFilled||!this.clientIdSandboxFilled||this.isTestingSandbox}},methods:{checkTextFieldInheritance(e){return"string"!=typeof e||e.length<=0},checkBoolFieldInheritance(e){return"boolean"!=typeof e},onTest(e){e?this.isTestingSandbox=!0:this.isTestingLive=!0;let n=e?"Sandbox":"",t=this.actualConfigData[`SwagPayPal.settings.clientId${n}`]||this.allConfigs?.null[`SwagPayPal.settings.clientId${n}`],a=this.actualConfigData[`SwagPayPal.settings.clientSecret${n}`]||this.allConfigs?.null[`SwagPayPal.settings.clientSecret${n}`],l=this.actualConfigData[`SwagPayPal.settings.merchantPayerId${n}`]||this.allConfigs?.null[`SwagPayPal.settings.merchantPayerId${n}`]||null;this.SwagPayPalApiCredentialsService.validateApiCredentials(t,a,e,l).then(n=>{e?this.isTestSandboxSuccessful=!!n.credentialsValid:this.isTestLiveSuccessful=!!n.credentialsValid}).catch(n=>{this.createNotificationFromError({errorResponse:n,title:"swag-paypal.settingForm.messageTestError"}),e?this.isTestSandboxSuccessful=!1:this.isTestLiveSuccessful=!1}).finally(()=>{e?this.isTestingSandbox=!1:this.isTestingLive=!1})}}})}}]);