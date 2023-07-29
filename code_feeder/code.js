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
    let gotoPromise = cPage.goto("https://www.hackerrank.com/auth/login");
    return gotoPromise;
}).then(function () {
    let elementWaitPromise = cPage.waitForSelector("#input-1" , {visible : true});
    return elementWaitPromise;

}).then(function () {
    let keysWillSendPromise = cPage.type("#input-1", "s.ritika1705@gmail.com", {delay : 50});
    return keysWillSendPromise;
}).then(function () {

    let elementWaitPromise = cPage.waitForSelector("#input-2" , {visible : true});
    return elementWaitPromise;

}).then(function () {
    let keysWillSendPromise = cPage.type("#input-2", "Riti@1705", {delay : 50});
    return keysWillSendPromise;
}).then(function () {
    let enterWillBePressed = cPage.keyboard.press("Enter");
    return enterWillBePressed;
}).then(function() {
    let cppSelector = waitAndClick('.topic-card a[data-attr1="cpp"]',cPage);
    return cppSelector;
}).then(function () {
    let easySelector = waitAndClick('.challenges-list a[data-attr1="arrays-introduction"]', cPage);
    //let easySelector = cPage.click('.ui-checklist-list-item input[value="medium"]');
    return easySelector;
}).then(function(){
    let waitfor5seconds = cPage.waitForTimeout(5000);
    return waitfor5seconds;
}).then(async function() {
    let elementSelector = await cPage.$$('.mtk1');
    let cnt=0;
    let finalElement;
    for (let ele of elementSelector)
    {
        cnt++;
        finalElement = await ele.click({delay : 150});
        if(cnt == 10)
        {
            break;
        }
    }
    
    return finalElement;
}).then(function () {
    let enterWillBePressed = cPage.keyboard.press("Enter");
    return enterWillBePressed;
}).then(function(){
    let keysWillSendPromise = cPage.type(".view-line",'int n;cin>>n;int arr[n];for(int i=0;i<n;i++){cin>>arr[i];}for(int i=n-1;i>=0;i--){cout<<arr[i]<<" ";}', {delay : 50});
    return keysWillSendPromise;
}).then(function(){
    
    let easySelector = waitAndClick('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled', cPage);
    //let easySelector = cPage.click('.ui-checklist-list-item input[value="medium"]');
    return easySelector;
})

console.log("After");

//selector will not work unless the page is loaded fully, hence we create this function

function waitAndClick(selector, cPage)
{
    return new Promise(function(resolve, reject){
        let waitForModelPromise = cPage.waitForSelector(selector);
        waitForModelPromise.then(function(){
            let clickModal = cPage.click(selector);
            return clickModal;
        }).then(function(){
            resolve();
        }).catch(function(err){
            reject(); 
        })
    })
}