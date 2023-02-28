    module.exports = {
        '@disabled': true,
        'Join the conference': function (client) {
        var currentIteration = 0,
            iterationCount = 5;
            
        var userName = "Dolphin_User_"
    
        function runTest() {
            client
    
            // ... YOUR CODE HERE, WITHOUT .end()

            .resizeWindow(2400, 1600)
            .url("https://nouveau-labs.dolphinvc.com/conf/8462553365?pwd=29898703d3541b0162df739e5dc7cfa64e9b9d31")    
            //await browser.fullscreenWindow()
            //browser.pause(15 * 1000)
            const nameXpath = '//*[@id="root"]/div[4]/div/div/div[2]/div[3]/div[1]/div[2]/div/input'
            client.click('//*[@id="root"]/div[4]/div/div/div[2]/div[2]/div[3]/div/div/div[2]')
            .setValue(nameXpath, userName + currentIteration)
            .pause(4 * 1000)
            .saveScreenshot('./reports/name.png')
            .click('//*[@id="joinNow"]/span')
            
            .click('//*[@id="root"]/div[3]/div/div/div[2]/span')
            .click('//*[@id="root"]/div[3]/div[2]/div/div[3]/div/div/div[2]')
        // browser.pause(14 * 1000)
            .saveScreenshot('./reports/selection.png')
            .click('//*[@id="root"]/div[3]/div[2]/div/div[4]/div/div/button/span')
            .pause(5 * 1000)
            .saveScreenshot('./reports/conference.png')
        // browser.pause()
            //browser.end()
            .deleteCookies()
    
            .perform(function() {
                if (++currentIteration < iterationCount) {
                return runTest();
                }
    
                client.end(); // After passing 30 iterations end the session
            });
        }
    
        runTest();
        }
    };