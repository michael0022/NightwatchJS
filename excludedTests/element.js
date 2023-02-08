module.exports = {
    "use of elements" : async function(browser) {
        browser.url("http://tutorials.actionqa.com/nwind/element.html")
        const elementResult = await browser.element("css selector" , "#some-button")

        console.log(JSON.stringify(elementResult , null ,  4))

        //console.log(elementResult.value.element-6066-11e4-a52e-4f735466cecf)
    }
}