var Localization = function (languages) {

    //Constructor
    var langs = languages.split(',');
    this.CL = (navigator.language || navigator.userLanguage).slice(0, 2);

    //Selecting language
    this.SelectLanguage = function (language) {
        if (langs.includes(language)) {
            var old = document.getElementById("loc");
            if (old) old.remove();
            var style = document.createElement("style");
            style.id = "loc";
            var s = language + "{display:inline-block;}";
            langs.forEach(function (l) {
                if (l != language)
                    s += l + ",";
            });
            style.innerHTML = s.slice(0, -1) + "{display:none;}"
            document.head.appendChild(style);
            this.CL = language;
        }
        else this.SelectLanguage(langs[0]);
    }

    this.SelectLanguage(this.CL);
}
