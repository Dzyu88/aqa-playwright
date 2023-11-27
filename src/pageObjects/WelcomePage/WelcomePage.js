import BasePage from "../BasePage.js";
import SignUpPopup from "./components/SignUpPopup.js";

export default class WelcomePage extends BasePage{
    constructor(page) {
        super(page, '/', page.locator('button', {hasText: 'Guest Log in'}));
        this.signUpButton = page.locator('.btn-primary')
    }

    async openSignUpPopup (){
        await this.signUpButton.click()
        return new SignUpPopup(this._page)
    }
}