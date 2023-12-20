// function abc(){
//     console.log("Mohammad Ashraf");
// }
// abc(); // Mohammad Ashraf  // yaha function execute hua hai
// abc   //  output me kuch nahi ayega  /// hum ne yaha sirf function ka reference pass kiya hai

//  function add(num1,num2){
//     console.log(num1 + num2)
//  }
  // add(3,5) // 8

  // let result = add(3,5)  //  8
  // console.log("result :" , result);  //  result : undefined
   
//   function add(num1,num2){
//       return num1 + num2
//  }
//   let result = add(3,5)
//     console.log(result);

  // function xyz(name){
  //   return ` hello ${name} what are you doing now`
  // }
  //  let ans = xyz("Ashraf")
   /// console.log(ans);    //   hello Ashraf what are you doing now

  //  function xyz(name){
  //   return ` hello ${name} what are you doing now`
  // }
  // let ans = xyz()   //  jab value pass nahi karenge to ans undifine ayega
   // console.log(ans);   // hello undefined what are you doing now 

  //  function xyz(name){
  //       if(!name) {
  //         console.log("please enter a user name");
  //       }
  //   }
  //     xyz()

    // +++++++++++++++++++++++++  Array , Object  in function  ++++++++++++++++++++++++++


      // const user = {
      //    username : "Mohammad ashraf",
      //    price : 399
      // } 

      //  function abc(myobj) {
      //     return `username : ${myobj.username} and price is : ${myobj.price}`
      //  }
      //   console.log(abc(user)); //   username : Mohammad ashraf and price is : 399

       // direct object pass kerna 

       

    //   function abc(myobj) {
    //      return `username : ${myobj.username} and price is : ${myobj.price}`
    //   }
    //    console.log(abc({
    //     username : "Mohammad ashraf",
    //     price : 399
    //  } ));


      // const newArray = [200,600,700]

      // function abc(myarray){
      //   return myarray[2]
      // }

      // console.log(abc(newArray)) //  700

        //  direct array pass kerna

        function abc(myarray){
            return myarray[2]
          }

           console.log(abc([100,500,300]));  // 300