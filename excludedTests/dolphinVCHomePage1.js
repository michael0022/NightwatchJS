    module.exports = {

        '@disabled': true,
        "Lets connect over conference !": function(browser) {

            browser.resizeWindow(2400, 1600)
            .url("https://nouveau-labs.dolphinvc.com/conf/8462553365?pwd=29898703d3541b0162df739e5dc7cfa64e9b9d31")    
            .click('//*[@id="root"]/div[4]/div/div/div[2]/div[2]/div[3]/div/div/div[2]')
            .waitForElementVisible('//*[@id="root"]/div[4]/div/div/div[2]/div[3]/div[1]/div[2]/div/input')
            .setValue('//*[@id="root"]/div[4]/div/div/div[2]/div[3]/div[1]/div[2]/div/input', "Dolphin_User_1")
            .saveScreenshot('./reports/name.png')
            .waitForElementVisible('//*[@id="joinNow"]/span', 15000, false)         
            .click('//*[@id="joinNow"]/span')
            .waitForElementVisible('//*[@id="root"]/div[3]/div/div/div[2]/span', 15000, false)  
            .click('//*[@id="root"]/div[3]/div/div/div[2]/span')
            .waitForElementVisible('//*[@id="root"]/div[3]/div[2]/div/div[3]/div/div/div[2]', 15000, false)  
            .click('//*[@id="root"]/div[3]/div[2]/div/div[3]/div/div/div[2]')
            .saveScreenshot('./reports/selection.png')
            .click('//*[@id="root"]/div[3]/div[2]/div/div[4]/div/div/button/span')
            .saveScreenshot('./reports/conference.png')
            //.pause()
            .end()
            
            },

            "Lets connect over conference": function(browser) {

                browser.resizeWindow(2400, 1600)
                .url("https://nouveau-labs.dolphinvc.com/conf/8462553365?pwd=29898703d3541b0162df739e5dc7cfa64e9b9d31")    
                .click('//*[@id="root"]/div[4]/div/div/div[2]/div[2]/div[3]/div/div/div[2]')
                .waitForElementVisible('//*[@id="root"]/div[4]/div/div/div[2]/div[3]/div[1]/div[2]/div/input')
                .setValue('//*[@id="root"]/div[4]/div/div/div[2]/div[3]/div[1]/div[2]/div/input', "Dolphin_User_2")
                .saveScreenshot('./reports/name.png')
                .waitForElementVisible('//*[@id="joinNow"]/span', 15000, false)         
                .click('//*[@id="joinNow"]/span')
                .waitForElementVisible('//*[@id="root"]/div[3]/div/div/div[2]/span', 15000, false)  
                .click('//*[@id="root"]/div[3]/div/div/div[2]/span')
                .waitForElementVisible('//*[@id="root"]/div[3]/div[2]/div/div[3]/div/div/div[2]', 15000, false)  
                .click('//*[@id="root"]/div[3]/div[2]/div/div[3]/div/div/div[2]')
                .saveScreenshot('./reports/selection.png')
                .click('//*[@id="root"]/div[3]/div[2]/div/div[4]/div/div/button/span')
                .saveScreenshot('./reports/conference.png')
                .pause()
                //.end()
    }
}