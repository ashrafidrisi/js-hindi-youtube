 let user = {
    username : "ashraf",
    age : 25,
    welcome : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
 }

  // user.welcome  // yeah sirf function ka reference hai

//   user.welcome()    function execute hua hai  //  ashraf , welcome to website
    //  user.username = "azmi"
    //  user.welcome()    //azmi , welcome to website

    // user.welcome()    
    //  user.username = "azmi"
    //  user.welcome()

//      ashraf , welcome to website
// { username: 'ashraf', age: 25, welcome: [Function: welcome] }
// azmi , welcome to website
// { username: 'azmi', age: 25, welcome: [Function: welcome] }

//console.log(this); // output {}  // kyu ki global me koi context hi nahi hai

    // function chai(){
    //      let username = "ashraf"
    //      console.log(this.username);
    // } 
    // chai()  //  undefined   
    //  this sirf object me hi kaam kerta hai