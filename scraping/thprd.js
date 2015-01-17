var express = require('express');
var request = require('request');
var cheerio = require('cheerio');


/*var request = require('request');
var cheerio = require('cheerio');

courses = {
    'Java': 'java',
    'Python': 'python',
    'C++': 'C%2B%2B'
};
//days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (course in courses) {
    var url = 'https://coursera.org/courses?query=' + courses[course];
    request(url, ( function(course) {
        return function(err, resp, body) {
            if (err)
                throw err;
            $ = cheerio.load(body);
            console.log(course);
            // TODO: scraping goes here!
        }
    } )(course));
}*/


/**
 * 
 * Web scraping hackathon.io using Cheerio library.
 */


/*var events = [];

request.get('https://ndtv.com', function(err, request, body) {
    //if (err) return r=(err);
    var $ = cheerio.load(body);
    
    $(".topst_listing ul li").each(function(news) {
        
        console.log($(this).text());
        
    });
    //end of list of upcoming hackathon list
});*/
//end of hackathon.io scan

var url = 'http://www.ndtv.com';

request.get(url,function(err,resp, body) {
    if(err)
        return console.log(url+' error!');            //exiting at error...
    $ = cheerio.load(body);
    $('.topst_listing ul li').each(function(day) {
        $(this).each(function() {
            event = $(this).text();
            console.log(event);
        });
    });
});