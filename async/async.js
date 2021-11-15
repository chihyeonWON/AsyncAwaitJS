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

// 2. await 

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return 'apple';
}

async function getBanana() {
    await delay(1000);
    return 'banana';
}

async function pickFruits() {
    const applePromise = await getApple();
    const bananaPromise = await getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits()
    .then(console.log);