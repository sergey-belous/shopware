(window["webpackJsonpPluginswag-pay-pal"]=window["webpackJsonpPluginswag-pay-pal"]||[]).push([[836],{1058:function(){},4836:function(n,e,a){"use strict";a.r(e),a.d(e,{default:function(){return l}}),a(4759);var s=a(8978),l=Shopware.Component.wrapComponentConfig({template:'{% block sw_sales_channel_grid_columns_icon %}\n<sw-grid-column\n        v-if="isPayPalPosSalesChannel(item.id)"\n        flex="85px"\n        data-index="icon"\n        class="sw-sales-channel-modal-grid__icon-column"\n        label="icon"\n>\n    <span\n        class="sw-sales-channel-modal-grid__icon"\n        role="button"\n        tabindex="0"\n        @click="onOpenDetail(item.id)"\n        @keydown.enter="onOpenDetail(item.id)"\n    >\n         <img\n             class="swag-paypal-pos-modal-grid__icon"\n             :src="assetFilter(\'swagpaypal/static/img/paypal-pos-logo.svg\')"\n         >\n    </span>\n</sw-grid-column>\n\n<template v-else>\n    {% parent %}\n</template>\n{% endblock %}\n\n',methods:{isPayPalPosSalesChannel(n){let e=this.salesChannelTypes.find(e=>e.id===n);return e?.id===s.c8}},computed:{assetFilter(){return Shopware.Filter.getByName("asset")}}})},4759:function(n,e,a){var s=a(1058);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[n.id,s,""]]),s.locals&&(n.exports=s.locals),a(5346).Z("414e5752",s,!0,{})}}]);