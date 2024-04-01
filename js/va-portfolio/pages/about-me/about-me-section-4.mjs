import { BaseElement, html, css } from '../../../base-element.mjs'

import '../../../../components/button/counter-button.mjs';

class AboutMeSection4 extends BaseElement {
    static get properties() {
        return {
            isShow: { type: Boolean, default: false },
            isVertical: { type: Boolean, default: true },
            version: { type: String, default: '1.0.0', save: true },
        }
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
                    background-image: url(images/about-me/bgs4-bottom.png), url(images/about-me/bgs4-top.png);
                    background-position: 0% 100%, 100% 0%;
                    background-size: 50% 20%, 40% 30%;
                    background-repeat: no-repeat;
                }

                * {
                    box-sizing: border-box;
                }

                .container {
                    display: flex;
                }

                .layout-left {
                    display: flex;
                    flex-basis: 100%;
                    align-items: stretch;
                    margin: 40px 10px;
                    gap: 10px;
                }

                .image-left {
                    position: absolute;
                    bottom: 0;
                    object-position: 50% 50%;
                    object-fit: cover;
                    width: 212px;
                    height: 471px;
                }
                counter-button {
                    width: 40%;
                    margin-top: 5%;
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
                    padding: 3%;
                }

                .layout-middle-right {
                    display: block;
                    width: 90%;
                    margin: auto;
                }

                .image-right-2 {
                    object-position: 50% 50%;
                    object-fit: cover;
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
                    z-index: 1;
                }
                .image-right-3 {
                    object-position: 50% 50%;
                    object-fit: cover;
                    width: 25%;
                    margin: -30% 0px 0px -50%;
                    z-index: 2;
                }
                .counter {
                    display: flex;
                    justify-content: center;
                    width: 40%;
                    aspect-ratio: 1 / 1;
                    border-radius: 50%;
                    margin-top: 5%;
                }

                .counter-1 {
                    background-color: var(--background-magenta);
                }
                .counter-2 {
                    background-color: var(--native-background-color);
                }
                .counter-3 {
                    background-color: var(--background-gray);
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
                    border-radius: 30px;
                }

                .layout-middle-1 {
                    background-color: white;
                    box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 20px 0px;
                }

                .layout-middle-2 {
                    background-color: var(--nav-item-hover-background-color);
                    box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 20px 0px;
                }

                .layout-middle-3 {
                    background-color: white;
                    box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 20px 0px;
                }
                h4 {
                    margin: 20px 20px 0;
                    font-family: var(--ubuntu-font-family);
                    font-weight: 700;
                    line-height: 1.2;
                    font-size: 4.5rem;
                    font-weight: 700;
                    overflow-wrap: break-word;
                }

                h2 {
                    font-size: 4.5rem;
                    font-weight: 700;
                    font-family: var(--ubuntu-font-family);
                    margin-block: auto;
                    line-height: 0;
                    overflow-wrap: normal;
                }

                h5 {
                    font-size: clamp(1rem, 5vw, 1.25rem);
                    font-weight: 700;
                    font-family: var(--ubuntu-font-family);
                    line-height: 1.2;
                    overflow-wrap: anywhere;
                    cursor: pointer;
                    text-align: center;
                }

                p {
                    font-size: clamp(0.5rem, 4vw, 1.25rem);
                    line-height: 1.6;
                    margin: 0 10px 10px;
                    overflow-wrap: anywhere;
                    flex: 1 1 0%;
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
                    background-color: var(--native-background-color);
                }
                counter-button {
                    cursor: pointer;
                }
            `
        ]
    }

    constructor() {
        super();
        this.version = "1.0.0";
    }

    render() {
        // <div class="counter counter-1">
        //     <h2>20</h2>
        // </div>
        return html`
            <div class="container">
                <div class="layout-left">
                    <div class="layout-middle layout-middle-1">
                        <counter-button @click=${this.certificatesClick} max="9" duration="5000"></counter-button>
                        <h5 @click=${this.certificatesClick}>My certificates</h5>
                        <p>I patented my first program in 2000. The seal on the certificate was gold. In 2009, the seal became copper. Now it's blue. I'm far from thinking that this color has a hidden meaning, but you can check it yourself.</p>
                    </div>
                    <div class="layout-middle layout-middle-2">
                        <counter-button @click=${this.publicationsClick} max="58" duration="5000" class="native"></counter-button>
                        <h5 @click=${this.publicationsClick}>My publications</h5>
                        <p>I love writing scientific articles. I started doing this in 1997 and try to do it as often as possible. Lately I've been doing this with my students. I hope they will also become good writers over time.</p>
                        </a>
                    </div>
                    <div class="layout-middle layout-middle-3">
                        <counter-button @click=${this.diplomasClick} max="3" duration="5000" class="gray"></counter-button>
                        <h5 @click=${this.diplomasClick}>My education</h5>
                        <p>I believe that the teaching made a man out of a monkey. I've been learning all my life and now I teach other people how to develop software. You can see that I have a good education.</p>
                    </div>
                </div>
            </div>
        `;
    }

    publicationsClick() {
        window.location.hash='my-publications'
    }

    certificatesClick() {
        window.location.hash='my-certificates'
    }
    diplomasClick() {
        window.location.hash='my-education'
    }

    * lazyLoad() {

        const lazyPages=['my-publications', 'my-education', 'my-certificates'];
        for (const pageName of lazyPages) {
            import(`./../../pages/${pageName}/${pageName}.mjs`);
            yield pageName;
        }
    }

    firstUpdated() {
        super.firstUpdated();
        const lazyIterator = this.lazyLoad();
        const lazyInterval = setInterval(() => lazyIterator.next().done ? clearInterval(lazyInterval) : '', 2000);
    }


    matchMediaChange(e) {
        this.isVertical = e.matches;
    }

}

customElements.define("about-me-section-4", AboutMeSection4);