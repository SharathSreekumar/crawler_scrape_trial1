var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var mongoose = require('mongoose');
//var newsController = require('./controllers/news');
var newsModel = require('./models/News'); // i.e. newsModel  = 'News' from mongoose.model('News',newsSchema);

mongoose.connect('mongodb://localhost:27017/news1');
mongoose.connection.on('error',function(){
    console.error('MongoDb is not connected. Check if Mongod is running.');
});

var url = 'http://www.ndtv.com';
var event;
var tex;

createNews = function(req,res){
    res.render('create');
}

storeNewNews = function(hed,lk){    // this function is to store value using 'post' operation
    var newsH = new newsModel();
    newsH.headline = hed;
    newsH.link = lk;
    newsH.save();
}

exports.startNewsCollection = function(req,res){
    request.get(url,function(err,resp, body) {          // main function
        if(err)
            return console.log(url+' error!');          //exiting at error...
        $ = cheerio.load(body);
        $('.topst_listing ul li').each(function(day) {
            $(this).each(function() {
                event = $(this).text();                 // retrieves the text i.e. the HeadLine..
                tex = $(this).find('a').attr('href');   // retrieves the link of that headline..
                //console.log(event+' : '+tex);
                createNews;                             //create/set the dataBase
                storeNewNews(event,tex);                // sends the value to the database
            });
        });
        console.log("Success!!");
    });
}

exports.getAllNews = function(req,res){     // for displaying the news
    
    newsModel.find(function(err,newh){   //for .find() we don't need an object..
        if(err)
            res.send(err);
        res.json(newh);             // newh - news Headline
    });
}

exports.getUserByHead = function(req,res) {         // the data is searched using HeadLine
    userModel.findById(req.params.headline,function(err,news2){ 
        if(err)
            res.send(err);
        res.render('headline',{
            title:'User Profile',
            user : news2
        });
        res.json(news2);
    });
}

exports.deleteNewsByHead = function(req,res) {  // for insert, update, etc  we need object
    
    newsModel.remove({
        headline:req.params.headline;
    },function(err,user){
        if(err)
            res.send(err);
        res.json({
            message:"Deleted using HeadLine..."
        });
    });
}