var path = require('path');

var result = '';

result += path.normalize('/foo/bar//baz/asdf/quuxx/..');
result += "\n" + path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
result += "\n" + path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile');

console.log(result)