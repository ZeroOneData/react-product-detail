
# Install and run application - guide

- run: "git clone https://github.com/ZeroOneData/react-product-detail.git" from your command line 
- change into project directory [cd react-product-detail]
- run: "npm install"    (to install project dependancies)
- run: "npm start"      (to run the development server)
- navigate to "https://localhost:3000" to view and interact with the ui


# Introduction

This application leverages javascript and the React.js library to deliver a modern, responsive, front-end web application. 

The goal of the application is to provide a PIXEL-PERFECT product detail page for an E-commerce website. The app is intended to be fully responsive, providing both mobile and desktop designs.


## Main features

* Implement a simple product detail page matching the mobile and desktop prototype designs provided by marvelapp.com

* Data for the product must be fetched from the provided external API. 

* No hardcoded HTML markup, unless for elements that are not provided by API.

* QTY rockers next to product options should function (+ and - buttons increase and decrease QTY) as well as QTY itself must be an input field that 
accepts valid numbers:
    - Lowest allowed value is 0. If the value is 0, - button becomes grayed out and non-clickable.
    - Increment step is 1 (if value is 3 and you press “+”, value changes to “4” and so forth).
    - If an incorrect value is entered using the input field (e.g. -10), on blur-event that value should
        change to the last valid value used instead. - this includes monitoring the min and max props of the reusable Rocker component.
    - Having QTY 1 or more means the option is primed to be added to cart and must appear in the
        right hand sidebar above shipping info in a custom Cart Summary.

* Right sidebar should contain product options with QTY 1 or more (option summary) and the calculated price for each of them:
    a. If an option with a price of R10 has QTY=2, the price in summary should be R20.

* API returns info for the shipping time and lead time. Add a tooltip on hover that displays it.

* A functioning discount timer that counts down to the discount end date provided by the API.

* A fully functioning, reusable and shareable 'Quanity Rocker' component - configured to have different min value, max value and step increment value.

* Tech-Stack utilised:
    -   React.js
    -   Tippy.js
    -   react-countdown
    -   javascript
    -   Git

## Usage

This application is not intended for production - it is, however intended for use as a solution to a coding challenge set forth during the interview process toward a Software Develepoment Role