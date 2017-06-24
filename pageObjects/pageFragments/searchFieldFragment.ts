import { browser, element, By, $, $$, protractor } from 'protractor'
import { BaseFragment, BaseArrayFragment } from 'protractor-element-extend'


export class SearchFieldFragment extends BaseFragment {
    public EC = protractor.ExpectedConditions;
    
    constructor(element) {
        super(element)

        this.search = element;
        this.searchField = this.search.element(By.name('searchStr'))
        this.goButton = this.search.element(By.buttonText('Go!'))
    }

    enterText(text) {
        browser.wait(this.EC.visibilityOf(this.searchField), 5000);
        this.searchField.sendKeys(text)
        
    }
    getTextForSearch() {

    }
    clearSearchField() {

    }
    clickGo() {

    }
    searchMovie() {

    }
}