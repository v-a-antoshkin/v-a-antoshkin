import { BaseElement, html, css } from '../../../base-element.mjs'

import '../../../../components/icon/icon.mjs';

class MyEducationSection4 extends BaseElement {
    static get properties() {
        return {
            isShow: { type: Boolean, default: false },
            isVertical: { type: Boolean, default: true },
            version: { type: String, default: '1.0.0', save: true },
        }
    }

    get title() {
        return 'Vladislav Antoshkin';
    }

    static get styles() {
        return [
            BaseElement.styles,
            css`
                :host {
                    display: flex;
                    position: relative;
                    justify-content: center;
                    color: black;
                }
                .container {
                    width: 100%;
                    height: 100%;
                    max-width: 1000px;
                }

                img {
                        width: 100%;
                }

            `
        ]
    }

    constructor() {
        super();
        this.version = "1.0.0";
    }


    render() {
        return html`
            <div class="container">
                <img src="images/my-education/supplement-marks-1.avif" alt="" />
            </div>
        `;
    }

    firstUpdated() {
        super.firstUpdated();
    }
}

customElements.define("my-education-section-4", MyEducationSection4);