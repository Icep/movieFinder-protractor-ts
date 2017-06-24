import { browser, element, By, $, $$, protractor } from 'protractor'
import { BasePage } from './basePage'
import { CategoryMenuFragment } from './pageFragments/categoryMenuFragment'

export class CategoryPage extends BasePage {
    public categoryName = $('.orange-text')
    public moviesCategory = $$('a[href*="genres"]')
    public activeCategory = $('.active')
    public movieCards = $$('movie-card')
    public URL = ''
    public numbersOfCategories = 19;
    public categoriesList = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy',
        'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western']

    selectCategory(text: string) {
        let elem = element(By.linkText(text))
        elem.click()
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(this.activeCategory), 5000);
        browser.wait(EC.visibilityOf(this.categoryName), 5000);
    }

    getCategory() {
        return this.categoryName.getText();
    }

    /*
    categoryMenu: CategoryMenuFragment;
    constructor() {
        super($('.nav-stacked'))
        this.categoryMenu = new CategoryMenuFragment();
    }


    public URL = ''
    public numbersOfCategories = 19;
    public categoriesList = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy',
        'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western']
    */


}