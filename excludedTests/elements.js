module.exports = {
    "table elements rows" : async function(browser) {
        browser.url("https://tutorials.actionqa.com/nwind/elements.html")

        const tableRows = await browser.elements("css selector" , "tr")

        console.log("Number of rows: " + tableRows.value.length)
    }
}