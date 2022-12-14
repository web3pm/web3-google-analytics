# web3-google-analytics


This doc will describe how to listen for a blockchain event and pipe it into your Analytics implementation with low/no code required. 

While the use cases for measuring on-chain events are numerous, there are two primary examples:
1) You'd like to easily create a dashboard of specific existing on-chain behavior in your existing analytics system
2) You'd like to join on-chain transaction data with analytics you have from users who've signed into your site or dapp

** Please note that you should ensure to get appropriate consent from your users. Discussion of consent and responsibilities around use and retention of user data is outside the scope of this doc. **

There are many ways to do this. This doc just outlines one simple way, using the following tools:
1) Google Analytics. This technique will work with other analytics systems too as long as they support server-side event instrumentation and the ability to set a user-ID.
2) Etherscan. This is one well documented API provider for querying Ethereum blockchain events. There are many others.
3) Google Sheets. I like to use sheets to stage the data before piping it into GA.
4) Google Apps Script. Adds a lot of power and automation to Google sheets. We'll use 3, but you can just copy my sheet that has them already. 

That's it! Will add the step by step instructions if helpful in addition to the code for the apps scripts and sheet.




Helpful Links:
https://docs.etherscan.io/getting-started/creating-an-account
https://developers.google.com/analytics/devguides/collection/protocol/ga4
https://firebase.google.com/codelabs/firebase_mp#0
https://developers.google.com/analytics/devguides/collection/protocol/ga4/sending-events?client_type=firebase
