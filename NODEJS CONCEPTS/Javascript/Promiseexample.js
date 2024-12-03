let statusofSeat = new Promise((resolve, reject) => {
    let score = 10;

    let cutoffs = 40;

    if (score > cutoffs) {
        resolve("Engg seat is available ")
    } else {
        reject("You are on the waiting list ")
    }
})

module.exports = statusofSeat;