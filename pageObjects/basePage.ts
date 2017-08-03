import { browser, element, By, $, $$, protractor } from 'protractor'
import { BaseFragment, BaseArrayFragment } from 'protractor-element-extend'

export class BasePage {
    public URL

    open() {
        browser.get(this.URL)

    }
    elemCheck = function (elemForCheck) {
        expect(elemForCheck.isDisplayed()).toBeTruthy()
    }
}






