import { BaseElement, html, css } from '../../../base-element.mjs'

class AboutMeSection8 extends BaseElement {
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
                    min-height: 600px;

                }

                * {
                    box-sizing: border-box;
                }

                .container {
                    width: 100%;
                    min-height: 600px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 2%;
                    background-image: url(images/about-me/bgs8-left.svg), url(images/about-me/bgs8-right.svg);
                    background-position: 0% 50%, 100% 50%;
                    background-size: contain;
                    background-repeat: no-repeat;
                    overflow: hidden;
                }

                .container-layout {
                    display: flex;
                    justify-content: center;
                }

                header {
                    width: 100%;
                    margin-top: 2%;
                    margin-bottom: 5%;
                }

                h2 {
                    font-size: 3rem;
                    font-weight: 700;
                    text-align: center;
                    word-wrap: break-word;
                    margin: 0;
                }

                h2 > span {
                    color: var(--native-background-color);
                }

                .image {
                    width: 40%;
                }

                img {
                    width: 100%;
                }

                address {
                    font-size: clamp(1rem, 5vw, 2.5rem);
                    font-weight: 700;
                    margin: 0;
                    word-wrap: anywhere;
                    text-align: center;
                    font-family: var(--ubuntu-font-family);
                    font-style: normal;
                }

                address > a {
                    text-decoration: none;
                    color: inherit;
                }

                address > span {
                    display: block;
                    font-size: 1.5rem;
                    font-weight: normal;
                    line-height: 1em;
                    margin-top: 0.83em;
                }

                p {
                    font-weight: 400;
                    font-size: 1.25rem;
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
            <header>
                <h2>
                    Your Best Hopes
                </h2>
            </header>
            <div class="container">
                <div class="image">
                    <img src="images/home/robot-2.avif" alt="">
                </div>
                <address>
                    +7 905 692-36-07<br>
                    <a href="mailto:v.a.antoshkin@gmail.com">v.a.antoshkin@gmail.com</a>
                    <span>Russia, Ryazan, Gorky street 390024</span>
                </address>
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

customElements.define("about-me-section-8", AboutMeSection8);