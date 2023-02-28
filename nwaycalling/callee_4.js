  module.exports = {

      '@disabled': false,

      'sample app caller' : function (client) {
    
        client
          .url('https://sampleapp.nouveau-labs.in')
          .resizeWindow(2400, 1600)
          .waitForElementVisible('//*[@id="normal_login_username"]')
          .click('//*[@id="normal_login_username"]')
          .setValue('//*[@id="normal_login_username"]', "scaletest008@gmail.com")
          .click('//*[@id="normal_login_password"]')
          .setValue('//*[@id="normal_login_password"]', "Mentorbot123$")
          .click('//*[@id="normal_login"]/div[5]/div/div/div/button')
          .waitForElementVisible('/html/body/div[2]/div/div/div/div/div/div[1]/div/div[4]/button[1]/span', 60000, false)         
          .click('/html/body/div[2]/div/div/div/div/div/div[1]/div/div[4]/button[1]/span')
          .pause(300000)
      }
    };