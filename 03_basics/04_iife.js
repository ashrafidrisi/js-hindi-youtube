// Immediately Invoke function Expression

//   function chai() {
//     console.log('Connected Database');
//   }
//    chai();   //    NORMAL FUNCTION

//   (function chai() {
//     console.log('Connected Database');
//   })()       //  output  Connected Database
  //   IIFE 

//   (function chai() {
//         console.log('Connected Database');
//       })();   //    Connected Database

  //    USING ARROW FUNCTION

    //  (()=> {
    //         console.log('Connected Database');
    //       })();     //  Connected Database

    // ((name)=> {
    //     console.log(`Connected Database ${name}`);
    //   })("ashraf");   //    Connected Database ashraf