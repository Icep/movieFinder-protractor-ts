import { browser, element, By, $, $$, protractor } from 'protractor'
import { MovieDetailsPage } from '../pageObjects/movieDetailsPage'
import { CategoryPage } from '../pageObjects/categoryPage'


describe('Movie details test -', function () {
    let EC = protractor.ExpectedConditions

    let movieDetailsPage = new MovieDetailsPage()
    let categoryPage = new CategoryPage()

    beforeEach(() => {
        movieDetailsPage.open();
        browser.driver.manage().window().maximize()        
    })

    afterEach(() => {
        browser.manage().deleteAllCookies()
    })
    it('Play trailer ', function () {
        browser.wait(EC.visibilityOf(movieDetailsPage.trailerFrame), 5000)
        browser.actions().sendKeys(protractor.Key.SPACE).perform()
        browser.actions().mouseMove(movieDetailsPage.trailerFrame).click().perform()
        browser.sleep(5000)
        //movieDetailsPage.switchToFrame(); .embed-responsive-item
        //browser.switchTo().frame(element($$('iframe').first()).getWebElement())
        browser.switchTo().frame(element($('.embed-responsive-item')).getWebElement())
        expect(movieDetailsPage.videoPlayerPlay.isDisplayed()).toBe(true)
        //expect(movieDetailsPage.videoPlayerPlay.getAttribute('class')).toEqual('playing-mode')
        movieDetailsPage.switchToDefault()
    })
    it('Movie name', function () {
        browser.wait(EC.visibilityOf(movieDetailsPage.movieName), 5000)
        expect(movieDetailsPage.getMovieName()).not.toBe('')
        expect(movieDetailsPage.getMovieName()).toContain('The Matrix')
    })
    it('Movie Slogan', function () {
        browser.wait(EC.visibilityOf(movieDetailsPage.movieSlogan), 5000);
        expect(movieDetailsPage.getMovieSlogan()).toEqual('Welcome to the Real World.')
    })
    it('Movie genre', function () {
        browser.wait(EC.visibilityOf(movieDetailsPage.movieGenre.first()), 5000)
        expect(movieDetailsPage.movieGenre.count()).toBeGreaterThan(0)
        movieDetailsPage.movieGenre.each(function (elem, index) {
            expect(categoryPage.categoriesList).toContain(elem.getText())
        })
    })
    it('Movie rating', function () {
        browser.wait(EC.visibilityOf(movieDetailsPage.movieRating), 5000)
        expect(movieDetailsPage.getMovieRating().then((text) => Number.parseFloat(text))).toBeGreaterThan(0)
    })
    it('Movie overview - Title', function () {
        browser.wait(EC.visibilityOf(movieDetailsPage.overviewTitle), 5000)
        expect(movieDetailsPage.overviewTitle.getText()).toContain('Overview')
    })
    it('Movie overview', function () {
        browser.wait(EC.visibilityOf(movieDetailsPage.overviewText), 5000)
        expect(movieDetailsPage.overviewText.getText()).not.toBe('')
        expect(movieDetailsPage.overviewText.getText()).toEqual('Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.')

    })
    it('Movie cast', function () {
        browser.wait(EC.visibilityOf(movieDetailsPage.cast.first()), 5000)
        expect(movieDetailsPage.cast.count()).toBeGreaterThan(0)
    })
    it('Movie actor page', function () {
        browser.wait(EC.visibilityOf(movieDetailsPage.actorsLinks.first()), 5000);
        movieDetailsPage.openActorDetails();
        expect(browser.getCurrentUrl()).toContain('/actor/')
    })
    it('Similar movies', function () {
        browser.wait(EC.visibilityOf(movieDetailsPage.similarMovies.first()), 5000);
        expect(movieDetailsPage.getSimilarMovies()).toBeGreaterThan(0)
    })
    xit('Similar movies page - name', function () {
        browser.wait(EC.visibilityOf(movieDetailsPage.trailerFrame), 5000);

    })
    xit('Similar movies page - details', function () {

        browser.wait(EC.visibilityOf(movieDetailsPage.trailerFrame), 5000);
    })
    it('Movie review - Title', function () {
        browser.wait(EC.visibilityOf(movieDetailsPage.reviewTitle), 5000);
        expect(movieDetailsPage.reviewTitle.getText()).toContain('Reviews')
    })
    it('Movie review - Text', function () {
        browser.wait(EC.visibilityOf(movieDetailsPage.reviewTitle), 5000);
        movieDetailsPage.reviewText.each(function (elem, index) {
            expect(movieDetailsPage.reviewTitle.getText()).not.toBe('')
        })
    })
    it('Movie review - Autor', function () {
        browser.wait(EC.visibilityOf(movieDetailsPage.reviewAutor.first()), 5000);
        movieDetailsPage.reviewAutor.each(function (elem, index) {
            expect(movieDetailsPage.reviewAutor.getText()).not.toBe('')
        })
    })
})