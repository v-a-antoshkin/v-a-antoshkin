import { BaseElement, html, css } from '../../../base-element.mjs'

class AboutMeSection2 extends BaseElement {
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
                }

                * {
                    box-sizing: border-box;
                }

                .container {
                    display: flex;
                    width: 100%
                }

                .layout-left {
                    display: flex;
                    flex-basis: 100%;
                    align-items: stretch;
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
                    padding-top: 20px;
                }

                .layout-middle-1 {
                    background-color: var(--nav-item-hover-background-color);
                    margin: 0px 10px;
                }

                .layout-middle-2 {

                }

                .layout-middle-3 {
                    background-color: var(--background-magenta);
                    margin: 0px 10px;
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
                    line-height: 1.2;
                    margin: 25px 0 0;
                    overflow-wrap: anywhere;
                }

                h5 {
                    font-size: 1.25rem;
                    font-weight: 700;
                    font-family: var(--ubuntu-font-family);
                    line-height: 1.2;
                    overflow-wrap: break-word;
                }

                p {
                    font-size: 1.25rem;
                    line-height: 1.6;
                    padding: 0px 20px;
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
                    <div class="layout-middle layout-middle-1">
                        <img class="image-right-1 js" src="images/about-me/school.png" alt="">
                        <h2>1981</h2>
                        <h5>School</h5>
                        <p>In 1981 I went to school number 43 in the city of Ryazan, where I studied ingloriously until 1989. I received further secondary education at vocational school number 12, where I became interested in computer science and computers.</p>
                    </div>
                    <div class="layout-middle layout-middle-2">
                        <img class="image-right-1" src="images/about-me/university.png" alt="">
                        <h2>1992</h2>
                        <h5>University</h5>
                        <p>In 1992 I entered the Ryazan Radio Engineering Institute and graduated with honors with a degree in industrial electronics with a specialization in microprocessor technology</p>
                    </div>
                    <div class="layout-middle layout-middle-3">
                        <img class="image-right-1" src="images/about-me/graduation-hat.png" alt="">
                        <h2>1997</h2>
                        <h5>Graduate school</h5>
                        <p>Scientific activity fascinated me so much that I entered graduate school and successfully defended my Ph.D. thesis</p>
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

customElements.define("about-me-section-2", AboutMeSection2);