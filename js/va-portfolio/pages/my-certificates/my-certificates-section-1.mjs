import { BaseElement, html, css } from '../../../base-element.mjs'

import '../../../../components/icon/icon.mjs';

class MyCertificatesSection1 extends BaseElement {
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
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 100px;
                    max-width: 1000px;
                }

                .writer-image {
                    position: absolute;
                    top: 5%;
                    right: 5%;
                    width: 40%;
                    aspect-ratio: 1 / 1;
                    background: url("images/my-certificates/scientist.jpg") center no-repeat;
                    border-radius: 50%;
                    background-position: 90% 90%;
                    background-size: cover;
                }

                .circle-image {
                    position: absolute;
                    right: 10%;
                    bottom: -10%;
                    height: 30%;
                    background-image: linear-gradient(#c37cd8, #ab4ec7);
                    border-radius: 50%;
                    aspect-ratio: 1 / 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 8vw;
                    font-weight: bold;
                    color: white;
                }
                simple-icon {
                    width: 80vw;
                    height: 80vh;
                }

                .container-layout-1 {
                    position: absolute;
                    left: 10%;
                    bottom: 10%;
                    display: flex;
                    flex-direction: column;
                    padding: 24px 40px;
                    border-radius: 30px;
                    text-align: left;
                    text-size-adjust: 100%;
                    background-color: white;
                    box-shadow: 5px 5px 20px 0 rgba(0,0,0,0.15);
                    max-width: 350px;
                    min-width: 280px;
                    justify-content: center;
                }

                .layout-right {
                    display: flex;
                    position: relative;
                    justify-content: space-between;
                    min-height: 800px;
                }

                .layout-left {
                    display: flex;
                    position: relative;
                    justify-content: center;
                    align-items: center;
                }

                h1 {
                    font-size: 2rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    margin: 10px 0;
                    font-family: var(--ubuntu-font-family);
                }
                h2 {
                    font-weight: 300;
                    line-height: 1.2;
                    font-size: 1.25rem;
                    font-family: var(--ubuntu-font-family);
                    margin: 0;
                }
                p {
                    font-weight: 400;
                    font-size: 1.25rem;
                    line-height: 1.6;
                    word-wrap: break-word;
                    margin: 0;
                }
                a {
                    text-decoration: underline;
                    color: gray;
                    font-weight: 700;
                }
                a:hover {
                    color: black;
                }
                a:active {
                    color: red;
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
                <simple-icon icon-name="bgs-1-my-certificates" fill="orange"></simple-icon>
                <div class="writer-image"></div>
                <div class="circle-image">9</div>
                <div class="container-layout-1">
                    <h2>I'm a good scientist</h2>
                    <h1>Inventions for developing the mind</h1>
                    <p>All my <a href="https://www.elibrary.ru/author_items.asp?authorid=261293" target="_blank">certificates</a>
                    </p>
                </div>
            </div>
        `;
        return html`
            <div class="container">
                <div class="layout-left"></div>
                <div class="layout-right">
                    <div class="layout-middle">
                        <div>
                            <h5>Innovative programming</h5>
                            <h1>Reinforcement<br>learning<br>systems</h1>
                            <p>The future is already here. Аrtificial intelligence never sleeps and never gets bored</p>
                            <a href="#my-pride">Learn more</a>
                            <video class="elementor-video" src="https://historytravel.com/wp-content/uploads/2023/02/History-Travel-Launch-Promo-20-FULL-V2-.mp4" autoplay="" controls="" muted="muted" playsinline="" controlslist="nodownload"></video>
                        </div>
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

customElements.define("my-certificates-section-1", MyCertificatesSection1);