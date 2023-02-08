module.exports = {
    "Donate to Black Lives Matter !": function(browser) {
        browser.url("https://blacklivesmatter.com/")

        const popup = "css selector"
        browser.click(popup)

        browser.click("css selector")

        const urgentTxt = "css selector"
        browser.assert.containsText(urgentTxt, "Fund the movement")
    }
}