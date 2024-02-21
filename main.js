document.getElementById('mainContainer').innerHTML = `
    <h1>Welcome to GloBud</h1>
    <p>Explore the beauty of nature with GloBud. Our innovative device brings vibrant gardens to your home.</p>
    <img src="garden.jpg" alt="Vibrant Garden">
    <button id="getStartedBtn">Get Started</button>
`;
document.getElementById('getStartedBtn').addEventListener('click', function () {
    this.innerHTML = 'Loading...';
    fetchData();
});

async function fetchData() {
    try {
        const response = await fetch(''); 
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API Response:', data);
        document.getElementById('getStartedBtn').innerHTML = 'API Request Complete';
    } catch (error) {
        console.error('Error during API request:', error);
        document.getElementById('getStartedBtn').innerHTML = 'Error Occurred';
    }
}
