// Async/Await - Async = makes a function returns a promise
//             - Await = makes an async function wait for a promise

// Allows you write asynchronous code in a synchronous manner.
// Async doesn't have resolve or project parameters 
// Everything after Await is placed in an event queue



function foodPrepared(){
    let isPrepared = true;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isPrepared){
                resolve("Food is prepared")
            }
            else{
                reject("Food is not prepared")
            }
        
        },4000 
        );
    });
    
}

function eat(){
    let iseaten = true;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(iseaten){
            resolve("eating done")
        }
        else{
            reject("eating not done")
        }
    },3000
     ); 
    });
}

function school(){
    let isSchool = true;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isSchool){
                resolve("Go to school")
            }
            else{
                reject("School is closed Today!")
            }
    },2000);
    });
}




    async function asyncAwait(){
try{
    const food = await foodPrepared();
    const eating = await eat();
    const goto = await school();
    console.log(food);
    console.log(eating);
    console.log(goto);
}

catch(error){
    console.log(error);
}
    }

asyncAwait();






