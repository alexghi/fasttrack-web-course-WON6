function one(x) { // daca dati valori lui x (fie primitive, fie functii o sa puteti testa sa vedeti cum se comporta - valabil peste tot in exemple)
  console.log(x);
}
// one(2);

function two(x, cb) {
  setTimeout(function () {
    console.log(x);
    cb(x);
  }, 1000);
}
// two(2,(y) =>{console.log('inside function:' + y );} );

function three(x) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(x);
    }, 1000);
  });
}
// three(5)
//     .then (function (y) {
//         console.log('promise resolve: ', y )
//     });
// console.log('blabla')

function four(x) {
  return new Promise((resolve, reject) => {
    if (x > 5) {
      resolve(x);
    } else {
      reject(x);
    }
  });
}

// four(4)
// .then (function(y){
//     console.log ('four resolve', y)
    
// })
// .catch (function(y){
//     console.log('eror catched', y)
// })

function five(x) {
  return Promise.resolve(x);
}

//sau se mai poate scrie :
// return new Promise ((resolve,reject)=>{
//     resolve(x);
// }); ->// tot timpul rezolva valoarea 


// function six(x) {
//   return Promise.reject(x);
// }

// function seven(x) {
//   return five(x).then(console.log);
// }

// function eight(x) {
//   return six(x).then(console.log, (error) => console.log("error", error));
// }

// function nine(x) {
//   return five(x).then(
//     (y) => {
//       throw new Error("error"+y);
//     },
//     (error) => console.log("error", error)
//   );
// }
// console.log(nine(4))

// function ten(x) {
//   return five(x)
//     .then(() => {
//       throw new Error("error");
//     })
//     .catch((error) => console.log("error", error));
// }

// function eleven(x) {
//   console.log(x);
//   return new Promise((resolve, reject) => {
//     resolve(x);
//   }); ->sau return Promise.resolve(x)
// } 

function twelve(x) {
  console.log(x);
  return new Promise((resolve, reject) => {
    if (x >= 2) {
      console.log("larger");
    } else {
      console.log("smaller");
    }
    resolve(x);
  });
}

// twelve (1).then ((y)=> {console.log('resolve',y )})

function thirteen() {
  return Promise.all([twelve(1), twelve(2)]).then(console.log);
}

// thirteen ();

function fourteen(x) {
  twelve(1).then(console.log);
  twelve(3).then(console.log);
}
// fourteen();

function fifteen(x) {
  return Promise.resolve(
    Promise.resolve(Promise.resolve(Promise.resolve(x)))
  ).then(console.log);
}

// fifteen (3);

function sixteen() {
  Promise.resolve(1)
    .then((x) => {
      console.log(x);
      return x + 1; 
    })
    .then((x) => { //2
      console.log(x); //2
      throw x + 1;//3
    })
    .catch((x) => { //3
      console.log(x);
      return x + 1;//4
    })
    .then((x) => {//4
      console.log(x);
      return Promise.resolve(x + 1);//5
    })
    .then((x) => {
      console.log(x);
      return Promise.reject(x + 1);//6
    })
    .catch((x) => {
      console.log(x);
    });
}

// sixteen();

async function seventeen() {
  return await Promise.resolve(1);
}
// seventeen().then ((y)=>{
//     console.log(y);
// });

async function eighteen(x) {
  return await Promise.reject(2);
}

// eighteen().catch ((y)=> {
//     console.log(y);
// })

async function nineteen() {
  try {
    throw 1;
  } catch (e) {
    return 2;
  }
}

// nineteen ().then ((y)=> {
//     console.log(y);
// });

async function twenty(x) {
  try {
    throw 1;
  } catch (e) {
    throw 2;
  }
}

// twenty ().catch ((y)=>{
//     console.log(y)
// })

async function twentyone(x) {
  try {
    const response = await fetch("http://127.0.0.1:5500/"); //codul de la pagina mea de pe live-codul sursa
    const html = response.text();
    return html;
  } catch (e) {
    return e;
  }
}
// twentyone().then ((y)=>{
//     console.log(y)
// });

async function twentytwo(x) {
  return await twentyone()
    .then((x) => x.slice(0, 15)) //imi ia primele 15 elemente din codul meu sursa ex:<html lang=..
    .then(console.log);
}

// twentytwo()


// __________________________________de ce nu fucntioneaza incrementarea aia !?
function twentythree(x) {
  let b = 0;
  return new Promise((resolve, reject) => {
    resolve(b++);
  });
}
// let p = twentythree();
//  p.then ((y)=>{
//     console.log (y);
// })
// p.then ((y)=>{
//     console.log (y);
// })
//__________________________________________


function twentyfour() {
  const x = twentythree();
  x.then(console.log);
  x.then(console.log);
}
twentyfour();
