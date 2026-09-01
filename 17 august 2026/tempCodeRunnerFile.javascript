const promise1 = new Promise((resolve, reject) => {
    const success = false;

    if (success) {
        resolve({
            id: 1234,
            username: "Arqam"
        });
    } else {
        reject(new Error("Data not fetched"));
    }
});

const promise2 = new Promise((resolve, reject) => {
    const success = false;

    if (success) {
        resolve({
            id: 1234,
            orderLocation: "New Delhi"
        });
    } else {
        reject(new Error("Order data not fetched"));
    }
});

// Promise.all([promise1, promise2])
//     .then((responses) => {
//         console.log(responses);
//     })
//     .catch((error) => {
//         console.log(error.message);
//     })
    

// Promise.race([promise1, promise2])
//     .then((responses) => {
//         console.log(responses);
//     })
//     .catch((error) => {
//         console.log(error.message);
//     })

    // Promise.allSettled([promise1, promise2])
    // .then((responses) => {
    //     console.log(responses);
    // })
    // .catch((error) => {
    //     console.log(error.message);
    // })


    Promise.any([promise1, promise2])
    .then((responses) => {
        console.log(responses);
    })
    .catch((error) => {
        console.log(error.message);
    })

// promise1
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error.message);
//     });