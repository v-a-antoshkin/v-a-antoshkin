
import { PortfolioElement, html, css } from '../../js/portfolio-element.mjs';

import { formStyles } from './form-css.mjs'

//import { default as wsClient, sendMessage, setDialog, repairDialog, setForm} from '../../js/ws-client.mjs'

import '../dialogs/modal-dialog.mjs';

class SignUpForm extends PortfolioElement {
    static get properties() {
        return {
            version: { type: String, default: '1.0.0', save: true, category: 'settings' },
            opened: { type: Boolean, default: false, category: 'settings' },
            login: { type: String, default: ''},
            password: {type: String, default: ''}
        }
    }

    static get styles() {
        return [
            formStyles,
            css`
                :host {
                    user-select: none;
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
           <div id="form-background" class="form-background" style="${this.opened ? 'display: block' : ''}">
            <modal-dialog></modal-dialog>
            <cancel-dialog></cancel-dialog>
            <close-dialog></close-dialog>
            <form class="form animate" method="post" id="form">
                <div class="form-header">
                    <div class="form-tabs no-select">
                        <div class="form-tab" selected>
                            <span id="db-tab" class="form-tab-link select">Sing in</span>
                        </div>
                    </div>
                    <span id="close" class="close-button no-select" title="Закрыть"  @click=${()=>this.close()}>&times;</span>
                </div>

                <div class="form-body">
                    <div id="db-tab-section" class="form-tab-section selected">
                        <label for="uname"><b>Пользователь</b></label>
                        <input type="text" placeholder="Логин" name="username" .value=${this.login} @change=${this.updateLoginValue} required>

                        <label for="password"><b>Password</b></label>
                        <input type="password" placeholder="Пароль" name="password" .value=${this.password} @change=${this.updatePasswordValue} required>

                        <label for="host"><b>Хост</b></label>
                        <input type="text" placeholder="http://example.com" name="host" required>

                        <label for="port"><b>Порт</b></label>
                        <input type="text" placeholder="Порт: 5984" name="port" required>

                        <button type="button" @click=${()=>this.sendLogin()}>Login</button>
                    </div>
                </div>

                <div class="form-footer no-select">
                    <div id="db-tab-buttons" class="footer-buttons-section">
                        <div class="footer-buttons">
                            <button type="button" name="clear" class="footer-button cancel-button">Очистить</button>
                            <button type="button" name="delete" class="footer-button">Удалить</button>
                            <button type="button" name="compact" class="footer-button">Сжать</button>
                            <button type="button" name="download" class="footer-button">Скачать</button>
                            <button type="button" name="upload" class="footer-button">Загрузить</button>
                            <button type="button" name="close" class="footer-button">Закрыть</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        `;
    }

    firstUpdated() {
        super.firstUpdated();
    }

    neuroClick() {
        // let cells = this.renderRoot.querySelectorAll(".cell");
        // const id = Math.floor(Math.random() * cells.length);
        // if (id != this.odd)
        //     cells[id].dispatchEvent(new CustomEvent("click", { bubbles: true, composed: true}));
    }
    open() {
        this.opened = true;
        setDialog(this.renderRoot.querySelector('modal-dialog'))
        setForm(this);
    }
    close() {
        this.opened = false
        repairDialog()
    }

    sendLogin() {
        sendMessage("login", {login: this.login, password: this.password})
    }

    async authOk(message) {
        console.log(JSON.stringify(message))
        const dialog =  this.renderRoot.querySelector('modal-dialog');
        let modalResult = await dialog.show(message.text);
        if (modalResult === "Ok") {
            this.close();
        }
    }

    async modalDialogShow() {
        const dialog =  this.renderRoot.querySelector('modal-dialog');
        let modalResult = await dialog.show("Подключение прошло удачно");
        if (modalResult === "Ok") {
            this.close();
        }
    }

    updateLoginValue (e) {
        this.login = e.target.value
        console.log(this.login)
    }

    updatePasswordValue (e) {
        this.password = e.target.value
        console.log(this.password)
    }
}

customElements.define("sign-up-form", SignUpForm);