// async & await
// clear style of using promise :)

// 1. async 

async function fetchUser() {
    // do network request in 10 secs ...
    return 'ellie';
}

/* function fetchUser() {
    // do network request in 10 secs....   
    return new Promise((resolve, reject) => {
        resolve('ellie');
}); */

const user = fetchUser();
user
    .then(console.log);
console.log(user);