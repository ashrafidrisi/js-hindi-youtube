//  Array

//  let myArray = [1,3,5,7]
//   let hero = ["mohammad", "ashraf","azmi"]

//   let myArray2 = new Array(2,4,7)
//   console.log(myArray[2]);
//   console.log(myArray2[1]);

  ///   Array Method 
//   let MyArray = [1,3,5,7]
//   MyArray.push(9)  // array ke end me value ko add kerta hai.   //  [ 1, 3, 5, 7, 9 ]
//   console.log(MyArray);
//   MyArray.pop()   //  array ke end se value ko delete kerta hai.  //  [ 1, 3, 5 ]
//   console.log(MyArray);

//    MyArray.unshift(8)  // array ke starting  me value ko add kerta hai. //  [ 8, 1, 3, 5, 7 ]
//    console.log(MyArray);
    //  MyArray.shift()  //  array ke starting se value ko delete kerta hai  //   [ 3, 5, 7 ]
    // console.log(MyArray);

    // let MyArray = [1,3,5,7]
    // console.log(MyArray.includes(9))  //   false
    // console.log(MyArray.indexOf(5));   //  2
    //  let newArr =  MyArray.join()  // join method array ko string me convert ker deta hai  
    //   console.log(newArr);    //   1,3,5,7
    //   console.log(typeof newArr);    //  string

        // ++++++++++++++    SLICE ,, SPLICE   ++++++++++++++++++++++

        let myArr = [0,1,2,3,4,5]
         console.log(" A ", myArr);

         let myn1 = myArr.slice(1,3)
         console.log(myn1);
         console.log(" B  ", myArr);

         let myn2 = myArr.splice(1,3)
         console.log(myn2);
         console.log(" c  ", myArr);

  