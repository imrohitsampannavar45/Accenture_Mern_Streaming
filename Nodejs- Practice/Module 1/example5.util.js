var util = require('util');
console.log(util.format('%s:%s', 'Name', 'Accenture', 'Solutions'));
console.log(util.format('{%j%j}', 'Name', 'Accenture'));
console.log(util.isArray([]));
console.log(util.isArray(new Array));
console.log(util.isArray({}));
console.log(util.isDate(new Date()));