  
   // ["","",""]
   // [{}, {}, {}]

 const coding = ["java","python","js","html"]
//    coding.forEach((item)=>{
//     console.log(item);
//    })

//    function printMe(item){
//      console.log(item);
//    }

//     coding.forEach(printMe)

    //   coding.forEach((item,index,arr)=>{
    //      console.log(item,index,arr);
    //     })

    //     java 0 [ 'java', 'python', 'js', 'html' ]
    //     python 1 [ 'java', 'python', 'js', 'html' ]
    //     js 2 [ 'java', 'python', 'js', 'html' ]
    //     html 3 [ 'java', 'python', 'js', 'html' ]

       const myCoding = [
          {
            languageName : "javascript",
            languageFilename : "js"
          },

          {
            languageName : "python",
            languageFilename : "py"
          },

          {
            languageName : "java",
            languageFilename : "java"
          }

       ]

    //    myCoding.forEach((item)=>{
    //     console.log(item);
    //    })

    //    { languageName: 'javascript', languageFilename: 'js' }
    //    { languageName: 'python', languageFilename: 'py' }
    //    { languageName: 'java', languageFilename: 'java' }


         myCoding.forEach((item)=>{
            console.log(item.languageName);
           })

        //    javascript
        //    python
        //    java