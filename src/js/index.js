
function test(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

// Using the fetch function to make a GET request
    fetch(apiUrl)
    .then(response => {
        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Parse the response JSON
        return response.json();
    })
    .then(data => {
        // Handle the data received from the API
        console.log('API Response:', data);
    })
    .catch(error => {
        // Handle errors
        console.error('Error:', error);
    });
    // window.location.href = 'test.html'
}