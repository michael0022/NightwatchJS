module.exports = {
        '@disabled': true,
        "Lets connect over conference !": async function(browser) {

        const userName = "Dolphin_User_"
        const numberOfParticipants = 5

        for (let index = 0; index <numberOfParticipants; ++index) 
        {

        browser.resizeWindow(2400, 1600)
        browser.url("https://nouveau-labs.dolphinvc.com/conf/8462553365?pwd=29898703d3541b0162df739e5dc7cfa64e9b9d31")    
        //await browser.fullscreenWindow()
        //browser.pause(15 * 1000)
        const nameXpath = '//*[@id="root"]/div[4]/div/div/div[2]/div[3]/div[1]/div[2]/div/input'
        browser.click('//*[@id="root"]/div[4]/div/div/div[2]/div[2]/div[3]/div/div/div[2]')
        browser.setValue(nameXpath, userName + index)
        browser.pause(4 * 1000)
        browser.saveScreenshot('./reports/name.png')
        browser.click('//*[@id="joinNow"]/span')
        
        browser.click('//*[@id="root"]/div[3]/div/div/div[2]/span')
        browser.click('//*[@id="root"]/div[3]/div[2]/div/div[3]/div/div/div[2]')
       // browser.pause(14 * 1000)
        browser.saveScreenshot('./reports/selection.png')
        browser.click('//*[@id="root"]/div[3]/div[2]/div/div[4]/div/div/button/span')
        browser.pause(5 * 1000)
        browser.saveScreenshot('./reports/conference.png')
       // browser.pause()
        //browser.end()
        browser.deleteCookies();
        }
    }
}