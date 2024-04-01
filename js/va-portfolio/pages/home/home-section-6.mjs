import { BaseElement, html, css } from '../../../base-element.mjs'

class HomeSection6 extends BaseElement {
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
                    display: flex;
                    flex-basis: 50%;
                    justify-content: center;
                    align-items: center;
                }

                .layout-middle {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 90%;
                    margin: 40px 0px;
                    gap: 20px;
                }

                .layout-right {
                    display: flex;
                    flex-basis: 50%;
                    flex-direction: column;
                    position: relative;
                    justify-content: center;
                    align-items: center;
                }

                .image-right-1 {
                    object-position: 50% 50%;
                    object-fit: cover;
                    width: 90%;
                    border-radius: 50%;
                }

                .image-right-2 {
                    object-position: 50% 50%;
                    object-fit: cover;
                    border-radius: 50%;
                    width: 40%;
                    margin: -30% 0px 0px -50%;
                    z-index: 1;
                }

                .image-right-3 {
                    object-position: 50% 50%;
                    object-fit: cover;
                    width: 25%;
                    border-radius: 50%;
                    margin: -30% 0px 0px -50%;
                    z-index: 2;
                }

                h2 {
                    margin: 0px;
                    line-height: 1.2;
                    font-weight: 300;
                    font-size: 1.25rem;
                    font-family: var(--ubuntu-font-family);
                }

                h3 {
                    margin: 0px;
                    line-height: 1.2;
                    font-family: var(--ubuntu-font-family);
                    font-size: clamp(1rem, 8vw, 3.75rem);
                    font-weight: 400;
                }

                p {
                    line-height: 1.6;
                    font-weight: 700;
                    font-size: clamp(1vw, 3vw, 1.25rem);
                    overflow-wrap: break-word;
                    max-width: 400px;
                    text-align: justify;
                }

                a {
                    font-style: normal;
                    text-transform: uppercase;
                    margin: 20px 0 0 auto;
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
                        <h2>Catch me</h2>
                        <h3>A few amazing ways to catch me</h3>
                        <p>I've gathered five of the best, weirdest, and fastest ways to find me this year. You don't need to go to Las Vegas, Nevada or New York. You don't need to call Shanghai or Singapore. I'm just here, now and forever.</p>
                        <a href="#catch-me" title="I'm here">Catch me</a>
                    </div>
                </div>
                <div class="layout-right">
                    <img class="image-right-1" src="images/home/robot-4.avif" alt="">
                    <img class="image-right-2" src="images/home/bgs2-right.avif" alt="">
                    <img class="image-right-3" src="images/home/fishing-rod.avif" alt="">
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

customElements.define("home-section-6", HomeSection6);



// .layout-center {

// }

// .layout-middle {
//     display: flex;
//     width: 90%;
//     flex-direction: column;
//     justify-content: center;
//     z-index: 1;
//     display: flex;
//     flex-direction: column;
//     margin-bottom: 79px;
//     max-width: 600px;
// }

// h4 {
//     margin: 20px 20px 0;
//     font-family: var(--ubuntu-font-family);
//     font-weight: 700;
