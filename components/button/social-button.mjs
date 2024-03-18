import { BaseElement, html, css, nothing } from '../../js/base-element.mjs';

import '../icon/icon.mjs'

customElements.define('social-button', class SocialButton extends BaseElement {
    static get properties() {
        return {
            name: { type: String, default: ''},
            href: { type: String, default: '' },
            scale: { type: String, default: '' },
            title: { type: String, default: '' },
            target: { type: String, default: '_blank' },
            size: { type: Number, default: 46 },
        }
    }

    static get styles() {
        return [
            BaseElement.styles,
            css`
                :host {
                    display: inline;
                    vertical-align: middle;
                    line-height: 1;
                    border-radius: var(--social-button-border-radius, 50%);
                }
                a {
                    display: block;
                    cursor: pointer;
                    text-decoration: none;
                    color: inherit;
                }
                :host([name="telegram"]){
                    background-color: var(--telegram-background-color, rgb(3, 155, 229));
                }
                :host([name=viber]){
                    background-color: var(--viber-background-color,rgb(115, 96, 242));
                }
                :host([name=whatsapp]){
                    background-color: var(--whatsapp-background-color, rgb(0, 230, 118));
                }
                :host([name=vk]){
                    background-color: var(--vk-background-color, rgb(3, 155, 229));
                }
                :host([name=github]){
                    background-color: var(--github-background-color, rgb(77, 118, 161));
                }
                :host([name=envelope]){
                    background-color: var(--envelope-background-color, rgb(219, 83, 75));
                }
            `
        ];
    }

    firstUpdated() {
        super.firstUpdated();
    }

    render() {
        return html`
            <a href=${this.href} target=${this.target || nothing} title=${this.title || nothing}>
                <simple-icon icon-name=${this.name} size=${this.size} scale=${this.scale || nothing}></simple-icon>
            </a>
        `;
    }
});
