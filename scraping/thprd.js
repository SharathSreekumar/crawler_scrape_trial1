var request = require('request');
var cheerio = require('cheerio');

var courses = {
    'Java' : 'java'/*,
    'Python': 'python',
    'C++': 'C%2B%2B'*/
};

for (course in courses) {
    var url = 'https://coursera.org/courses?query=' + courses[course];
    console.log(course);
    request(url, (function(course) { return function(err, resp, body) {
        $ = cheerio.load(body);
        console.log(course);
        $('.c-courseList-entry .bt3-col-md-7.bt3-col-xs-6.c-courseList-entry-details .c-courseList-entry-title').each(function(univ) {
            console.log(course);
            event=$(this).text();
            console.log(course);
            $(this).find('div').each(function() {
                event = $(this).text();//.trim().replace(/\s\s+/g, ',').split(',');
                console.log(course + ',' + event);
            });
            console.log(event);
        });
    }})(course));
    
    
    
}


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