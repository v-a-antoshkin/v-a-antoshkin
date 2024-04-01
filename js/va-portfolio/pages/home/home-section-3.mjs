import { BaseElement, html, css } from '../../../base-element.mjs'

class HomeSection3 extends BaseElement {
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

                .image-left {
                    position: absolute;
                    bottom: 0;
                    object-position: 50% 50%;
                    object-fit: cover;
                    width: 212px;
                    height: 471px;
                }

                .image-right-container {
                    // background-image: url(images/cellbg2.jpg);
                    // background-repeat: no-repeat;
                    // background-position: 0% 50%;
                    // background-size: cover;
                    // border-radius: 50%;
                }

                .image-right-1 {
                    object-position: 50% 50%;
                    object-fit: cover;
                    width: 80%;
                    border-radius: 50%;
                }

                .image-right-2 {
                    object-position: 50% 50%;
                    object-fit: cover;
                    border-radius: 50%;
                    width: 60%;
                    margin: -50% 0px 0px -50%;
                    z-index: -1;
                }


                .layout-right {
                    display: flex;
                    flex-basis: 50%;
                    flex-direction: column;
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

                h2 {
                    margin: 0;
                    line-height: 1.2;
                    font-family: var(--ubuntu-font-family);
                    font-size: 1.25rem;
                    font-weight: 300;
                }

                h3 {
                    margin: 0;
                    line-height: 1.2;
                    font-family: var(--ubuntu-font-family);
                    font-size: clamp(1rem, 8vw, 3.75rem);
                    font-weight: 400;
                }

                p {
                    line-height: 1.6;
                    font-weight: 700;
                    font-size: clamp(1vw, 3vw, 1.25rem);
                    word-wrap: break-word;
                }

                a {
                    font-style: normal;
                    text-transform: uppercase;
                    margin: 20px auto 0 0;
                    color: #ffffff !important;
                    background-color: var(--background-green);
                    position: relative;
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
                <div class="layout-right">
                    <img class="image-right-1" src="images/home/robot-3.avif" alt="">
                    <img class="image-right-2" src="images/home/bgs2-right.avif" alt="">
                </div>
                <div class="layout-left">
                    <div class="layout-middle">
                        <h2>My technology stack</h2>
                        <h3>Everybody knows...</h3>
                        <p>Everybody knows that Javascript is loaded<br>Everybody writes code with their fingers crossed<br>Everybody knows the C# is over<br>Everybody knows the&nbsp;С++ was lost<br>Everybody knows the Python was fixed<br>The dirty code stay poor, the clear code gets rich<br>That's how&nbsp;programming goes<br>Everybody knows...<br></p>
                        <a href="#my-stack" title="I know it">KNOW MORE</a>
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

customElements.define("home-section-3", HomeSection3);