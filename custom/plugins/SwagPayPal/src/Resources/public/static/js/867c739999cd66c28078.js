"use strict";(window["webpackJsonpPluginswag-pay-pal"]=window["webpackJsonpPluginswag-pay-pal"]||[]).push([[168],{6168:function(n,t,o){o.r(t),Shopware.Component.wrapComponentConfig({template:'{% block sw_plugin_box_container_button %}\n<template>\n    {% block swag_paypal_plugin_box_with_button_link_to_extension %}\n    <sw-button\n        variant="ghost"\n        size="small"\n        class="sw-plugin-box__button"\n        :router-link="{ path: \'/swag/paypal/index\' }"\n    >\n        {{ $tc(\'sw-plugin-box.buttonPluginSettings\') }}\n    </sw-button>\n    {% endblock %}\n</template>\n{% endblock %}\n',props:{paymentMethod:{type:Object,required:!0}}})}}]);