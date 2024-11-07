// Import all necessary Storefront plugins and scss files
import emzStickyHeader from './plugin/emz/emzStickyHeader.plugin';
import emzScrollUp from './plugin/emz/emzScrollUp.plugin';

// Register them via the existing PluginManager
const PluginManager = window.PluginManager;
PluginManager.register('emzStickyHeader', emzStickyHeader, '[data-emzStickyHeader]');
PluginManager.register('emzScrollUp', emzScrollUp, '[data-emzScrollUp]');