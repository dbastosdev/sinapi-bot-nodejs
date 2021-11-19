// import external module for scraping
const puppeteer = require('puppeteer');

// async function to scrap data
async function bot(){

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // Insert url to scrap. In this example i use a link with data from RJ
    await page.goto("https://www.caixa.gov.br/site/Paginas/downloads.aspx#categoria_656");
    
    // Waiting some seconds while page render a specific class
    await page.waitForSelector('a.link-down.bold');
    // Scraping data by class and get title of sinapi 
    const nomesSinapi = await page.$$eval('a.link-down.bold', (links) => links.map((item) => item.textContent));
    // Scraping data by class and get link of sinapi 
    const linksSinapi = await page.$$eval('a.link-down.bold', (links) => links.map((item) => item.href));

    // Start a blank variable 
    let message = ''

    // Create a template mensage for send
    for(let i = 1; i < nomesSinapi.length; i++){
        message +=`<b>${nomesSinapi[i]}</b> = ${linksSinapi[i]} <br>`
    }

    await browser.close();

    return message
}

// Export message for bot-mail
module.exports = {
    bot
}

