
module.exports = {
    '@tags': ['google'],
    '@disabled': true,
    'Google advanced search: Elon Musk'(browser) {
        let page = browser.page.googleAdvancedSearch();

        const mainQuery = 'Elon Musk';
        const resultsPageQuerySelector = `#searchform [name="q"][value="${mainQuery}"]`;
        const resultsPageLanguageSelector = '[aria-label="Search Italian pages"]';
        const resultsPagelastUpdateSelector = '[aria-label="Past month"]';

        page
            .navigate()
            .setQuery(mainQuery)
            .selectFilter('@languageDropdownOpener', 'lang_it')
            .selectFilter('@lastUpdateDropdownOpener', 'm')
            .search();

        browser
            .perform(() => { debugger; })
            .assert.urlContains('?as_q=Elon+Musk', 'Params: Query is Elon Musk.')
            .assert.urlContains('&lr=lang_it', 'Params: language is Italian.')
            .assert.urlContains('&as_qdr=m', 'Params: Time period is last month.')
            .assert.visible(resultsPageQuerySelector, `UI: ${mainQuery} is set in the query input.`)
            .assert.containsText(resultsPageLanguageSelector, 'Search Italian pages', 'UI: Language is set to Italian.')
            .assert.containsText(resultsPagelastUpdateSelector, 'Past month', 'UI: Last update is set to past month.')
            .saveScreenshot('tests_output/google.png');
    }
}
