
// new Promise((resolve,reject)=>{
    // async task
    // resolve(result) -> if successful
    // reject(result)  -> if failed
//    });

/*
Methods:
.then()      -> success 
.catch()     -> error 
.finally()   ->Always requestAnimationFrame(after then or catch)
*/

//Example flow
// food() -> eat() ->goToSchool()




function food(){
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
    let iseaten = false;
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
/*
food();
eat();            // Avoid like this better to use nested functions
school();
*/

/*
food(()=>{
    eat(()=>{
        school();
    });
});
*/

food().then((value)=>{
    console.log(value);
    return eat();
}).then((value)=>{
    console.log(value);
    return school();
}).then((value)=>{
    console.log(value);
}).catch((value)=>{
    console.log(value);
}).finally(()=>{
    console.log("It is print always");
})






