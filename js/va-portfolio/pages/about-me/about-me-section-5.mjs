import { BaseElement, html, css } from '../../../base-element.mjs'

class AboutMeSection5 extends BaseElement {
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
                    background-color: var(--background-gray-light);
                }

                * {
                    box-sizing: border-box;
                }

                .container {
                    width: 100%;
                    margin-top: 50px;
                    margin-bottom: 2%;
                }

                .container-layout {
                    display: flex;
                    justify-content: center;
                }

                .container-item {
                    display: flex;
                    flex-direction: column;
                    flex-basis: 50%;
                    justify-content: center;
                    margin: 30px;
                    border-radius: 30px;
                    max-width: 600px;
                }

                .item-layout {
                    margin: 0px 30px;
                }

                .container-item-2 {
                    background-color: var(--background-magenta);
                }
                .container-item-1 {
                    background-color: white;
                }
                span {
                    display: block;
                    margin: -65px auto 0px 0px;
                    padding: 0px;
                }

                .image-quote {
                    width: 80px;
                    height: 80px;
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
                }


                .image {
                    width: 200px;
                    height: 200px;
                    background-position: 50% 0%;
                    background-size: cover;
                    background-repeat: no-repeat;
                    border-radius: 50%;
                    margin: -100px auto 0px 0px;

                }

                .image-1 {
                    background-image: url(images/about-me/murog.jpg);
                }

                .image-2 {
                    background-image: url(images/about-me/lisov.jpg);
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
                    font-size: clamp(2rem, 5vw, 4.5rem);
                    font-weight: 700;
                    font-family: var(--ubuntu-font-family);
                    overflow-wrap: normal;
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
                    font-size: 1.25rem;
                    line-height: 1.6;
                    word-wrap: break-word;
                }
                @media screen and (max-width: 640px) {
                    .container-layout {
                        flex-wrap: wrap;
                        gap: 50px;
                    }
                    .container-item {
                        flex-basis: 100%;
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
            <header>
                <h2>
                    Read What My Customers Say
                </h2>
            </header>
            <div class="container">
                <div class="container-layout">
                    <div class="container-item container-item-1">
                        <div class="item-layout">
                            <div class="image image-1"></div>
                            <span><img class="image-quote" src="images/about-me/quotes.png" alt=""></span>
                            <p>Vladislav Antoshkin has been working at our university since 2003. He is a leading teacher in the field of computer science. I have no doubt about his professional and human qualities. I am pleased to collaborate with him.</p>
                            <h5>Igor Murog</h5>
                            <h5>Rector of the Russian State University</h5>
                        </div>
                    </div>
                    <div class="container-item container-item-2">
                        <div class="item-layout">
                            <div class="image image-2"></div>
                            <span><img class="image-quote" src="images/about-me/quotes.png" alt=""></spanclass=>
                            <p>I met Vladislav in 2008. Since then, we have been closely cooperating on the development of the All-Russian Polyathlon Federation. All information support of our organization is developed and supported by him.</p>
                            <h5>Oleg Lisov</h5>
                            <h5>President of the All-Russian Polyathlon Federation</h5>
                        </div>
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

customElements.define("about-me-section-5", AboutMeSection5);