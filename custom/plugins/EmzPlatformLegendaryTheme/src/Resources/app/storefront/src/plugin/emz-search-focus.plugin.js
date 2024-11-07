import Plugin from 'src/plugin-system/plugin.class';

export default class EmzSearchFocusPlugin extends Plugin {

    static options = {
        activeCls: 'emz--is-focused'
    };

    init() {
        this._getForm();

        if (!this._form) {
            throw new Error(`No form found for the plugin: ${this.constructor.name}`);
        }

        this._registerEvents();
    }

    /**
     * tries to get the closest form
     *
     * @returns {HTMLElement|boolean}
     * @private
     */
    _getForm() {
        this._form = this.el.closest('form');
    }

    _registerEvents() {
        this.el.addEventListener('focusin', this._onFormFocusIn.bind(this));
        this.el.addEventListener('focusout', this._onFormFocusOut.bind(this));
    }

    _onFormFocusIn() {
        this._form.classList.add(this.options.activeCls);
    }

    _onFormFocusOut() {
        this._form.classList.remove(this.options.activeCls);
    }
}
