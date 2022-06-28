const { pause } = require("codeceptjs");
const { Puppeteer } = require("puppeteer");
const { async } = require("rxjs");


Feature('Targomo Assignment');

Scenario('URL State', async ({I})=> {
 await I.say('Navigating to Hompage');
 await I.amOnPage('https://poi.targomo.com/');
 await I.wait(2);
 await I.click('//*/mat-tree-node[1]/button/span');
 await I.checkOption('//*[@id="mat-checkbox-12"]/label');
 const link = window.location.href;
 await I.refreshPage();
 const newLink = window.location.href;
 if( link === newLink){
  await I.say('URL satate is same after refresh.')
 }
});

