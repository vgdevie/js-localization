# js-localization
Simple lighweight JavaScript localization for small websites.

Hi to everyone, here is my small js script writen once upon a evening. Maybe it will help someone, who don't want to download big frameworks to localize a small website. 

### Advantdages
* Simple installation and usage
* Saving selected language
* No JQuery needed
* Lightweight (Just 500 bytes!)
* Language changes on-the-fly
* High Perfomance


## Installation

Just add this code to your pages header.

```javascript
<script>
var Localization=function(n){var t=n.split(",");this.CL=(navigator.language||navigator.userLanguage).slice(0,2);this.Changed=new Event("changed");this.SelectLanguage=function(n){var r,i,u;t.includes(n)?(r=document.getElementById("loc"),r&&r.remove(),i=document.createElement("style"),i.id="loc",u=n+"{display:inline-block;}",t.forEach(function(t){t!=n&&(u+=t+",")}),i.innerHTML=u.slice(0,-1)+"{display:none;}",document.head.appendChild(i),this.CL=n,localStorage.lang=n,document.dispatchEvent(this.Changed)):this.SelectLanguage(t[0])};localStorage.lang==null?this.SelectLanguage(this.CL):this.SelectLanguage(localStorage.lang)};
var loc = new Localization("%LANGUAGES%");
</script>
```

## Usage

#### Step 1. 
Change %LANGUAGES% to languages you want to localize your website separated with coma. Use 2 chars lowercase language code (ISO 639-1), for example "en" for English language.

**NOTE:** Script will dedect user language and switch to it automaticaly if language localized.

Example for English and Russian languages:
```javascript
<script>
var loc = new Localization("en,ru");
</script>
```

**NOTE:** In this example english is on first plase, so it will be primary language and will display when user request language that is not included.

#### Step 2. 
Apply language tags to your texts.

Example for English and Russian languages:
```html
<button>
  <en>Contact Me</en>
  <ru>Свяжитесь со мной</ru>
</button>
```

**NOTE:** You can add as many languages as you want, just remember to initialize them at startup (step 1) for working properly.

####Thats it!

## Changling language manualy

If you want to change language manualy call method "SelectLanguage("%LANGUAGE%")".

#### Step 1. 
Add select element to your page:

```html
<select id="ls" onchange="loc.SelectLanguage(this.options[this.selectedIndex].value)">
  <option value="en">English</option>
  <option value="ru">Русский</option>
</select>
```

**NOTE:** Remember to replace select options for your languages!

#### Step 2. 
Then add this code after initialization(Usage.Step 1), for select element proper option to be selected when page loads.

```javascript
document.getElementById("ls").value = loc.CL;
```

**NOTE:** You can bind "changed" event on localization object for your js.

#### Now you can switch language and all text will change at a moment!

## Whole page example

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Sample page</title>
	<meta charset="utf-8" />
</head>
<body>
    <header>
        <select id="ls" onchange="loc.SelectLanguage(this.options[this.selectedIndex].value)">
            <option value="en">English</option>
            <option value="ru">Русский</option>
        </select>
	    <script>
var Localization=function(n){var t=n.split(",");this.CL=(navigator.language||navigator.userLanguage).slice(0,2);this.Changed=new Event("changed");this.SelectLanguage=function(n){var r,i,u;t.includes(n)?(r=document.getElementById("loc"),r&&r.remove(),i=document.createElement("style"),i.id="loc",u=n+"{display:inline-block;}",t.forEach(function(t){t!=n&&(u+=t+",")}),i.innerHTML=u.slice(0,-1)+"{display:none;}",document.head.appendChild(i),this.CL=n,localStorage.lang=n,document.dispatchEvent(this.Changed)):this.SelectLanguage(t[0])};localStorage.lang==null?this.SelectLanguage(this.CL):this.SelectLanguage(localStorage.lang)};
        var loc = new Localization("en,ru");
        document.getElementById("ls").value = loc.CL;
    </script>
    </header>
    <content>
        <h1>
            <en>Halloween</en>
            <ru>Хеллоуин</ru>
        </h1>
        <p>
            <en>Halloween or Hallowe'en (a contraction of All Hallows' Evening), also known as Allhalloween, All Hallows' Eve, or All Saints' Eve, is a celebration observed in a number of countries on 31 October, the eve of the Western Christian feast of All Hallows' Day. </en>
            <ru>Хе́ллоуи́н (также Хэ́ллоуи́н) (англ. Halloween, All Hallows' Eve или All Saints' Eve) — современный праздник, восходящий к традициям древних кельтов Ирландии и Шотландии, история которого началась на территории современных Великобритании и Северной Ирландии. </ru>
        </p>
        <button onclick="alert('boo');">
            <en>Scare someone</en>
            <ru>Напугать кого-то</ru>
        </button>
    </content>
</body>
</html>
```
[Open page in new tab](http://htmlpreview.github.io/?https://github.com/vgdevie/js-localization/blob/master/sample.html)

## Credits & Licensing

Copyright (c) Vyacheslav Chukhno (http://vgdev.pro)

Please use it, and contribute changes.

