let osmodule = require('os')
let host = osmodule.hostname()
console.log("Hostname is  " +host , "OS = ", osmodule.platform())
console.log("CPUS",osmodule.cpus())
console.log(osmodule.userInfo())
console.log(osmodule.type())
console.log(osmodule.machine())
console.log(osmodule.freemem())