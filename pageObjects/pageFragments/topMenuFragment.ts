import { browser, element, By, $, $$, protractor } from 'protractor'
import { BaseFragment, BaseArrayFragment } from 'protractor-element-extend'

export class TopMenuFragment extends BaseFragment {
    constructor(topMenuElement) {
        super(topMenuElement)

        this.topMenu = topMenuElement;
        this.upcomingMovies = this.topMenu.element(By.partialLinkText('Upcoming Movies'))
        this.popularSeriesLink = this.topMenu.$('a[href*="popular"]')
        this.mainPageLink = this.topMenu.$('.navbar-brand')
        this.popularSeriesURL = 'https://movies-finder.firebaseapp.com/popular/series'
        this.URL_upcoming = 'https://movies-finder.firebaseapp.com/upcoming'
    }
    openMainPage() {

    }
    openPopularSeries() {

    }
    openUpcomingMovies() {

    }
}