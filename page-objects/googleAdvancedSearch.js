
module.exports = {
    url: 'https://www.google.com/advanced_search',
    elements: {
        mainQueryInput: 'input[name="as_q"]',
        languageDropdownOpener: '#lr_button',
        lastUpdateDropdownOpener: '#as_qdr_button',
        advancedSearchButton: '.jfk-button[value="Advanced Search"]',
    },
    commands: [{
        setQuery(value) {
            return this
                .setValue('@mainQueryInput', value);
        },
        selectFilter(selector, value) {
            return this
                .click(selector)
                .click(`.goog-menuitem[value="${value}"]`);
        },
        search() {
            return this
                .click('@advancedSearchButton');
        }
    }]
};
