var Localization = function (languages) {

    //Constructor
    var langs = languages.split(',');
    this.CL = (navigator.language || navigator.userLanguage).slice(0, 2);

    //Lang Changed event
    this.Changed = new Event("changed");

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
            localStorage.lang = language;
            // Calling event
            document.dispatchEvent(this.Changed);
        }
        else this.SelectLanguage(langs[0]);
    }

    if (localStorage.lang == null) this.SelectLanguage(this.CL);
    else this.SelectLanguage(localStorage.lang);
}
