const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Lindsey',
        //     status: 'slacking'
        // }); // Can only pass a single argument to resolve
        reject('Something went wrong');
    }, 1500);    
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
}).catch ((error) => {
    console.log('error:', error);
});

console.log('after');