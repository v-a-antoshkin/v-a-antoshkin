import { BaseElement, html, css } from '../../../base-element.mjs'

class MyStackSection1 extends BaseElement {
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
            css`
                :host {
                    display: flex;
                    position: relative;
                    justify-content: center;
                    align-items: center;
                    box-sizing: border-box;
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    color: black;
                    background-image: url(images/about-me/bgs1-bottom.svg), url(images/about-me/bgs1-top.svg);
                    background-position: 0% 100%, 90% 0%;
                    background-repeat: no-repeat;
                    background-size: 100%, 50%;
                }

                * {
                    box-sizing: border-box;
                }

                .container {
                    min-height: 0.9vh;
                    display: flex;
                    width: 100%;
                }

                .layout-left {
                    display: flex;
                    flex-basis: 50%;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                }

                .image-left-container {
                    width: 100%;
                    line-height: 0;
                }

                .image-left {
                    width: 80%;
                    margin: 6% 0px;
                    transform: rotate(-10deg);
                }

                .layout-right {
                    display: flex;
                    flex-basis: 50%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                h1 {
                    font-size: clamp(2rem, 5vw, 3.4375rem);
                    font-weight: 700;
                    text-transform: uppercase;
                    text-align: center;
                    margin: 20px 0 0;
                    font-family: var(--ubuntu-font-family);
                }

                p {
                    font-size: clamp(0.5rem, 4vw, 1.25rem);
                    line-height: 1.6;
                    word-wrap: break-word;
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
                <div class="layout-left">
                    <div class="image-left-container">
                        <img class="image-left" src="images/my-stack/robot-1.avif" alt="" />
                    </div>
                </div>
                <div class="layout-right">
                    <div class="layout-middle">
                        <h1 >What can I do?</h1>
                        <p>I know the programming languages C#, PHP, Javascript, TypeScript, Node.js and Python. I work with MySQL, PostgreSQL and CouchDB databases. I use Google's reactive JS-Framework Lit. I know the Linux operating system as a Red Hat engineer</p>
                    </div>
                </div>
            </div>
        `;
    }

    firstUpdated() {
        super.firstUpdated();
        const md = window.matchMedia( "(min-width: 920px)" );
        this.isVertical = md.matches;
        md.addEventListener('change', this.matchMediaChange.bind(this), false);
    }

    matchMediaChange(e) {
        this.isVertical = e.matches;
    }

}

customElements.define("my-stack-section-1", MyStackSection1);