import { BaseElement, html, css } from '../../../base-element.mjs'

class MyStackSection3 extends BaseElement {
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
                    color: black;
                }

                * {
                    box-sizing: border-box;
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }

                .container {
                    position: relative;
                    display: flex;
                    width: 100%;
                    gap: 20px;
                }

                .layout-left {
                    display: flex;
                    width: 100%;
                    justify-content: left;
                    align-items: center;
                }

                .layout-right {
                    display: flex;
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                }

                .layout-middle {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 90%;
                    gap: 20px;
                }

                .image-right {
                    width: 80%;
                    cursor: pointer;
                }

                h2 {
                    margin: 0;
                    line-height: 1.2;
                    font-weight: 300;
                    font-size: 1.25rem;
                    font-family: var(--ubuntu-font-family);
                }

                h3 {
                    margin: 0;
                    line-height: 1.2;
                    font-size: clamp(1rem, 8vw, 3.75rem);
                    font-weight: 400;
                    font-family: var(--ubuntu-font-family);
                }

                p {
                    line-height: 1.6;
                    font-weight: 700;
                    font-size: clamp(1vw, 3vw, 1.25rem);
                    word-wrap: break-word;
                    text-align: justify;
                }

                a {
                    position: relative;
                    font-style: normal;
                    text-transform: uppercase;
                    margin: 0 auto 0 0;
                    color: #ffffff !important;
                    background-color: var(--background-green);
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


                @media (max-width: 768px) {
                    .container {
                        flex-wrap: wrap;
                        flex-direction: column-reverse;
                    }
                    .layout-left {
                        justify-content: center;
                    }
                    a {
                        margin: 0 0 0 auto;
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
                <div class="layout-right">
                    <img class="image-right" src="images/my-stack/chess-game.avif" @click=${() => window.open('https://neuro-rsu.github.io/neuro-chess/', '_blank')} title="Try To Play" alt="">
                </div>
                <div class="layout-left">
                    <div class="layout-middle">
                        <h2>I know JS</h2>
                        <h3>ECMA-262 must live</h3>
                        <p>I believe that Javascript is the best programming language because it can benefit all the people on earth. It is difficult to understand and study, but when you do it, you will become the happiest people in the whole world. I hope to meet the world chess champion Ding Liren someday</p>
                        <a href="https://github.com/neuro-rsu/neuro-chess/blob/main/index.html" title="chess" target="_blank">KNOW MORE</a>
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

customElements.define("my-stack-section-3", MyStackSection3);
