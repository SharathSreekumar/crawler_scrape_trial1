var users=[
    {
        id:1,
        name:"Sobin",
        username:"sobingt",
        password:"abc"
    },
    {
        id:2,
        name:"Stanly",
        username:"stan",
        password:"xyz"
    }
];

/*exports.getUsers=function(){
    return users;
}*/

/*exports.getUser=function(id){
    for(var i=0;i<users.length;i++) {
        if(users[i].id==id)
            return users[i];
    }
}*/

exports.postUser=function(username,password){
    for(var i=0;i<users.length;i++) {
        if(users[i].username==username)
        {
            if(users[i].password==password)
                return 1;
        }
    }
    return 0;
}