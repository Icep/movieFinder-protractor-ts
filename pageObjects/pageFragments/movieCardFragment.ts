import { browser, element, By, $, $$, protractor } from 'protractor'
import { BaseFragment, BaseArrayFragment } from 'protractor-element-extend'

export class MovieCardFragment extends BaseFragment {
    constructor(movieCardElement) {
        super(movieCardElement)

        this.movieCard = movieCardElement;
        this.title = this.movieCard.$('.caption a[ng-reflect-title]')
        this.releaseDate = this.movieCard.$('.caption p:nth-child(2)')
        this.detailsLink = this.movieCard.$('.caption p a')
        this.rating = this.movieCard.$('.caption small')
    }

    getTitle() {

    }
    getReleaseDate() {

    }
    openDetails() {

    }
    getRating() {

    }
}
