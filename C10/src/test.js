var promise2 = new Promise(function (someResolve, reject) {
  setTimeout(function () {
    someResolve({
      myMan: false,
      description: "lorem ipsum",
    });
  }, 1 * 3000);
});

console.log("Im doing my thing in the meanwhile");

promise2
    .then(
        function (result) {
            console.log('first then')
            console.log("some", result);

            if( result.myMan ) {
                return 'yees'
            }
            
        },
        function (reason) {
            console.log("why? - ", reason);
        }
    )
    .then(function(valoare) {
        console.log(valoare)
        return 'cu totul altceva'
    })
    .then(function(bbb) {
        console.log(bbb)
         console.log(myVa)
    })
    .catch(function(e) {
        debugger
        console.log(e)
    })
    .finally(function(result) {
        console.log('finally!', result)
    })

