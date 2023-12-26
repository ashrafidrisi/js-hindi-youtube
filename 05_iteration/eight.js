  // REDOCE 
    //  const myNumbers = [1,2,3]
    //   const mytotal = myNumbers.reduce( function(acc,curval) {
    //     console.log(`acc: ${acc} and current value ${curval}`);
    //     return acc + curval
    //   }, 0)
    //    console.log(mytotal);

    //    acc: 0 and current value 1
    //    acc: 1 and current value 2
    //    acc: 3 and current value 3
    //    6

        // const number = [1,2,3]
        //   const total = number.reduce( (acc,curval)=> acc + curval, 0 )
        //   console.log(total);

        const shopingCard = [
            {
                courceName : "java script",
                 price : 2999
            },
            {
                courceName : "Python",
                 price : 9999
            },
            {
                courceName : "node",
                 price : 4999
            },
        ]
         
        const totalPrice = shopingCard.reduce( (acc,item)=> acc + item.price, 0 )
        console.log(totalPrice);

                 // 17997