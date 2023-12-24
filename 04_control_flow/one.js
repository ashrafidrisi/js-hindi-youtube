//    const x=30
//   if(x>20){
//     console.log('right answer');
//   }
//   else{
//     console.log('wrong answer');
//   }

//   const score=130
//   if(score>100){
//     const power = 'fly'
//   console.log(`user power : ${power}`);
//   }
//   else{
//   console.log('wrong answer');
//   }

  userLoggedIn = true
  debitcard = true
  loggedInFromGoogle = false
  loggedInFromEmail = true
    
  if(userLoggedIn && debitcard){
    console.log('allow to buy course');
  }
   if(loggedInFromGoogle || loggedInFromEmail){
        console.log('user logged in');
   }