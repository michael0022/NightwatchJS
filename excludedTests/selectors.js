module.exports = {
    "css and xpath" : function(browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/locator-01.html")
        browser.pause(3 * 1000)

        const cssSelector = "#text-input"
        const xpathSelector = '//*[@id="text-input"]'

        // browser.setValue(cssSelector, "this is css")

      //  browser.useXpath()       // because by default css selector is set
        browser.setValue(xpathSelector, "this is xpath")
        browser.pause(2 * 1000)

        browser.end()
    },

    "the next test" : function(browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/locator-01.html")
        browser.pause(3 * 1000)

       // browser.pause()  // it will pause for forever

        const cssSelector = "#text-input"
        const xpathSelector = '//*[@id="text-input"]'

        // browser.setValue(cssSelector, "this is css")
        
        browser.useCss()
        browser.clearValue(cssSelector)
        browser.setValue(cssSelector, "this is css again")
        browser.pause(2 * 1000)
        
        browser.end()
    }
}