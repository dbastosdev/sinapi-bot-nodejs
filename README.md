# sinapi-bot

<h3 align="center">
  sinapi bot is a web scrapper cli tool that send links with the last sinapi tables for your e-mail.
</h3>

<p align="center">
  <a href="#Resources">Resources</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Requisites">Prerequisites</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Run">How to use</a>&nbsp;&nbsp;&nbsp;
</p>

<p align="center">
 <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="PRs welcome!" />
 <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="PRs welcome!" />
 <img src="https://img.shields.io/badge/Puppeteer-40B5A4?style=for-the-badge&logo=Puppeteer&logoColor=white" alt="PRs welcome!" />
</p>
<p align="center">
 <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<a id="Resources"></a>
## Resources

- [x] Get updated sinapi links;
- [x] Recive links for email. 

<a id="Requisites"></a>
## Prerequisites

Before use this cli app, you need in your computer:

- Git
- Node.Js v14 or later
- NPM 

<a id="Run"></a>
## Run sinapi-bot app

```bash
# Clone this repo
$ git clone https://github.com/dbastosdev/sinapi-bot.git

# Config the bot-scrap.js with the link for scrap if you need use a different link. Its set for RJ;
# Config e-mail smtp. See more details in https://nodemailer.com/usage/using-gmail/

# Access and open the sinapi-bot folder
$ cd sinapi-bot

# Install dependencies
$ npm install

# Execute this application
$ node bot-mail.js
```

Coded with much ☕ by <a href="https://github.com/dbastosdev">dbastos.dev</a> 
