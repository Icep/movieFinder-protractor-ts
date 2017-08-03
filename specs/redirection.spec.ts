import { browser, element, By, $, $$, protractor } from 'protractor'
import { MovieDetailsPage } from '../pageObjects/movieDetailsPage'
import { CategoryPage } from '../pageObjects/categoryPage'


describe('Movie details test -', function () {
    let movieDetailsPage = new MovieDetailsPage();
    let EC = protractor.ExpectedConditions;
    let categoryPage = new CategoryPage();

    beforeAll(() => {
        browser.waitForAngularEnabled(false)
    })
    beforeEach(() => {

        movieDetailsPage.open();
        browser.driver.manage().window().maximize()
    })
    afterEach(() => {
        browser.manage().deleteAllCookies()
    })
    afterAll(() => {
        browser.waitForAngularEnabled(true)
    })
    xit('Play trailer ', function () {
        browser.wait(EC.visibilityOf(movieDetailsPage.trailerFrame), 5000)
        browser.actions().sendKeys(protractor.Key.SPACE).perform()
        browser.actions().mouseMove(movieDetailsPage.trailerFrame).click().perform()
        browser.sleep(5000);
        //movieDetailsPage.switchToFrame(); .embed-responsive-item
        //browser.switchTo().frame(element($$('iframe').first()).getWebElement())
        browser.switchTo().frame(element($('.embed-responsive-item')).getWebElement())
        expect(movieDetailsPage.videoPlayerPlay.isDisplayed()).toBe(true)
        //expect(movieDetailsPage.videoPlayerPlay.getAttribute('class')).toEqual('playing-mode')
        movieDetailsPage.switchToDefault()
    })

    it('Movie review page', function () {
        browser.wait(EC.visibilityOf(movieDetailsPage.reviewAutor.first()), 5000)
        movieDetailsPage.reviewAutor.first().click().then(function () {
            browser.sleep(5000)
            browser.getAllWindowHandles().then(function (handles) {
                let newWindowHandle = handles[1];
                browser.switchTo().window(newWindowHandle).then(function () {
                    expect(browser.driver.getCurrentUrl()).toContain('www.themoviedb.org/review/')
                });
            });
        });
    })

})