import { browser, element, By, $, protractor } from 'protractor'
import { CategoryPage } from '../pageObjects/categoryPage'
import { CategoryMenuFragment } from '../pageObjects/pageFragments/categoryMenuFragment'


describe('Category test', function () {
    let EC = protractor.ExpectedConditions;
    let categoryPage = new CategoryPage()
    let categoryMenuFragment = new CategoryMenuFragment()

    beforeEach(() => {
        categoryPage.open()
    })

    afterEach(() => {
        browser.manage().deleteAllCookies();
    })

    it("Numbers of categories", function () {
        expect((categoryPage.categoryMenu.moviesCategory).count()).toEqual(categoryPage.numbersOfCategories)
    })

    it("List of categories check", function () {
        categoryPage.categoryMenu.moviesCategory.each(function (elem, index) {
            expect(categoryPage.categoriesList).toContain(elem.getText());
        })
    })

    it("Category names check", function () {
        categoryPage.categoryMenu.moviesCategory.each(function (elem, index) {
            elem.click()            
            browser.wait(EC.visibilityOf(elem), 5000)
            browser.wait(EC.visibilityOf(categoryPage.categoryName), 5000)
            expect(elem.getText()).toBe((categoryPage.categoryName).getText())
        })
    })
    it("Selection of categories", function () {
        categoryPage.categoryMenu.selectCategory('Action')
        expect((categoryPage.categoryMenu.activeCategory).getText()).toBe((categoryPage.categoryName).getText())
        categoryPage.categoryMenu.selectCategory('Drama')
        expect((categoryPage.categoryMenu.activeCategory).getText()).toBe((categoryPage.categoryName).getText())
    })
})