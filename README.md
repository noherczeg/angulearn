Step - 1
-------------

Inbefore errors...
`$ npm install grunt-karma --save-dev`

### Installing ui-router

`$ bower install angular-ui-router --save`

`$ yo angular:controller about`
`$ yo angular:view about`

`$ yo angular:controller contact`
`$ yo angular:view contact`

### setting up stuff

* add baseHref, and explain
* add ui-sref to links (point out that links won't show active state at all)
* skipp title bind
* add ui routing without data {} (3 states, Home link should become active now)
* explain html5mode
* default route fallback at the end
* swap out ng-include to ui-view

### modrewrite

* tell them to click on about, and refresh the page
* point out the need to update the Gruntfile.js configs, and pull needed dependency
* `$ npm install connect-modrewrite`
* edit Gruntfile.js:

```
var modRewrite = require('connect-modrewrite');

[...]

// connect > livereload > middleware
modRewrite(['!\\.html|\\.js|\\.svg|\\.css|\\.png$ /index.html [L]']),
```

Restart the server: `$ grunt serve`

State preservation should now work with livereload