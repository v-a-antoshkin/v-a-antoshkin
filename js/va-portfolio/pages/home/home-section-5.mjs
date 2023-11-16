import { PortfolioElement, html, css } from '../../../portfolio-element.mjs'

class HomeSection5 extends PortfolioElement {
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
                    position: relative;
                    justify-content: space-between;
                    width: 100%;
                    width: 100%;
                }

                .layout-right {
    display: flex;
    flex-basis: 50%;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
                }

                .image-right-container {
                    // background-image: url(images/cellbg2.jpg);
                    // background-repeat: no-repeat;
                    // background-position: 0% 50%;
                    // background-size: cover;
                    // border-radius: 50%;
                }

                .image-left {
                    object-position: 50% 50%;
                    object-fit: cover;
                    width: 100%;
                    border-radius: 50%;
                    padding: 0 0 6% 6%;
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


                .layout-left {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    flex-basis: 50%;
                }

                .image-left-container {
                    background-image: url("images/bg.jpg");
                    background-repeat: no-repeat;
                    background-position: 0% 50%;
                    background-size: cover;
                    border-radius: 50%;
                    flex-basis: fit-content;
                }

                .image-left-1 {
                    width: 20%;
                    height: 50%;
                    object-fit: contain;
                    object-position: 0% 100%;
                    align-self: flex-start;
                    margin-top: -20%;
                    z-index: -1;
                }

                .layout-middle {
                    display: flex;
                    width: 90%;
                    flex-direction: column;
                    justify-content: center;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 79px;
                    max-width: 600px;
                }

                h4 {
                    margin: 20px 20px 0;
                    font-family: var(--ubuntu-font-family);
                    font-weight: 700;
                    line-height: 1.2;
                    font-size: 20px;
                }

                h2 {
                    font-size: 3.75rem;
                    font-weight: 300;
                    line-height: 1.2;
                    margin: 25px 0 0;
                    font-family: var(--ubuntu-font-family);
                }

                h5 {
                    font-weight: 300;
                    line-height: 1.2;
                    font-size: 1.25rem;
                    font-family: var(--ubuntu-font-family);
                    margin: 79px 0 0;
                }

                p {
                    font-weight: 700;
                    font-size: 1.25rem;
                    // margin: 21px 207px 21px 0;
                    line-height: 1.6;
                    word-wrap: break-word;
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
                    <div class="image-left-container">
                        <img class="image-left" src="images/Untitled5.jpg" alt="">
                    </div>
                    <img class="image-left-1" src="images/Untitled8.jpg" alt="">

                </div>
                <div class="layout-right">
                    <div class="layout-middle">
                        <h5>My courses</h5>
                        <h2>I'm a good teacher</h2>
                        <p>The best way to understand yourself is to explain it to someone else</p>
                        <a href="https://www.popularmechanics.com/technology/robots/a23846041/robot-clean-your-room/" title="robots" target="_blank">Explain it</a>
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

customElements.define("home-section-5", HomeSection5);