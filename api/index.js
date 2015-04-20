var fs = require('fs');

SupAPI.registerPlugin('typescript', 'XRegExp ', {
  code: "declare var XRegExp;",
  defs: fs.readFileSync(__dirname + '/xregexp.d.ts.txt', {
    encoding: 'utf8'
  })
});