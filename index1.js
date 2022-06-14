/* Node modules usinh http*/
var http = require('http')
var fs = require('fs')
var server = http.createServer(function(req,res){
    if(req.url=='/'){
         fs.readFile("demo.txt",function(err,data){
            res.write(data)
            res.end()
         })
    }
    else if(req.url=='/home'){
        res.write("this is home page")
        res.end()
    }
    else if(req.url=='/end'){
        res.write("end page")
        res.end()
    }
    else if(req.url=='/admin'){
        res.write("this is admin page")
        //res.end()
    }
})
server.listen(2000)
console.log("server started on port 8000");