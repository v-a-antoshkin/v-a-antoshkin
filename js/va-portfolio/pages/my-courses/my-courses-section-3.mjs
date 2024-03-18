import { BaseElement, html, css } from '../../../base-element.mjs'

import courses from './courses.mjs';

class MyCoursesSection3 extends BaseElement {
    static get properties() {
        return {
            isShow: { type: Boolean, default: false },
            isVertical: { type: Boolean, default: true },
            version: { type: String, default: '1.0.0', save: true },
            currentCourse: { type: BigInt, default: 0, local: true },
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
                    flex-direction: column;
                    margin: 0 10px;
                    width: 100%;
                }

                .layout-left {
                    display: flex;
                    flex-basis: 100%;
                    align-items: stretch;
                    margin: 40px 0;
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

                .container-layout-1 {
                    display: flex;
                    flex-direction: column;
                    padding: 24px 40px;
                    border-radius: 30px;
                    text-align: left;
                    text-size-adjust: 100%;
                    background-color: white;
                    box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 20px 0px;
                    justify-content: center;
                    min-height: 300px;
                }

                .image-right-1 {
                    width: 40%;
                    padding: 3%;
                    aspect-ratio: 1 / 1;
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
                    background: linear-gradient(#c37cd8, #ab4ec7);
                    border-radius: 50px;
                }

                .layout-middle-2 {
                    background: linear-gradient(#ffa500, #f09e01);
                    border-radius: 50px;
                }

                .layout-middle-3 {
                    background: linear-gradient(#c37cd8, #ab4ec7);
                    border-radius: 50px;
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
                    font-weight: 300;
                    line-height: 1.2;
                    font-size: 1.25rem;
                    font-family: var(--ubuntu-font-family);
                    margin: 0px;
                }

                h1 {
                    font-size: 2rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    margin: 10px 0px;
                    font-family: var(--ubuntu-font-family);
                }

                p {
                    font-weight: 400;
                    font-size: 1.25rem;
                    line-height: 1.6;
                    overflow-wrap: break-word;
                    margin: 0px;
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
                    padding: 0;
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

                .slider {
                    -webkit-appearance: none;
                    width: 100%;
                    height: 15px;
                    border-radius: 5px;
                    background: orange;
                    outline: none;
                    opacity: 1;
                    margin: 20px 0;
                    -webkit-transition: .2s;
                    transition: opacity .2s;
                }

                .slider::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                    background: linear-gradient(#c37cd8, #ab4ec7);
                    cursor: pointer;
                }

                .slider::-moz-range-thumb {
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                    background: #4CAF50;
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
        return html`
            <div class="container">
                <div class="container-layout-1">
                    <h2>${courses[this.currentCourse].authors}</h2>
                    <h1>${courses[this.currentCourse].name}</h1>
                    <p>${courses[this.currentCourse].article}</p>
                </div>
                <input type="range" min="0" max=${courses.length - 1} .value=${this.currentCourse} @input=${this.changeCourse} class="slider" id="myRange">
            </div>
        `;
    }

    changeCourse(e) {
        this.currentCourse = e.target.value
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

customElements.define("my-courses-section-3", MyCoursesSection3);