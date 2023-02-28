module.exports = {
    '@disabled': true,
    'My First Test Case' : function(browser) 
    {
        browser.url('https://news.ycombinator.com/')
               .resizeWindow(2400, 1600)
               .waitForElementVisible('//*[@id="hnmain"]/tbody/tr[1]/td/table/tbody/tr/td[2]/span/b/a') 
               .assert.containsText('//*[@id="hnmain"]/tbody/tr[1]/td/table/tbody/tr/td[2]/span/b/a' , "Hacker News")
    }
}