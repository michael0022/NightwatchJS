module.exports = {
  
  '@disabled': true,
    'sample app caller' : function (client) {

      client
        .url('https://sampleapp.nouveau-labs.in')
        .resizeWindow(2400, 1600)
        .waitForElementVisible('//*[@id="normal_login_username"]')
        .click('//*[@id="normal_login_username"]')
        .setValue('//*[@id="normal_login_username"]', "scaletest005@gmail.com")
        .click('//*[@id="normal_login_password"]')
        .setValue('//*[@id="normal_login_password"]', "Mentorbot123$")
        .click('//*[@id="normal_login"]/div[5]/div/div/div/button')
        .pause(3000)
        .click('//*[@id="root"]/div[1]/button[2]')
        .setValue('/html/body/div[2]/div/div[2]/div/div[2]/div[1]/div[1]/div/div[4]/input', "scaletest001@gmail.com")
        .sendKeys('/html/body/div[2]/div/div[2]/div/div[2]/div[1]/div[1]/div/div[4]/input', client.Keys.ENTER)
        .pause(3000)
        .click('/html/body/div[2]/div/div[2]/div/div[2]/div[1]/div[2]/button[1]/span')
        .pause()
    }
  };