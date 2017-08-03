import { browser, element, By, $, protractor } from 'protractor'
import { SearchPage } from '../pageObjects/searchPage'

describe('Search test', function () {
    let searchPage = new SearchPage();
    let EC = protractor.ExpectedConditions;

    beforeEach(() => {
        searchPage.open()
        browser.driver.manage().window().maximize()
    })

    afterEach(() => {
        browser.manage().deleteAllCookies()
    })

    //Strings for Search tests
    const test_1 = { query: 'godfather', result: 'godfather' }
    const test_2 = { query: 'THE GODFATHER', result: 'Godfather' }
    const test_3 = { query: 'The Godfather', result: 'Godfather' }
    const test_4 = 13
    const test_5 = '!@#$%^&*()_+?><":}{[]'
    const test_6 = ' '
    const test_7 = ''
    const test_8 = { query: 'Еще один фильм', result: 'Еще один фильм' }
    const test_9 = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestib'
    const test_10 = 'a'
    const test_11 = { query: 'godfather', result: 'godfather' }


    it('1 test - general positive', function () {
        searchPage.searchText(test_1.query)
        browser.wait(EC.visibilityOf(searchPage.searchResult.last()), 5000);
        expect(searchPage.searchResult.count()).toBeGreaterThan(0, 'Amount of search result should be greater than 0')
        searchPage.searchResultTitle.each(function (elem, indx) {
            expect(elem.getText().then((text) => text.toLowerCase())).toContain(test_1.result)
        })
    })

    it('2 test - capital positive', function () {
        searchPage.searchText(test_2.query)
        browser.wait(EC.visibilityOf(searchPage.searchResult.last()), 5000);
        expect(searchPage.searchResult.count()).toBeGreaterThan(0, 'Amount of search result should be greater than 0')

        searchPage.searchResultTitle.each(function (elem, indx) {
            expect(elem.getText()).toContain(test_2.result)
        })
    })

    it('3 test - mix capital positive', function () {
        searchPage.searchText(test_3.query)
        browser.wait(EC.visibilityOf(searchPage.searchResult.last()), 5000);
        expect(searchPage.searchResult.count()).toBeGreaterThan(0, 'Amount of search result should be greater than 0')
        searchPage.searchResultTitle.each(function (elem, indx) {
            expect(elem.getText()).toContain(test_3.result)
        })
    })

    it('4 test - numbers', function () {
        searchPage.searchText(test_4)
        browser.wait(EC.visibilityOf(searchPage.searchResult.last()), 5000);
        expect(searchPage.searchResult.count()).toBeGreaterThan(0, 'Amount of search result should be greater than 0')
        searchPage.searchResultTitle.each(function (elem, indx) {
            expect(elem.getText()).toContain(test_4)
        })
    })

    it('5 test - symbols', function () {
        searchPage.searchText(test_5)
        browser.wait(EC.visibilityOf(searchPage.movieCards.last()), 5000);
        expect(searchPage.searchResult.count()).toEqual(0, 'Amount of search result should be 0')
    })

    it('6 test - one space', function () {
        searchPage.searchText(test_6)
        browser.wait(EC.visibilityOf(searchPage.movieCards.last()), 5000);
        expect(searchPage.searchResult.count()).toEqual(0, 'Amount of search result should be 0')
    })

    it('7 test - empty field', function () {
        searchPage.elemCheck(searchPage.searchField)
        searchPage.searchField.sendKeys(test_7)
        browser.wait(EC.visibilityOf(searchPage.movieCards.last()), 5000);
        expect(searchPage.searchField.getAttribute('ng-reflect-model')).toBe(null, 'Check a text in the search field')
        searchPage.goButton.click()
        browser.wait(EC.visibilityOf(searchPage.movieCards.last()), 5000);
        expect(searchPage.searchResult.count()).toEqual(0, 'Amount of search result should be 0')
    })

    it('8 test - different languages ', function () {
        searchPage.searchText(test_8.query)
        browser.wait(EC.visibilityOf(searchPage.searchResult.last()), 5000);
        expect(searchPage.searchResult.count()).toBeGreaterThan(0, 'Amount of search result should be greater than 0')
        searchPage.searchResultTitle.each(function (elem, indx) {
            expect(elem.getText()).toContain(test_8.result)
        })
    })

    it('9 test - long string - max number of letters 2000', function () {
        searchPage.searchText(test_9)
        browser.wait(EC.visibilityOf(searchPage.movieCards.last()), 5000);
        expect(searchPage.searchResult.count()).toEqual(0, 'Amount of search result should be 0')
    })

    it('10 test - short string - min number of letters', function () {
        searchPage.searchText(test_10)
        browser.wait(EC.visibilityOf(searchPage.searchResult.last()), 5000);
        expect((searchPage.searchResult).count()).toBeGreaterThan(0, 'Amount of search result should be greater than 0')

    })

    it('11 test - submit/click', function () {
        searchPage.searchField.sendKeys(test_11.query)
        searchPage.searchField.submit()
        browser.wait(EC.visibilityOf(searchPage.movieCards.last()), 5000);
        searchPage.searchResultTitle.each(function (elem, indx) {
            expect(elem.getText()).toContain(test_11.result)
        })
    })
})