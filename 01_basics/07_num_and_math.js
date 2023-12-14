// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);
// console.log(typeof balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(1))

//
// 400
// [Number: 100]
// object
// 3

//   let other = 23.8956
//   console.log(other.toPrecision(3));  // 23.9
    // let other1 = 123.8956
    // console.log(other1.toPrecision(3));  // 124

    // let other2 = 1123.8956
    // console.log(other2.toPrecision(3));  //  1.12e+3

    // let a= 1000000
    // console.log(a.toLocaleString());  // 1,000,000

    // console.log(a.toLocaleString('en-IN'));  // 10,00,000

      // +++++++++++++++++++++  MATH  +++++++++++++++++++++++++++++++++++

        // console.log(Math)
        // console.log(Math.abs(-4));
        // console.log(Math.round(4.6));
        // console.log(Math.ceil(4.2));
        // console.log(Math.floor(4.9));

        // Object [Math] {}
        //    4
        //    5
        //    5
        //    4

        // console.log(Math.min(6,7,3,9));
        // console.log(Math.max(6,7,3,9));

        // console.log(Math.random());
        // console.log(Math.random()*10);
        // console.log( (Math.random()*10) + 1 );
        // console.log( Math.floor(Math.random()*10) + 1 );

        const min = 10;
        const max = 20;
         
        console.log( Math.floor(Math.random() * (max-min +1)) + min )
