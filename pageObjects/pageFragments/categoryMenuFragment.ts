import { browser, element, By, $, $$, protractor } from 'protractor'
import { BaseFragment, BaseArrayFragment } from 'protractor-element-extend'


export class CategoryMenuFragment extends BaseFragment {
    constructor(CategoryMenuElement) {
        super(CategoryMenuElement)

        this.categoryMenu = CategoryMenuElement;
        this.moviesCategory = this.categoryMenu.$$('a[href*="genres"]')
        this.activeCategory = this.categoryMenu.$('.active')
        this.categoryName = this.categoryMenu.$('.orange-text')
    }

    selectCategory(text: string) {
        let elem = element(By.linkText(text))
        elem.click()
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(this.activeCategory), 5000);
        browser.wait(EC.visibilityOf(this.categoryName), 5000);
    }
    getCategory(){
        return this.categoryName.getText();
    }
}