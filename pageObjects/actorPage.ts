import { browser, element, By, $, $$, protractor } from 'protractor'
import { BasePage } from './basePage'

export class ActorPage extends BasePage {
    public EC = protractor.ExpectedConditions;

    public URL = 'https://movies-finder.firebaseapp.com/actor/6384'
    public actorName = $('div.col-md-3 div div h4')
    public actorBirthday = element(By.cssContainingText('.caption', 'Birthday'))
    public actorBirthPlace = element(By.cssContainingText('.caption', 'Place of Birth'))
    public actorPopularity = $('.label-success')
    public actorMovieCards = $$('movie-card')


    getActorName() {
        browser.wait(this.EC.visibilityOf(this.actorName), 5000);
        return this.actorName.getText()
    }
    getActorBirthday() {
        browser.wait(this.EC.visibilityOf(this.actorBirthday), 5000);
        return this.actorBirthday.getText()
    }
    getActorBirthPlace() {
        browser.wait(this.EC.visibilityOf(this.actorBirthPlace), 5000);
        return this.actorBirthPlace.getText()
    }
    getActorPopularity() {
        browser.wait(this.EC.visibilityOf(this.actorPopularity), 5000);
        return this.actorPopularity.getText()
    }
    getActorMoviesNumber() {
        browser.wait(this.EC.visibilityOf(this.actorMovieCards.last()), 5000);
        return this.actorMovieCards.count();
    }

}