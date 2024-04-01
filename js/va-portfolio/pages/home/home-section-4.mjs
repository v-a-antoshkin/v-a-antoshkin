import { BaseElement, html, css } from '../../../base-element.mjs'

class HomeSection4 extends BaseElement {
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
                }

                * {
                    box-sizing: border-box;
                }

                .container {
                    display: flex;
                    width: 100%;
                    padding: 5% 0 15%;
                    background-image: url(images/home/bgs4.avif);
                    background-size: 10%;
                    background-repeat: no-repeat;
                    background-position: 100% 100%;
                }

                .layout-left {
                    display: flex;
                    flex-basis: 100%;
                    flex-wrap: nowrap;
                    align-items: start;
                    justify-content: center;
                    gap: 20px;
                }

                @media (max-width: 500px) {
                    .layout-left {
                        flex-wrap: wrap;
                    }
                }

                .layout-middle {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                }

                .image-right-1 {
                    width: 40%;
                    background-color: var(--background-green);
                    padding: 3%;
                    border-radius: 50%;
                    aspect-ratio: 1 / 1;
                }

                .js {
                    border-radius: 0%;
                }
                h2 {
                    font-size: clamp(1rem, 5vw, 3.75rem);
                    font-weight: 600;
                    line-height: 1.2;
                    margin: 25px 0px 0px;
                    font-family: var(--ubuntu-font-family);
                    overflow-wrap: normal;
                }

                h3 {
                    font-weight: 300;
                    line-height: 1.2;
                    font-size: 1.25rem;
                    font-family: var(--ubuntu-font-family);
                    margin: 79px 0 0;
                    overflow-wrap: break-word;
                }

                p {
                    font-weight: 700;
                    line-height: 1.6;
                    word-break: break-word;
                    text-align: center;
                    overflow-wrap: break-word;
                    font-size: clamp(1vw, 3vw, 1.25rem);
                    margin-left: 5px;
                    margin-right: 5px;
                }

                a {
                    font-style: normal;
                    text-transform: uppercase;
                    margin: 20px auto 0 0;
                    color: #ffffff !important;
                    background-color: var(--background-green);
                    position: relative;
                    letter-spacing: 1px;
                    font-size: 1rem;
                    line-height: 1.4;
                    vertical-align: middle;
                    text-align: center;
                    text-decoration: none;
                    white-space: nowrap;
                    user-select: none;
                    padding: 10px 30px;
                    border-radius: 0;
                    font-weight: 600;
                    &:hover {
                        background-color: var(--background-green-hover);
                    }
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
                    <div class="layout-middle">
                        <img class="image-right-1 js" src="images/home/js-logo.svg"" alt="">
                        <h2>JavaScript</h2>
                        <p>With == I kind of guess,<br>but with === I'm really sure</p>
                    </div>
                    <div class="layout-middle">
                        <img class="image-right-1" src="images/home/c-sharp-logo.svg" alt="">
                        <h2>C#</h2>
                        <p>I don't wear glasses</p>
                    </div>
                    <div class="layout-middle">
                        <img class="image-right-1" src="images/home/python-logo.svg" alt="">
                        <h2>Python</h2>
                        <p>The Pythons is a BBC documentary film about the Monty Python team which was shot in Tunisia in 1978 during the making of Monty Python's Life of Brian.</p>
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

customElements.define("home-section-4", HomeSection4);