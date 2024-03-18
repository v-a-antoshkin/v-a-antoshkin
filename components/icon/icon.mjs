import { BaseElement, css, svg, nothing } from '../../js/base-element.mjs';

import icons from './icons/icons.mjs';

customElements.define('simple-icon', class RrlIcon extends BaseElement {

    static get properties() {
        return {
            _useInfo: {type: Boolean, default: true },
            iconName: { type: String, default: '', attribute: 'icon-name'},
            fill: { type: String, default: 'currentColor' },
            stroke: { type: String, default: 'currentColor' },
            strokeWidth: { type: Number, default: 0 },
            size: { type: Number, default: 24 },
            width: { type: Number, default: "100%" },
            height: { type: Number, default: "100%" },
            _s2: { type: Number, default: 0 },
            viewBox: { type: String, default: '0 0 24 24' },
            speed: { type: Number, default: 0 },
            blink: { type: Number, default: 0 },
            path: { type: String, default: '' },
            scale: { type: String, default: '' },
            rotate: { type: Number, default: 0 },
            preserveAspectRatio: { type: String, default: 'none', attribute: "preserve-aspect-ratio"}, //"xMidYMid meet"
        }
    }

    firstUpdated(setPath = false) {
        super.firstUpdated();
        if (setPath) this.path = '';
        const name = this.iconName;
        let s = 24;
        if (!this.path && name && icons[name]) {
            this.path = icons[name].path;
            this.text = icons[name].text;
            s = icons[name].size || 24;
            this.viewBox = icons[name]['viewBox'] || `0 0 ${s} ${s}`;
            this.defs = icons[name]['defs'] || '';
        }
        this._s2 = s / 2;
        this._isFirstUpdated = true;
    }

    update(changedProperties) {
        super.update(changedProperties);
        if (this._isFirstUpdated) {
            if (changedProperties.has('iconName')) {
                setTimeout(() => {
                    this.firstUpdated(true);
                });
            }
            if (changedProperties.has('blink') || changedProperties.has('speed')) {
                if (this.$id('animate')) {
                    this.$id('animate').beginElement();
                    this.$id('animateTransform').beginElement();
                }
            }
        }
    }

    static get styles() {
        return css`
            :host {
                display: inline-block;
                vertical-align: middle;
            }
        `;
    }

    createHTMLNode(html) {
        var t = document.createElement('template');
        t.innerHTML = html;
        return t.content;
    }

    get #transform() {
        const transform = [];
        if (this.rotate) {
            transform.push(`rotate(${this.rotate})`)
        }
        if (this.scale) {
            transform.push(`scale(${this.scale})`)
        }
        return transform.join(' ');
    }

    render() {
        if (this.text) {
            return svg`
            <svg viewBox=${this.viewBox} width=${this.width || this.size || nothing}
                height=${this.height || this.size || nothing}}>
                ${this.createHTMLNode(this.text)}
            </svg>        `
        }
        else
        return svg`
            <svg
                viewBox=${this.viewBox}
                preserveAspectRatio=${this.preserveAspectRatio}
                width=${this.width || this.size || nothing}
                height=${this.height || this.size || nothing}
                transform=${this.#transform || nothing}
                display="block"
            >
                <g
                    fill=${this.fill || nothing}
                    stroke=${this.strokeWidth ? this.stroke : '' || nothing}
                    stroke-width=${this.strokeWidth || nothing}
                >
                    <path d=${this.path}> </path>
                </g>
            </svg>
        `
    }
});
