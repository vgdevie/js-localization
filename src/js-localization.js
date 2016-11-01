var Localization = function (languages) {

    //Constructor
    var langs = languages.split(',');
    this.CL = navigator.language || navigator.userLanguage;
    if (this.CL.includes("-"))
        this.CL = this.CL.charAt(0) + this.CL.charAt(1);

    //Selecting language
    this.SelectLanguage = function (language)
    {
        if (langs.includes(language))
        {
            langs.forEach(function (l)
            {
                Array.from(document.getElementsByTagName(l)).forEach(function (item)
                {
                    if (l == language)
                        item.style.display = "inline-block";
                    else item.style.display = "none";
                });
            });
            this.CL = language;
        }
        else
            this.SelectLanguage(langs[0]);
    }

    function getElements(name)
    {
        document.getElementsByName(name)
    }

    this.SelectLanguage(this.CL);
}
