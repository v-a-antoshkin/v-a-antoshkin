import { PortfolioElement, html, css } from '../../../portfolio-element.mjs'

class HomeSection4 extends PortfolioElement {
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
                    background-image: url(images/46.jpg);
                    background-size: 10%;
                    background-repeat: no-repeat;
                    padding: 5% 0 15%;
                    background-position: 100% 100%;
                }

                .layout-left {
                    display: flex;
                    flex-basis: 100%;
                    align-items: flex-start;
                    margin: 40px 0;
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
                    width: 40%;
                    background-color: var(--background-green);
                    padding: 3%;
                    border-radius: 50%;
                }

                .layout-middle-right {
                    display: block;
                    width: 90%;
                    margin: auto;
                }

                .image-right-2 {
                    object-position: 50% 50%;
                    object-fit: cover;
                    border-radius: 50%;
                    width: 40%;
                    margin: -30% 0px 0px -50%;
                    z-index: 1;
                }

                .js {
                    border-radius: 0%;
                }
                .image-right-4 {
                    margin: -50% 0px 0px -50%;
                    border-radius: 50%;
                    padding: 20px;
                    background-color: var(--background-green);
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

                .layout-right {
                    display: flex;
                    flex-basis: 50%;
                    flex-direction: column;
                    position: relative;
                    justify-content: center;
                    align-items: center;
                }

                .layout-center {

                }

                .layout-middle {
                    display: flex;
                    flex-direction: column;
                    flex-basis: calc(100% / 3);
                    align-items: center;
                }

                h4 {
                    margin: 20px 20px 0;
                    font-family: var(--ubuntu-font-family);
                    font-weight: 700;
                    line-height: 1.2;
                    font-size: 20px;
                    overflow-wrap: break-word;
                }

                h2 {
                    font-size: 3.75rem;
                    font-weight: 300;
                    line-height: 1.2;
                    margin: 25px 0 0;
                    font-family: var(--ubuntu-font-family);
                    overflow-wrap: anywhere;
                }

                h5 {
                    font-weight: 300;
                    line-height: 1.2;
                    font-size: 1.25rem;
                    font-family: var(--ubuntu-font-family);
                    margin: 79px 0 0;
                    overflow-wrap: break-word;
                }

                p {
                    font-weight: 700;
                    font-size: 1.25rem;
                    // margin: 21px 207px 21px 0;
                    line-height: 1.6;
                    word-wrap: break-word;
                    overflow-wrap: break-word;
                }

                a {
                    font-style: normal;
                    text-transform: uppercase;
                    margin: 20px auto 0 0;
                    color: #ffffff !important;
                    background-color: #17cad0 !important;
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
                }

                a:hover {
                    background-color: #15b6bb !important;
                }

                .horizontal-line {
                    width: 120px;
                    height: 6px;
                    margin-top: 24px;
                    background-color: var(--nav-item-active-background-color);
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
                        <img class="image-right-1 js" src="images/5968292.png" alt="">
                        <h2>JavaScript</h2>
                        <p>With == I kind of guess,<br>but with === I'm really sure</p>
                    </div>
                    <div class="layout-middle">
                        <img class="image-right-1" src="images/6132221.png" alt="">
                        <h2>C#</h2>
                        <p>I don't wear glasses</p>
                    </div>
                    <div class="layout-middle">
                        <img class="image-right-1" src="images/5968350.png" alt="">
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