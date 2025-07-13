watch lecture 55 for routing explaination

points to remember

1. npm i will generate node modules folder and this should not be sent while giving data just do a npm i it will install the node modules folder.

Folder structure

bin has www, in www we have our node server

PUBLIC folder is used for storing resources
audios videos images taken from server will be stored here.

Routes has controller those controllers have actions

Views has view pages that we see at the front end.

App.js is middleware. all the folders are binded into this app.js.
Basically it used for communication between user and server. it has all the information of routes.

. means current folder


when we say npm start it will call bin/www



Steps to create Routes:

step 1 include express
step 2 use Router module of express
step 3 use a method get/post to create action
router.get('/action_name',function(req,res,next){
    explanation of above line 
    it take 2 parameter one is the action name other is function that has req res and next as parameter
})

step 4 render view using res object with in the action

step 5 export the module
ex:- module.export=router


