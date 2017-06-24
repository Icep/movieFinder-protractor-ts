import { browser, element, By, $, protractor } from 'protractor'
import { CategoryPage } from '../pageObjects/categoryPage'


describe('Category test', function () {
    let categoryPage = new CategoryPage();

    beforeEach(() => {
        categoryPage.open()
    })

    afterEach(() => {
        browser.manage().deleteAllCookies();
    })

    it("Numbers of categories", function () {
        expect((categoryPage.moviesCategory).count()).toEqual(categoryPage.numbersOfCategories)
    })

    it("List of categories check", function () {
        categoryPage.moviesCategory.each(function (elem, index) {
            expect(categoryPage.categoriesList).toContain(elem.getText());
        })
    })

    it("Category names check", function () {
        categoryPage.moviesCategory.each(function (elem, index) {
            elem.click();
            var EC = protractor.ExpectedConditions;
            browser.wait(EC.visibilityOf(elem), 5000);
            browser.wait(EC.visibilityOf(categoryPage.categoryName), 5000);
            expect(elem.getText()).toBe((categoryPage.categoryName).getText());
        })
    })
    it("Selection of categories", function () {
        categoryPage.selectCategory('Action');
        expect((categoryPage.activeCategory).getText()).toBe((categoryPage.categoryName).getText());
        categoryPage.selectCategory('Drama');
        expect((categoryPage.activeCategory).getText()).toBe((categoryPage.categoryName).getText());
    })
})