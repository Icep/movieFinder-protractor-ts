import { browser, element, By, $, $$, protractor, ElementFinder, ElementArrayFinder } from 'protractor'
import { BaseFragment, BaseArrayFragment } from 'protractor-element-extend'


export class CategoryMenuFragment extends BaseFragment {
    public EC = protractor.ExpectedConditions
    //elements definition - name: type. ElementFinder - for single element. ElementArrayFinder - for array of elements
    moviesCategory: ElementArrayFinder
    activeCategory: ElementFinder
   
    constructor() {
        //Main frame with functionality - contain al other elements
        super($('.navbar-collapse.movies-cat'))
        
        //Elements with selectors. Chained this. = '.navbar-collapse.movies-cat' and selector 
        this.moviesCategory = this.$$('a[href*="genres"]')
        this.activeCategory = this.$('.active')        
    }

    public categoriesList = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy',
        'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western']

    selectCategory(text: string) {
        let elem = element(By.linkText(text))
        elem.click()
        browser.wait(this.EC.visibilityOf(this.activeCategory), 5000)   
    }
}