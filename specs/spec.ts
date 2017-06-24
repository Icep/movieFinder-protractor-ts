import { browser, element, By, $, $$, protractor } from 'protractor'
import { SearchPage } from '../pageObjects/searchPage'

describe('Basic tests', function () {
    let searchPage = new SearchPage();
    let URL = 'https://movies-finder.firebaseapp.com/'
    let EC = protractor.ExpectedConditions;


    beforeEach(() => {
        searchPage.open();
    })
    afterEach(() => {
        browser.manage().deleteAllCookies()
    })


    it('Main page Title', function () {
        expect(browser.getCurrentUrl()).toEqual(URL);
        expect(browser.getTitle()).toEqual('Movies Finder')
    })

    it('Search field is available', function () {
        expect(searchPage.searchField.isDisplayed()).toBeTruthy()
    })

    it('Search field default text', function () {
        expect(searchPage.searchField.getAttribute('placeholder')).toEqual('Search for movies...')
    })

    it('Upcoming movies', function () {
        expect(searchPage.upcomingMovies.isDisplayed()).toBeTruthy()
        element(searchPage.upcomingMovies.click())
        browser.wait(EC.visibilityOf(searchPage.upcomingMovies), 5000);
        expect(browser.getCurrentUrl()).toEqual(searchPage.URL_upcoming)
    })

    it('Popular series', function () {

        expect(searchPage.popularSeriesLink.isDisplayed()).toBeTruthy()
        element(searchPage.popularSeriesLink.click())
        browser.wait(EC.visibilityOf(searchPage.popularSeriesLink), 5000);
        expect(browser.getCurrentUrl()).toEqual(searchPage.popularSeriesURL)
    })

    it('Main page - Popular series - Main page', function () {
        expect(searchPage.popularSeriesLink.isDisplayed()).toBeTruthy()
        element(searchPage.popularSeriesLink.click())
        browser.wait(EC.visibilityOf(searchPage.popularSeriesLink), 5000);
        expect(browser.getCurrentUrl()).toEqual(searchPage.popularSeriesURL)
        browser.wait(EC.visibilityOf(searchPage.mainPageLink), 5000);

        element(searchPage.mainPageLink.click())
        browser.wait(EC.visibilityOf(searchPage.movieCards.last()), 5000);
        expect(browser.getCurrentUrl()).toEqual(URL)
    })

})
