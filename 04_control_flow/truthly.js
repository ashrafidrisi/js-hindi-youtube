//  const email = "ashraf@gmail.com"

//  if(email){
//     console.log('got user email');
//  }
//  else{
//     console.log(" don't have user email");
//  }
  
 //  FALSY VALUES
  
   // false, 0, -0, BigInt 0n, "", null, undefined, NaN

// TRUTHY VALUES

     //  "0", "false", " ", [], {}, function(){}

     // EMPTY ARRAY CHECK KERNE KA RARIKAH

    //  let arrayemail = []

    //    if(arrayemail.length === 0){
    //     console.log("empty array");
    //    }

             // EMPTY OBJECT CHECK KERNE KA RARIKAH

    //   const obj ={}

    //     if(Object.keys(obj).length === 0){
    //         console.log("empty object");
    //     }

       //  Nullish Coalescing Operator (??) null, undefined

    //    let val1;
       // val1 = 5 ?? 10  // 5
        //   val1 = null ?? 10  // 10
        // val1 = undefined ?? 15  // 15
        // val1 = null ?? 4 ?? 8   // 4
        // console.log(val1);

        //  TERNIARY OPERATOR 

        // condition ? true :false

         const teaPrice = 100

          teaPrice >= 80 ? console.log("nice tea") : console.log("los tea");