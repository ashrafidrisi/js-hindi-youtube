// primitive

// 7 types  ,,  string,number,boolean,null,undefined,symbol,bigInt

// non-primitive(reference) ,,  array,object, functions

//   const hero = ["ashraf","nahid","saleem"];

//    const myobj = {
//     name:"mohammad",
//      age:25
//    }

// array,object ka data type ,,, object hota hai

    // const mufunction = function(){
    //     console.log("hello");
    // }

    // data type function hota hai bolte hai function object

    // const bigInt= 127823367792694402n;
    // console.log(typeof bigInt);

 // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

   //  Stack(Primitive) ,  Heap(Non=Primitive)

    //  let mychannel = "ashrafdrem"
    //   let anothermyChannel =  mychannel
    //   anothermyChannel="chaiashraf"
    //   console.log(mychannel);
    //   console.log(anothermyChannel);

     let userOne = {
        email:"user@google.com",
        upi: "upi@ybl"
     }

       let userTwo = userOne;

        userTwo.email = "ashraf@gmail.com"

          console.log(userOne.email);
          console.log(userTwo.email);







