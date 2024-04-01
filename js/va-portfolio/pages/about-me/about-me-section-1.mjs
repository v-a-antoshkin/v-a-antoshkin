import { BaseElement, html, css } from '../../../base-element.mjs'

class AboutMeSection1 extends BaseElement {
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
                    background-image: url(images/about-me/bgs1-bottom.svg), url(images/about-me/bgs1-top.svg);
                    background-position: 0% 100%, 90% 0%;
                    background-repeat: no-repeat;
                    background-size: 100%, 50%;
                }

                * {
                    box-sizing: border-box;
                }

                .container {
                    display: flex;
                    position: relative;
                    justify-content: space-between;
                    width: 100%;
                }

                .layout-right {
                    display: flex;
                    flex-basis: 50%;
                    position: relative;
                    justify-content: space-between;
                }

                .layout-left {
                    display: flex;
                    flex-basis: 50%;
                    position: relative;
                    justify-content: center;
                    align-items: center;
                }

                .image-left {
                    object-position: 50% 50%;
                    object-fit: cover;
                    width: 100%;
                }

                .image-left-container {
                    flex-basis: fit-content;
                }

                .layout-right {
                    display: flex;
                    flex-basis: 50%;
                    flex-direction: column;
                    position: relative;
                    justify-content: center;
                    align-items: center;
                }

                .layout-middle {
                    width: 90%;
                    justify-content: center;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 80px;
                    max-width: 600px;
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
                    font-size: clamp(2rem, 5vw, 3.4375rem);
                    font-weight: 700;
                    text-transform: uppercase;
                    text-align: center;
                    margin: 20px 0 0;
                    font-family: var(--ubuntu-font-family);
                }
                p {
                    font-weight: 400;
                    font-size: clamp(0.5rem, 4vw, 1.25rem);
                    line-height: 1.6;
                    word-wrap: break-word;
                }
            `
        ]
    }
// transform: rotate(-20deg);
    constructor() {
        super();
        this.version = "1.0.0";
    }

    render() {
        return html`
            <div class="container">
                <div class="layout-left">
                    <div class="image-left-container">
                        <img class="image-left" src="images/home/robot-11.avif" alt="" />
                    </div>
                </div>
                <div class="layout-right">
                    <div class="layout-middle">
                        <h1 >What kind of man am I?</h1>
                        <p>I was born in a small town near the capital of our homeland, Moscow, in 1974. My mother was a doctor, and my father was a military man. Grandfather was a tailor, and grandmother was a jewelry seller. I lived a happy and cheerful life before I went to school. If you want to know more about me, scroll down</p>
                    </div>
                </div>
            </div>
        `;
        return html`
            <div class="container">
                <div class="layout-left"></div>
                <div class="layout-right">
                    <div class="layout-middle">
                        <div>
                            <h5>Innovative programming</h5>
                            <h1>Reinforcement<br>learning<br>systems</h1>
                            <p>The future is already here. Аrtificial intelligence never sleeps and never gets bored</p>
                            <a href="#my-pride">Learn more</a>
                            <video class="elementor-video" src="https://historytravel.com/wp-content/uploads/2023/02/History-Travel-Launch-Promo-20-FULL-V2-.mp4" autoplay="" controls="" muted="muted" playsinline="" controlslist="nodownload"></video>
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

customElements.define("about-me-section-1", AboutMeSection1);