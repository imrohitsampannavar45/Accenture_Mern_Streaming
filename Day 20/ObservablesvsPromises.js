let Rx = require("rxjs");
const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("dog");
        resolve("cat");
        resolve("bird");
    }, 100);
});

myPromise.then((result) => {
    console.log("promise: ", result); //dog
});
//cant cancel a promise
//cant sent more than one time resolve for the same promise obj
//once you use the promise, you will get the data
//control over the promise obj
const myObservable = new Rx.Observable((observer) => {
    setTimeout(() => {
        observer.next("dog");
        observer.next("cat");
        observer.next("bird");
    }, 100);
});
myObservable.subscribe((result) => {
    console.log("observable: ", result);
});

const subscription = myObservable
    //.filter(result=>result==='bird)
    .subscribe((result) => {
        console.log("observable: ", result);
    });

subscription.unsubscribe();
//unsubscribe obervable object
//allowed to execute multiple times
//you will get the data only when you subscribe
//control over the observable object
