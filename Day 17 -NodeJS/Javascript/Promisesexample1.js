// Step 1: Create a function that returns a promise to simulate fetching user data
function fetchUserData() {
    return new Promise((resolve, reject) => {
        // Simulate a delay to mimic an asynchronous operation
        setTimeout(() => {
            // Simulate a successful fetch operation
            const success = true;
            if (success) {
                // Simulated user data
                const userData = {
                    name: 'John Doe',
                    age: 30
                };
                resolve(userData);
            } else {
                reject('Failed to fetch user data');
            }
        }, 2000); // 2-second delay
    });
}
// Step 2: Process the fetched data to extract the required information
function displayUserData() {
    fetchUserData()
        .then(data => {
            const userName = data.name;
            const userAge = data.age;
            console.log(`User Name: ${userName}`);
            console.log(`User Age: ${userAge}`);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
// Step 3: Call the function to display user data
displayUserData();
