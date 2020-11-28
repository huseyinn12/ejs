const express=require('express');

const app=express();

app.set("view engine","ejs");

app.get('/',function(req,res){

res.sendFile(__dirname+"/index.html");
})

app.get('/hakkinda',function(req,res){

res.sendFile(__dirname+"/hakkinda.html");


})

app.get('/profil/:isim',function(req,res){

res.render('profil',{kisi:req.params.isim});
    
})
app.listen(3000);