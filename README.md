# js-localization
Simple lighweight JavaScript localization for small websites.

Hi to everyone, here is my small js script writen once apon a evening. Maybe it will help someone, who don't want to download big frameworks to localize a small website. 

### Advantdages
* Simple usage
* No JQuery needed
* Lighweight (Just 385 bytes!)


### Installation

Just add this code to your pages

```javascript
var Localization=function(a){var n=a.split(","),e=navigator.language||navigator.userLanguage;e.includes("-")&&(e=e.charAt(0)+e.charAt(1)),this.SelectLanguage=function(a){n.includes(a)?n.forEach(function(n){Array.from(document.getElementsByTagName(n)).forEach(function(e){n==a?e.style.display="inline-block":e.style.display="none"})}):this.SelectLanguage("en")},this.SelectLanguage(e)};
```
