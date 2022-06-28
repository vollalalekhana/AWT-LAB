var express=require('express')
var http=require('http')
var app=express();
app.use(express.json())
let users=[
    {"id":1,"name":"cvr","place":"hyderabad"},{"id":2,"name":"abc","place":"secunderabad"}
]
app.listen(3000,()=>{
    console.log("server started")
})
app.get('/users',(req,res)=>{
    res.json(users)
})

app.post('/adduser',(req,res)=>{
    console.log(req.body);
    const user={
        id:req.body.id,
        name:req.body.name,
        place:req.body.place
  
    };
    users.push(user)
    res.json(users)
    res.end()
})


app.put('/users/:id',(req,res)=>{
    const user=users.find(ele=>ele.id===parseInt(req.params.id))
    if(user){
        user.name=req.body.name;
        user.place=req.body.place;
        res.json(users);
    }
    else{
        res.send('user with id ${req.params.id} is not present')
    }
})


// app.delete('/delusers/:id',(req,res)=>{
//     const user=users.find(ele=>ele.id===parseInt(req.params.id))
//     if(user){
//         res.json(users)
//     }
//     else
//     {
//         res.send('user with id ${req.params.id} is not present')
//     }
// })

app.delete('/deleteusers/:id',(req,res)=>{
    const user=users.find(ele=>ele.id===parseInt(req.params.id))
    if(user){
      users.splice(req.params.id,1)
      res.send("deleted.....")
}
else
res.send("not found")
})