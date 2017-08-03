import { browser, element, By, $, $$, protractor, ElementFinder, ElementArrayFinder } from 'protractor'
import { BaseFragment, BaseArrayFragment } from 'protractor-element-extend'

export class MovieCardFragment extends BaseFragment {
    public EC = protractor.ExpectedConditions

    title: ElementFinder
    releaseDate: ElementFinder
    detailsLink: ElementFinder
    rating: ElementFinder

    constructor(movieCardElement) {
        super($('movie-card'))
       
        this.title = this.$('.caption a[ng-reflect-title]')
        this.releaseDate = this.$('.caption p:nth-child(2)')
        this.detailsLink = this.$('.caption p a')
        this.rating = this.$('.caption small')
    }

    getTitle() {
        browser.wait(this.EC.visibilityOf(this.title), 5000);    
        return this.title.getText();
    }
    getReleaseDate() {
        browser.wait(this.EC.visibilityOf(this.releaseDate), 5000); 
        return this.releaseDate.getText();
    }
    openDetails() {
        browser.wait(this.EC.visibilityOf(this.detailsLink), 5000); 
        this.detailsLink.click();
    }
    getRating() {
        browser.wait(this.EC.visibilityOf(this.rating), 5000); 
        return this.rating.getText();
    }
}
