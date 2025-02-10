// When clicking on the "Read More" link, hide the fake news and show the Valentine content
document.getElementById('readMoreLink').addEventListener('click', function() {
    // Hide the fake news content
    document.getElementById('fakeNewsContent').style.display = 'none';
    // Show the Valentine content
    document.getElementById('valentineContent').style.display = 'block';
});

// Logic for the Yes and No buttons on the Valentine content
document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('response').textContent = "YIPPEEEE!";
    document.getElementById('response').style.color = "#FF69B4";
});

document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('response').textContent = "Excuse me nauuuuuuuur, try again!";
    document.getElementById('response').style.color = "#8B4513";
});
