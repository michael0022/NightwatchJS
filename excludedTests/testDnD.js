const dragAndDrop = require('html-dnd').codeForSelectors

module.exports = {
    "Drag and Drop" : function(browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/dndexample.htm")

        browser.pause(2 * 1000)
        browser.execute(dragAndDrop, ['#drag1' , '#div1'])
        browser.pause(2 * 1000)
    }
}