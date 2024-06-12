document.getElementById('factButton').addEventListener('click', generateFact);

function generateFact() {
    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        .then(response => response.json())
        .then(data => {
            document.getElementById('fact').innerText = data.text;
        })
        .catch(error => {
            document.getElementById('fact').innerText = 'Oops! Something went wrong. Please try again.';
            console.error('Error fetching fact:', error);
        });
}
