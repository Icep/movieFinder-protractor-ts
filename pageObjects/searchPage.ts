import { browser, element, By, $, $$, protractor } from 'protractor'
import { BasePage } from './basePage'

export class SearchPage extends BasePage {
    public EC = protractor.ExpectedConditions;
    public searchField = element(By.name('searchStr'))
    public goButton = element(By.buttonText('Go!'))
    public searchResult = $$('movies>.jumbotron+div movie-card')
    public searchResultTitle = $$('movies>.jumbotron+div movie-card  [title]')
    public pageTitleResult = $('.orange-text')
    public movieCards = $$('movie-card')
    public URL = ''
    public upcomingMovies = element(By.partialLinkText('Upcoming Movies'))
    public URL_upcoming = 'https://movies-finder.firebaseapp.com/upcoming'
    public popularSeriesLink = $('a[href*="popular"]')
    public popularSeriesURL = 'https://movies-finder.firebaseapp.com/popular/series'
    public mainPageLink = $('.navbar-brand')


    searchText (text) {
        this.searchField.sendKeys(text)
        browser.wait(this.EC.visibilityOf(this.movieCards.first()), 5000);
        expect(this.searchField.getAttribute('ng-reflect-model')).toContain(text, `Check a text in the search field`)
        this.goButton.click()
    }

}