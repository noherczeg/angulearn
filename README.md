Step - 2
-------------

### On state

* add `ng-bind="pageTitle"` to the title tag
* add .run config for title in app.js (mention minifyability with dependency injection)
* title won't change > move ng-app to the html tag :)

### i18n
* `$ bower install angular-i18n --save`
* `$ bower install angular-translate --save`
* `$ bower install angular-translate-loader-static-files --save`
* add 'pascalprecht.translate' to angulearn.module
* copy translateProvider config
* mkdir 'languages'
* copy lang files into it
* put goat into main html somewhere with translate from scope value
* put translate switch buttons to bottom frame
* put change method to app.js > run
* translate top buttons as well

Notice that translation works, but after refresh it resets

* add loading mechanism from cookieStore to app.js's run ($cookieStore dep)
* update changeLanguage to update cookie, rootScope value, keep instant reload

### Lists and filters

* create: `repository/contacts.json`
* fill it with data: { firstName, lastName, email, regDate }
* `$ yo angular:service contacts`
* write getAll
* inject into contacts controller, assign scope value from promise
* create a table with ng-repeat in the contacts partial
* add some filters e.g. date

And we're done! :)