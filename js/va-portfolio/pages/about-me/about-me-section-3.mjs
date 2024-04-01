import { BaseElement, html, css } from '../../../base-element.mjs'

class AboutMeSection3 extends BaseElement {
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
                    flex-direction: column;
                    align-items: stretch;
                    box-sizing: border-box;
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    color: black;
                    background-image: url(images/about-me/bgs3-bottom.svg), url(images/about-me/bgs3-top.svg);
                    background-position: 100% 100%, 0% 0%;
                    background-size: 40%, 40%;
                    background-repeat: no-repeat;
                }

                * {
                    box-sizing: border-box;
                }

                .container {
                    display: flex;
                    position: relative;
                    justify-content: space-between;
                    width: 100%;
                    margin-bottom: 2%;
                }

                .layout-left {
                    display: flex;
                    flex-direction: column;
                    flex-basis: 33.3333%;
                    justify-content: center;
                    overflow: hidden;
                }

                .layout-middle {
                    display: flex;
                    flex-direction: column;
                    flex-basis: 33.3333%;
                    justify-content: center;
                }

                .layout-right {
                    display: flex;
                    flex-direction: column;
                    flex-basis: 33.3333%;
                    justify-content: center;
                    overflow: hidden;
                }


                .image {
                    width: 100%;
                }

                .image-left-container {
                    line-height: 0;
                    width: 60%;
                }

                .image-middle-container {
                    line-height: 0;
                    width: 65%;
                }
                .image-right-container {
                    line-height: 0;
                    width: 50%;
                }

                .image-text-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .image-text-container.left {
                    transform: rotate(-20deg);
                }

                .image-text-container.right {
                    transform: rotate(20deg)
                }

                .image-container {
                    flex-basis: fit-content;
                }

                .image-right {
                    object-position: 50% 50%;
                    object-fit: cover;
                    transform: rotate(20deg);
                    width: 80%;
                }
                video {
                    height: 100%;
                    width: 100%;
                    display: flex;
                    border: none;
                    background-color: #000;
                    margin: 0;
                    line-height: 1
                    max-width: 100%;
                }

                h1 {
                    font-size: 3.4rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    margin: 20px 0 0;
                    font-family: var(--ubuntu-font-family);
                }

                h2 {
                    font-size: clamp(2rem, 5vw, 3.4375rem);
                    font-weight: 700;
                    text-align: center;
                }

                header {
                    width: 100%;
                    margin-top: 5%;
                    margin-bottom: 2%;
                }

                h2 > span {
                    color: var(--native-background-color);
                }

                p {
                    font-weight: 400;
                    font-size: clamp(1rem, 1vw, 1.25rem);
                    line-height: 1.6;
                    overflow-wrap: anywhere;
                    text-align: center;
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
            <header>
                <h2>My Best Professional<br>
                    <span>Teachers</span>
                </h2>
            </header>
            <div class="container">
                <div class="layout-left">
                    <div class="image-text-container left">
                        <div class="image-left-container">
                            <img class="image" src="images/about-me/donald-knuth.png" alt="" />
                        </div>
                        <p>Donald Knuth</p>
                    </div>
                </div>
                <div class="layout-middle">
                    <div class="image-text-container">
                        <div class="image-middle-container">
                            <img class="image" src="images/about-me/herbert-schildt.jpg" alt="" />
                        </div>
                        <p>Herbert Schildt</p>
                    </div>
                </div>
                <div class="layout-right">
                    <div class="image-text-container right">
                        <div class="image-right-container">
                            <img class="image" src="images/about-me/anders-hejlsberg.jpg" alt="" />
                        </div>
                        <p>Anders Hejlsberg</p>
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

customElements.define("about-me-section-3", AboutMeSection3);