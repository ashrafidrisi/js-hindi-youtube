  
//   const regularuser = {
//     email : "azmi@gmail.com",
//     fullname : {
//         userfullname : {
//             firstname : "mohammad ",
//             lastname : "ashraf"
//         }
//     }

//   }
//   console.log(regularuser);
//   console.log(regularuser.fullname);
//   console.log(regularuser.fullname.userfullname);

//   let a=[1,2]
//   let b=[3,4]
//   let c=[a,b]
//   console.log(c);   //  [ [ 1, 2 ], [ 3, 4 ] ]

//  let obj1 = {
//     1: "a",
//     2 : "b"
//  }

//  let obj2 = {
//     1: "a",
//     2 : "b"
//  }

//   let obj3 = { obj1, obj2}
//   console.log(obj3);  //  { obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'a', '2': 'b' } }

//   let obj3 = Object.assign(obj1,obj2)
   ///    or    let obj3 = Object.assign({},obj1,obj2)
//   console.log(obj3);
//   { '1': 'a', '2': 'b' }

  //  spread operator use ker ke

//    let obj3 = { ...obj1, ...obj2};
//     console.log(obj3);
    //    { '1': 'a', '2': 'b' }

    let obj = {}
    obj.id = 4;
    obj.email = "ashraf@gmail.com";
    obj.age = 24;
    console.log(obj)

    console.log(Object.keys(obj));
    console.log(Object.values(obj));
//    let users = [
//      {
//         id : 1,
//         email : "azmi1@gmail.com "
//      },
//      {
//         id : 1,
//         email : "azmi2@gmail.com "
//      },
//      {
//         id : 1,
//         email : "azmi3@gmail.com "
//      }
//    ]
//     console.log(users[1].email);
   