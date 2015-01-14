var express=require('express');
var hbs=require('hbs');
var path=require('path');
var bodyParser=require('body-parser');
//User model
var users=require('./users');   // since the hirarchy of this file & users is same i.e.'j.s' hence not needed.
var app=express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');
app.engine('html',hbs.__express);
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
{
    extended:false
}));

app.use(express.static('public'));

//Routes
/*app.get('/',function(request,response){
    response.render('index',{
        title:"Home",
        users:users.getUsers
    });
});

app.get('/users/:id',function(request,response){
    //console.log(users.getUser);
    var user=users.getUser(request.params.id);
    response.render('index',{
        title:"Home",
        user:user
    });
});
*/

app.get('/',function(request,response){
    console.log(request.body.username);
    var user=users.postUser(request.body.username,request.body.password);
    console.log(user);
    if(user==1)
    {       response.render('login',{
            title:"Welcome",
            //users:user
        });
    }
    else
    {       response.render('login',{
            title:"Invalid username or password",
        });
    }   
});

/*app.get('/login',function(request,response){
    response.render('login',{
        title:"Login",
    });
});

app.post('/login',function(request,response){
    
});*/

/*app.get('/users/:id',function(request,response){
    console.log(users.getUser);
    var user=users.getUser(request.params.id);
    response.render('profile',{
        title:"Home",
        user:user
    });
});

app.get('/login',function(request,response){
    response.sendfile('./views/login.html');
});
app.get('/signup',function(request,response){
    response.sendfile('./views/signup.html');
});

app.get('/about',function(request,response){
    response.sendfile('./views/aboutus.html');
});*/

app.post('/users/:id',function(request,response){
    console.log(users.getUser);
    var user=users.getUser(request.params.id);
    response.render('profile',{
        title:"Home",
        user:user
    });
});

app.listen(3000);