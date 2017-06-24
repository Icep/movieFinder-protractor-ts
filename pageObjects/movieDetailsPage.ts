import { browser, element, By, $, $$, protractor } from 'protractor'
import { BasePage } from './basePage'

export class MovieDetailsPage extends BasePage {
    public EC = protractor.ExpectedConditions;

    public URL = 'https://movies-finder.firebaseapp.com/movie/603'
    public movieName = $$('.col-md-8 h2').first()
    public movieRating = $('h2 .label')
    public movieGenre = $$('a.label-info')
    public cast = $$('.is-flex .col-md-3')
    public actorsLinks = $$('a[href*="actor"]')
    public reviewTitle = $$('.row .col-md-12 h2').last()
    public reviewText = $$('.text-justify')
    public reviewAutor = $$('cite a')
    public movieSlogan = $$('.col-md-8 p').first()
    public overviewTitle = element(By.cssContainingText('.col-md-8', 'Overview'))
    public overviewText = $$('.col-md-8 p').last()
    public moviesWebSiteButton = $('.btn-info')
    public trailerFrame = $('.embed-responsive-item')
    public videoPlayerPlay = $('.playing-mode')
    public videoPlayerPause = $('.html5-video-player')
    public playButton = $('.ytp-large-play-button')
    public similarMovies = $$('movie-card')
    //public similarMoviesName = $$('')

    getMovieName() {
        browser.wait(this.EC.visibilityOf(this.movieName), 5000);
        return this.movieName.getText()
    }
    getMovieRating() {
        browser.wait(this.EC.visibilityOf(this.movieRating), 5000);
        return this.movieRating.getText()
    }
    getMovieGenre() {
        browser.wait(this.EC.visibilityOf(this.movieGenre.first()), 5000);
        this.movieGenre.each(function (elem, index) {
            return this.movieGenre.getText()
        })
    }
    getActorNames() {
        browser.wait(this.EC.visibilityOf(this.actorsLinks.first()), 5000);
        this.actorsLinks.each(function (elem, index) {
            return this.actorsLinks.getText()
        })
    }
    getReviewText() {
        browser.wait(this.EC.visibilityOf(this.reviewText.first()), 5000);
        this.reviewText.each(function (elem, index) {
            return this.reviewText.getText()
        })
    }
    getReviewAutor() {
        browser.wait(this.EC.visibilityOf(this.reviewAutor.first()), 5000);
        this.reviewAutor.each(function (elem, index) {
            return this.reviewAutor.getText()
        })
    }
    openFirstReview() {
        browser.wait(this.EC.visibilityOf(this.reviewAutor.first()), 5000);
        (this.reviewAutor.first()).click();
    }
    openLastReview() {
        browser.wait(this.EC.visibilityOf(this.reviewAutor.first()), 5000);
        (this.reviewAutor.last()).click();
    }
    switchToFrame() {
        browser.wait(this.EC.visibilityOf(this.trailerFrame), 5000);
        browser.switchTo().frame(element($$('iframe').first()).getWebElement());
    }
    switchToDefault() {
        browser.wait(this.EC.visibilityOf(this.trailerFrame), 5000);
        browser.switchTo().defaultContent();
    }
    getSimilarMovies() {
        browser.wait(this.EC.visibilityOf(this.similarMovies.last()), 5000);
        return this.similarMovies.count();
    }
    getMovieSlogan() {
        browser.wait(this.EC.visibilityOf(this.movieSlogan), 5000);
        return this.movieSlogan.getText()
    }
    openMovieWebSite() {
        browser.wait(this.EC.visibilityOf(this.moviesWebSiteButton), 5000);
        this.moviesWebSiteButton.click();
    }
    openActorDetails() {
        browser.wait(this.EC.visibilityOf(this.actorsLinks.first()), 5000);
        (this.actorsLinks.first()).click();
    }
}
