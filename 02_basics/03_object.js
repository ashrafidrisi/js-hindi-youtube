  //   symbol ko declare kerne ka tarikah
     const mySym = Symbol("key1") ;

  const Jsuser = {
     name : "ashraf",
     // full name : "mohammad ashraf", // key me space ayega to error dega
     // "full name" : "Mohammad ashraf",    tab usko "" ke under likh dete hai
     "full name" : "Mohammad ashraf",
      [mySym] : "mykey" ,
     age : 25,
     location : "mubarakpur",
     email : "ashraf@gmail.com",
     isloggedin : false,
     lastloginday : ["sunday","monday"]
  }
   // console.log(Jsuser.name);
   // console.log(Jsuser["name"]);
   // console.log(Jsuser.full name);   isko access nahi ker sakte hai
   // console.log(Jsuser["full name"]);
   // console.log(Jsuser[mySym]);
     
   //   Jsuser.email = "azmi@gmail.com"
   //   console.log(Jsuser.email);
   
   //  hum chahate hai ki hamare object ki value ko koi change na ker sake tab hum apne object ko freeze ker denge

   //   Object.freeze(Jsuser)  

    //  object me function add kerna

     Jsuser.greeting = function(){
      console.log("hello js user");
     }
   //   console.log(Jsuser.greeting); // output [Function (anonymous)]  //yaha function execute nahi hota hai sirf reference ata hai
   //   console.log(Jsuser.greeting());// output  hello function // yaha function execute hota hai
   //   console.log(Jsuser);

   //  this keyword ka use 
    Jsuser.greetingTwo = function(){
      console.log(` hello js user, ${this.name}`);
    }
    console.log(Jsuser.greetingTwo());   //  hello js user, ashraf