
class MultiplicatorUnitFailure extends Error{};

function primitiveMultiply(a,b){
    const prob = Math.random() * 100;
    if(prob <= 20){
        return a*b;
    }else{
        throw new MultiplicatorUnitFailure("Bitch, i failed!");
    }
}

function keepTrying(a,b){
    try{
        const resp = primitiveMultiply(a,b);
        return resp;
    }catch(e){
        if(e instanceof MultiplicatorUnitFailure){
            console.log(e.message);
            keepTrying();
        }
    }
}

//Solution
// function reliableMultiply(a, b) {
//     for (;;) {
//       try {
//         return primitiveMultiply(a, b);
//       } catch (e) {
//         if (!(e instanceof MultiplicatorUnitFailure))
//           throw e;
//       }
//     }
//   }

keepTrying(20,80);