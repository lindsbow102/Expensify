const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Lindsey',
            status: 'slacking'
        }); // Can only pass a single argument to resolve
        //reject('Something went wrong');
    }, 1500);    
});

console.log('before');

// promise.then((data) => {
//     console.log('1', data);
//     return 'some data';
// }).then((str) => {
//     console.log('does this run?', str);
// }).catch ((error) => {
//     console.log('error:', error);
// });

promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise'); // Can only pass a single argument to resolve
            //reject('Something went wrong');
        }, 5000);    
    });
}).then((str) => {
    console.log('does this run?', str);
}).catch ((error) => {
    console.log('error:', error);
});

console.log('after');