 const accountId=13345;
 let accountEmail="ashraf@gmail.com";
 var accountPassword="ashraf97";
  accountCity="jaipur";
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
   console.table([accountId,accountEmail,accountPassword,accountCity]);
