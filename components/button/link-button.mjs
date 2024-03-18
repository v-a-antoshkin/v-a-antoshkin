// import { BaseElement, html, css, nothing } from '../../js/base-element.mjs';

// import '../icon/icon.mjs'

// customElements.define('link-button', class LinkButton extends BaseElement {
//     static get properties() {
//         return {
//             name: { type: String, default: ''},
//             href: { type: String, default: '' },
//             target: { type: String, default: '_blank' },
//             title: { type: String, default: '' },
//         }
//     }

//     static get styles() {
//         return [
//             BaseElement.styles,
//             css`
//                 :host {
//                     display: inline-block;
//                     vertical-align: middle;
//                     position: relative;
//                     padding: 10px 30px;
//                     cursor: pointer;
//                 }
//                 :host(::before) {
//                     content: '';
//                     position: absolute; /* Фиксируем на одном месте */
//                     left: 0; right: 0; /* Вся ширин */
//                     top: 0; bottom: 0; /* Вся высота */
//                     z-index: -1; /* Фон ниже текста */
//                     /* Параметры фона */
//                     background-color: var(--background-green);
//                 })
//                 // host(:hover) {
//                 //     background-color: blue;
//                 //     background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),
//                 //     filter: brightness(2);
//                 // }
//                 // a::before {
//                 //     content: '';
//                 //     position: absolute; /* Фиксируем на одном месте */
//                 //     left: 0; right: 0; /* Вся ширин */
//                 //     top: 0; bottom: 0; /* Вся высота */
//                 //     z-index: -1; /* Фон ниже текста */
//                 //     /* Параметры фона */
//                 //     background-color: var(--background-green);
//                 // }
//                 a::before {
//                     display: inline-block;
//                     content: '';
//                     background-color: tomato;
//                     position: absolute;
//                     z-index: -1;
//                     left: 0; right: 0; /* Вся ширин */
//                     top: 0; bottom: 0; /* Вся высота */
//                 }
//                 a:hover::before {
//                     filter: brightness(200%);
//                 }

//             `
//         ];
//     }

//     firstUpdated() {
//         super.firstUpdated();
//     }

//     // render() {
//     //     return html`
//     //         // <style>
//     //         //     :host {
//     //         //         background: yellow;
//     //         //     }
//     //         //     :host(:hover) {
//     //         //         background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5));
//     //         //         // filter: brightness(10);
//     //         //     }
//     //         //     // :host(:before) {
//     //         //     //     content: '';
//     //         //     //     position: absolute; /* Фиксируем на одном месте */
//     //         //     //     left: 0; right: 0; /* Вся ширин */
//     //         //     //     top: 0; bottom: 0; /* Вся высота */
//     //         //     //     z-index: -1; /* Фон ниже текста */
//     //         //     //     /* Параметры фона */
//     //         //     //     background-color: var(--background-green);
//     //         //     // }
//     //         // </style>
//     //         <a href="#">Привет</a>
//     //         // <a href=${this.href || nothing} target=${this.target || nothing} title=${this.title || nothing}>
//     //         //     <slot></slot>
//     //         // </a>
//     //     `;
//     // }
//     render() {
//         return html`
//             <a href=${this.href || nothing} target=${this.target || nothing} title=${this.title || nothing}>
//                 <slot></slot>
//             </a>
//         `
//     }
// });

import { BaseElement, html, css, nothing } from '../../js/base-element.mjs';

import '../icon/icon.mjs'

customElements.define('link-button', class LinkButton extends BaseElement {
    static get properties() {
        return {
            name: { type: String, default: ''},
            href: { type: String, default: '' },
            target: { type: String, default: '_blank' },
            title: { type: String, default: '' },
        }
    }

    static get styles() {
        return [
            BaseElement.styles,
            css`
                :host {
                    display: inline-block;
                    position: relative;
                    cursor: pointer;
                    background: linear-gradient(to right, rgba(18,6,28,1) 0%, rgba(68,27,106,1) 100%);
                    background-position: center top;
                    background-size: 100% 100%;
                }
                :host(:hover) {
                    background: linear-gradient(to right, rgba(18,6,28,1) 0%, rgba(165,68,255,1) 100%);
                    background-size: 50% 100%;
                }
                :host(:active) {
                    background: linear-gradient(to right, rgba(165,68,255,1) 0%, rgba(68,27,106,1) 100%);
                    background-size: 50% 100%;
                }
                a {
                    display: block;
                    text-transform: uppercase;
                    text-align: center;
                    letter-spacing: 1px;
                    font-size: 1rem;
                    text-decoration: none;
                    white-space: nowrap;
                    padding: 10px 30px;
                    font-weight: 600;
                    color: var(--native-color, white);
                    &:hover {
                        backdrop-filter: brightness(125%);
                    }
                    &:active {
                        backdrop-filter: brightness(75%);
                    }
                }
            `
        ];
    }

    render() {
        return html`
            <a href=${this.href || nothing} target=${this.target || nothing} title=${this.title || nothing}>
                 <slot></slot>
            </a>
        `;
    }
});
