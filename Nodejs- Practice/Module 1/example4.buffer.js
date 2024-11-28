buf = new Buffer(10);
buf.write("Accenture", 0, "ascii");
console.log(buf.toString('base64'));
buf = buf.slice(0, 5);
console.log(buf.toString('utf8'));