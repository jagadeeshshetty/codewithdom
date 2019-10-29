
module.exports = {
    '@tags': ['hackernews'],
    '@disabled': false,
    'First test case'(browser) {
        const headerSelector = '*[bgcolor="#ff6600"]';

        browser
            .url('https://news.ycombinator.com/')
            .waitForElementVisible('.hnname')
            .assert.containsText('.hnname', 'Hacker News')
            .assert.screenshotIdenticalToBaseline(headerSelector, 'hn-header');
    }
}
