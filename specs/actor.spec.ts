import { browser, element, By, $, protractor } from 'protractor'
import { ActorPage } from '../pageObjects/actorPage'

describe('Actor tests -', function () {
    let actorPage = new ActorPage();

    beforeEach(() => {
        actorPage.open();
    })

    afterEach(() => {
        browser.manage().deleteAllCookies()
    })

    it("Actor name", function () {
        expect(actorPage.getActorName()).not.toEqual(null,'Actor name should not be empty')
    })

    it("Actor Birthday", function () {
        expect(actorPage.getActorBirthday()).not.toEqual(null,'Actor Birthday should not be empty')
    })

    it("Actor place of birth", function () {
        expect(actorPage.getActorBirthPlace()).not.toEqual(null,'Actor place of birth should not be empty')
    })

    it("Actor popularity", function () {
        expect(actorPage.getActorPopularity()).not.toEqual(null,'Actor popularity should not be empty')
    })

    it('Actor movies', function () {
        expect(actorPage.actorMovieCards.count()).toBeGreaterThan(0, 'Amount of movies should be greater than 0')
    })

})