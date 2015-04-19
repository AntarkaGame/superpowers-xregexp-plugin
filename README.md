# superpowers-xregexp-plugin
XRegXExp plugin for Superpowers, the extensible HTML5 2D+3D game engine.

XRegExp is an open source (MIT License) JavaScript library that provides augmented and extensible regular expressions. You get new syntax, flags, and methods beyond what browsers support natively. XRegExp is also a regex utility belt with tools to make your client-side grepping simpler and more powerful, while freeing you from worrying about pesky cross-browser inconsistencies and the dubious lastIndex property.

XRegExp supports all native ES5 regular expression syntax. It works with Internet Explorer 5.5+, Firefox 1.5+, Chrome, Safari 3+, and Opera 11+. 

# Documentation

### Find number in bold balise : 

```javascript
var html = '1 <b>2</b> 3 <b>4 a 56</b>';
var result = XRegExp.matchChain(html, [XRegExp('(?is)<b>.*?</b>'),/\d+/]);
Sup.log(result); 
// -> ['2', '4', '56']
```

### Find more here : 
http://xregexp.com/api/

# Installation 

[Download the latest release](https://github.com/fraxken/superpowers-xregexp-plugin/archive/master.zip), unzip it, rename the folder to Jquery, move it inside app/plugins/fraxken/ then restart your server.
