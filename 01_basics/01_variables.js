 const accountId=13345;
 let accountEmail="ashraf@gmail.com";
 var accountPassword="ashraf97";
  accountCity="jaipur";
   let accountState;
  console.table([accountId,accountEmail,accountPassword,accountCity]);
  // accountId=27787; // not allow
  console.log(accountId);

  /*
   prefer not to use var
   issue block scope
  */
   
   accountEmail="azmi@gmail.com";
   accountPassword="azmi56";
   accountCity="azamgarh";
   console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

//   ┌─────────┬────────────────────┐
//   │ (index) │       Values       │
//   ├─────────┼────────────────────┤
//   │    0    │       13345        │
//   │    1    │ 'ashraf@gmail.com' │
//   │    2    │     'ashraf97'     │
//   │    3    │      'jaipur'      │
//   └─────────┴────────────────────┘
//   13345
//   ┌─────────┬──────────────────┐
//   │ (index) │      Values      │
//   ├─────────┼──────────────────┤
//   │    0    │      13345       │
//   │    1    │ 'azmi@gmail.com' │
//   │    2    │     'azmi56'     │
//   │    3    │    'azamgarh'    │
//   │    4    │    undefined     │
//   └─────────┴──────────────────┘