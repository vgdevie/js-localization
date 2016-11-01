# js-localization
Simple lighweight JavaScript localization for small websites.

Hi to everyone, here is my small js script writen once apon a evening. Maybe it will help someone, who don't want to download big frameworks to localize a small website. 

### Advantdages
* Simple installation and usage
* No JQuery needed
* Lightweight (Just 433 bytes!)


## Installation

Just add this code to your pages.

```javascript
<script>
var Localization=function(a){var b=a.split(",");this.CL=navigator.language||navigator.userLanguage,this.CL.includes("-")&&(this.CL=this.CL.charAt(0)+this.CL.charAt(1)),this.SelectLanguage=function(a){b.includes(a)?(b.forEach(function(b){Array.from(document.getElementsByTagName(b)).forEach(function(c){b==a?c.style.display="inline-block":c.style.display="none"})}),this.CL=a):this.SelectLanguage(b[0])},this.SelectLanguage(this.CL)};
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
  <ru style="display:none;">Свяжитесь со мной</ru>
</button>
```

**NOTE:** You can add as many languages as you want, just remember to initialize them at startup (step 1) for working properly.

**NOTE:** Add style="display:none;" attribute to languages except primary. That will resolve issue with multi text displaing when page load.

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
    </header>
    <content>
        <h1>
            <en>Halloween</en>
            <ru style="display:none;">Хеллоуин</ru>
        </h1>
        <p>
            <en>Halloween or Hallowe'en (a contraction of All Hallows' Evening), also known as Allhalloween, All Hallows' Eve, or All Saints' Eve, is a celebration observed in a number of countries on 31 October, the eve of the Western Christian feast of All Hallows' Day. </en>
            <ru style="display:none;">Хе́ллоуи́н (также Хэ́ллоуи́н) (англ. Halloween, All Hallows' Eve или All Saints' Eve) — современный праздник, восходящий к традициям древних кельтов Ирландии и Шотландии, история которого началась на территории современных Великобритании и Северной Ирландии. </ru>
        </p>
        <button onclick="alert('boo');">
            <en>Scare someone</en>
            <ru style="display:none;">Напугать кого-то</ru>
        </button>
    </content>
    <script>
        var Localization = function (a) { var b = a.split(","); this.CL = navigator.language || navigator.userLanguage, this.CL.includes("-") && (this.CL = this.CL.charAt(0) + this.CL.charAt(1)), this.SelectLanguage = function (a) { b.includes(a) ? (b.forEach(function (b) { Array.from(document.getElementsByTagName(b)).forEach(function (c) { b == a ? c.style.display = "inline-block" : c.style.display = "none" }) }), this.CL = a) : this.SelectLanguage(b[0]) }, this.SelectLanguage(this.CL) };
        var loc = new Localization("en,ru");
        document.getElementById("ls").value = loc.CL;
    </script>
</body>
</html>
```
[Open page in new tab](http://htmlpreview.github.io/?https://github.com/vgdevie/js-localization/blob/master/sample.html)

## Credits & Licensing

Copyright (c) Vyacheslav Chukhno (http://vgdev.pro)

Please use it, and contribute changes.

