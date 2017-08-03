import { browser, element, By, $, $$, protractor } from 'protractor'
import { BasePage } from './basePage'
import { CategoryMenuFragment } from './pageFragments/categoryMenuFragment'

export class CategoryPage extends BasePage {
    public EC = protractor.ExpectedConditions
    categoryMenu: CategoryMenuFragment

    constructor() {
        super()
        this.categoryMenu = new CategoryMenuFragment()
    }

    public categoryName = $('.orange-text')
    public URL = ''
    public movieCards = $$('movie-card')
    public numbersOfCategories = 19;
    public categoriesList = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy',
        'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western']

    selectCategory(text: string) {
        let elem = element(By.linkText(text))
        elem.click()        
        browser.wait(this.EC.visibilityOf(this.categoryMenu.activeCategory), 5000);
        browser.wait(this.EC.visibilityOf(this.categoryName), 5000);
    }

    getCategory() {
        return this.categoryName.getText();
    }









}