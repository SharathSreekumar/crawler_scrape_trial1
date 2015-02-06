var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var mongoose = require('mongoose');
//var courseraModel = require('./models/Coursera1.js');
/*
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


var urls = ['https://www.coursera.org','https://www.edx.org'];
var queries = ['/api/courses.v1?fields=certificates,instructorIds,partnerIds,photoUrl,specializations,startDate,v1Details,partners.v1(homeLink,logo,name),instructors.v1(firstName,lastName,middleName,prefixName,profileId,shortName,suffixName),specializations.v1(logo,partnerIds,shortName),v1Details.v1(upcomingSessionId),v1Sessions.v1(durationWeeks,hasSigTrack)&includes=instructorIds,partnerIds,specializations,v1Details,specializations.v1(partnerIds),v1Details.v1(upcomingSessionId)&extraIncludes=_facets&q=search&query=java&limit=20&courseType=v1.session,v2.ondemand','/search/api/all'];
var url1 = 'https://www.coursera.org';
var url2 = 'https://www.edx.org/search/api/all';
var query = '/api/courses.v1?fields=certificates,instructorIds,partnerIds,photoUrl,specializations,startDate,v1Details,partners.v1(homeLink,logo,name),instructors.v1(firstName,lastName,middleName,prefixName,profileId,shortName,suffixName),specializations.v1(logo,partnerIds,shortName),v1Details.v1(upcomingSessionId),v1Sessions.v1(durationWeeks,hasSigTrack)&includes=instructorIds,partnerIds,specializations,v1Details,specializations.v1(partnerIds),v1Details.v1(upcomingSessionId)&extraIncludes=_facets&q=search&query=java&limit=20&courseType=v1.session,v2.ondemand';

createCourse = function(req,res){
    res.render('course');
}
//var webst = require(url1+query);
/*getElements1=function(){
    return courseraModel.elements.name;
}*/

/*request.get(url1,function(err,resp, body) {
    if(err)
        return console.log(url1+' error!');            //exiting at error...
    $ = cheerio.load(body);
    $('div').each(function(day) {
        $(this).each(function() {
            event = $(this).text();
            console.log(event);
        });
    });
});*/

request.get(url2,function(err,resp, body) {
    if(err)
        return console.log(url2+' error!');            //exiting at error...
    $ = cheerio.load(body);
    //var data = JSON.parse(webst);
    var data = JSON.parse(body);
        //console.log(data);
    for(var d in data)
    {
        console.log(data[d].l);
        console.log(data[d].url);
    }
});

