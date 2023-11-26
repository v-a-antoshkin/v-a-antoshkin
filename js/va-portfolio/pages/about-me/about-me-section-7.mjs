import { PortfolioElement, html, css } from '../../../portfolio-element.mjs'

class AboutMeSection7 extends PortfolioElement {
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
                    display: flex;
                    min-height: 600px;
                    margin-top: 5%;
                    margin-bottom: 2%;
                }
                .container-layout {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                header {
                    display: flex;
                    justify-content: center;
                    margin-top: 5%;
                }
                h2 {
                    font-size: 3rem;
                    font-weight: 700;
                    padding: 20px;
                    margin: 0px;
                    background-color: var(--native-background-color);
                }
                .image {
                    height: 70px;
                    margin: 20px;
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
                    My Secret Dreams
                </h2>
            </header>
            <div class="container">
                <div class="container-layout">
                    <img class="image" src="images/about-me/logo/ya.svg" alt="">
                    <img class="image" src="images/about-me/logo/facebook.svg" alt="">
                    <img class="image" src="images/about-me/logo/mail-ru.svg" alt="">
                    <img class="image" src="images/about-me/logo/microsoft.svg" alt="">
                    <img class="image" src="images/about-me/logo/google.svg" alt="">
                    <img class="image" src="images/about-me/logo/ibm.svg" alt="">
                    <img class="image" src="images/about-me/logo/oracle.svg" alt="">
                    <img class="image" src="images/about-me/logo/postgresql.svg" alt="">
                    <img class="image" src="images/about-me/logo/sberbank.svg" alt="">
                    <img class="image" src="images/about-me/logo/tinkoff.svg" alt="">
                    <img class="image" src="images/about-me/logo/vtb.svg" alt="">
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

customElements.define("about-me-section-7", AboutMeSection7);