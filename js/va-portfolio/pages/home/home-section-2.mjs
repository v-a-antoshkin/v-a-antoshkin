import { BaseElement, html, css } from '../../../base-element.mjs'

class HomeSection2 extends BaseElement {
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
                    position: relative;
                    display: flex;
                    width: 100%;
                    gap: 20px;
                    min-height: 800px;
                }

                .layout-left {
                    position: relative;
                    display: flex;
                    flex-basis: 50%;
                    justify-content: right;
                    align-items: center;
                    background-image: url(images/home/bgs2-left.avif);
                    background-size: 40%;
                    background-position: 0 100%;
                    background-repeat: no-repeat;
                }

                .image-right-container {
                    background-image: url(images/home/bgs2-right.avif);
                    background-repeat: no-repeat;
                    background-position: 0% 50%;
                    background-size: cover;
                    border-radius: 50%;
                    flex-basis: fit-content;
                }

                .layout-right {
                    display: flex;
                    flex-basis: 50%;
                    position: relative;
                    justify-content: center;
                    align-items: center;
                }

                .image-right {
                    object-position: 50% 50%;
                    object-fit: cover;
                    width: 100%;
                    border-radius: 50%;
                    padding: 27px 36px 36px 20px;
                }

                .layout-middle {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 70%;
                    margin: 40px 0;
                    gap: 20px;
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
                }

                a {
                    position: relative;
                    font-style: normal;
                    text-transform: uppercase;
                    margin: 0 0 0 auto;
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
                }

                a:hover {
                    background-color: var(--background-green-hover);
                }

                .horizontal-line {
                    width: 120px;
                    height: 6px;
                    margin-top: 24px;
                    background-color: var(--native-background-color);
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
                        <h2>About me</h2>
                        <h3>I'm not<br>a Robot</h3>
                        <p>I love Kent Beck. I believe that the 40-hour work week is the best achievement of modern humanity. Come in and learn more about me, my mom, dad, siblings, kids, wifes, friends, grandparents, aunts and uncles, cousins, nieces and nephews, godmother and godfather, etc.</p>
                        <a href="#about-me" title="Know me better">COME IN</a>
                    </div>
                </div>
                <div class="layout-right">
                    <div class="image-right-container">
                        <img class="image-right" src="images/home/robot-1.avif" alt="">
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

customElements.define("home-section-2", HomeSection2);

// @media (max-width: 1100px) {
//     .layout-left {
//         background-position: -400px 100%;
//         min-height: 800px;
//     }
// }
// @media (max-width: 850px) {
//     .layout-left {
//         background-position: -500px 100%;
//         min-height: 800px;
//     }
// }
// @media (max-width: 700px) {
//     .layout-left {
//         background-position: -600px 100%;
//         min-height: 800px;
//     }
// }

// @media (max-width: 600px) {
//     .layout-left {
//         background-position: -700px 100%;
//         min-height: 800px;
//     }
// }
// @media (max-width: 500px) {
//     .layout-left {
//         display: none;
//     }
// }