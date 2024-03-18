import { BaseElement, html, css, nothing } from '../../js/base-element.mjs';

import '../icon/icon.mjs'
import './choose-input.mjs'

customElements.define("upload-input", class UploadInput extends BaseElement {
    static get properties() {
        return {
            value: { type: Object, default: {}},
            file: { type: Object, default: {}},
        }
    }

    static get styles() {
        return [
            BaseElement.styles,
            css`
                :host {
                    display: block;
                }
                div {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    padding-top: 10px;
                    width: 100%;
                    height: 100%;
                    outline: auto;
                    overflow: hidden;
                }
                #fileInput {
                    display: none;
                }
                simple-icon {
                    height: 50px;
                    width: 50px;
                }
                span {
                    font-weight: bold;
                    text-decoration: underline;
                    text-underline-offset: 2px;
                }
                span:hover {
                    filter: brightness(0.8);
                }

            `
        ]
    }

    firstUpdated(setPath = false) {
        super.firstUpdated();
    }

    clickButton() {
        this.$id("fileInput").click();
    }

    dropHandler(e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.items) {
          [...e.dataTransfer.items].forEach((item, i) => {
            if (item.kind === "file") {
              const file = item.getAsFile();
              this.file = file;
              this.value ??= {}
              this.value.name = this.file.name;
              this.value.size = this.file.size;
              this.value.type = this.file.type;
              this.value.lastModified = this.file.lastModified;
              this.valueChangeMessage();;
            //   console.log(`… file[${i}].name = ${file.name}`);
            }
          });
        } else {
          [...e.dataTransfer.files].forEach((file, i) => {
            console.log(`… file[${i}].name = ${file.name}`);
          });
        }
      }

    dragOverHandler(e) {
        e.preventDefault();
    }

    changeFileInput(e) {
        this.file = e.target.files[0];
        this.value ??= {}
        this.value.name = this.file.name;
        this.value.size = this.file.size;
        this.value.type = this.file.type;
        this.value.lastModified = this.file.lastModified;
        this.valueChangeMessage();
    }

    #dragAndDrop() {
        return html`
            <div @drop=${this.dropHandler} @dragover=${this.dragOverHandler}>
                <input type="file" id="fileInput" multiple @change=${this.changeFileInput}/>
                <simple-icon icon-name="cloud-arrow-up"></simple-icon>
                <p>Drag and drop file or <span @click=${this.clickButton}>Browse</span>.</p>
            </div>
        `
    }

    #chosenFile() {
        return html`
            <choose-input .value=${this.value.name} icon-name="file-regular" button-name="trash-xmark-regular" @file-changed=${this.fileChanged} @value-changed=${this.valueChanged}></choose-input>
        `
    }

    valueChanged(e) {
        this.value.name = e.target.value;
        this.valueChangeMessage();
    }

    fileChanged() {
        this.file = undefined;
        this.value = undefined;
        this.valueChangeMessage();
    }

    valueChangeMessage() {
        const options = {
            bubbles: true,
            composed: true
          };
        this.dispatchEvent(new CustomEvent('value-changed', options));
    }

    render() {
        return this.value ? this.#chosenFile() : this.#dragAndDrop()
    }
});