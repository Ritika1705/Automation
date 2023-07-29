const puppeteer = require("puppeteer");
console.log("Before");
const browserOpenpromise = puppeteer.launch({
    headless: false,
    slowMo: true
});


const pagesArrpromise = browserOpenpromise
.then(function (browser) {
    //console.log("browser opened");
    let pagesArrpromise = browser.pages();
    return pagesArrpromise;
}).then(function (browserPages) {
    cPage = browserPages[0]; 
    let gotoPromise = cPage.goto("https://www.google.com/");
    return gotoPromise;
}).then(function () {

    let elementWaitPromise = cPage.waitForSelector("#APjFqb" , {visible : true});
    return elementWaitPromise;

}).then(function () {
    let keysWillSendPromise = cPage.type("#APjFqb", "pepcoding");
    return keysWillSendPromise;
}).then(function () {
    let enterWillBePressed = cPage.keyboard.press("Enter");
    return enterWillBePressed;
}).then(function () {
    let elementWaitPromise = cPage.waitForSelector("h3.LC20lb.MBeuO.DKV0Md" , {visible : true});
    return elementWaitPromise;
}).then(function () {
    let enterWillBePressed = cPage.click("h3.LC20lb.MBeuO.DKV0Md");
    return enterWillBePressed;
})
.catch(function (err) {
    console.log(err); 
})

console.log("After");