import { browser, element, By, $, $$, protractor, ElementFinder, ElementArrayFinder } from 'protractor'
import { BaseFragment, BaseArrayFragment } from 'protractor-element-extend'

export class TopMenuFragment extends BaseFragment {
    public EC = protractor.ExpectedConditions
    upcomingMovies: ElementFinder
    popularSeriesLink: ElementFinder
    mainPageLink: ElementFinder

    constructor(topMenuElement) {
        super($('.navbar-fixed-top'))

        this.upcomingMovies = this.element(By.partialLinkText('Upcoming Movies'))
        this.popularSeriesLink = this.$('a[href*="popular"]')
        this.mainPageLink = this.$('.navbar-brand')
        this.popularSeriesURL = 'https://movies-finder.firebaseapp.com/popular/series'
        this.URL_upcoming = 'https://movies-finder.firebaseapp.com/upcoming'
    }
    openMainPage() {
        browser.wait(this.EC.visibilityOf(this.mainPageLink), 5000) 
        this.mainPageLink.click()
    }
    openPopularSeries() {
        browser.wait(this.EC.visibilityOf(this.popularSeriesLink), 5000) 
        this.popularSeriesLink.click()
    }
    openUpcomingMovies() {
        browser.wait(this.EC.visibilityOf(this.upcomingMovies), 5000) 
        this.upcomingMovies.click()
    }
}