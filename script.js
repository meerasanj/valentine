document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('response').textContent = "YIPPEEEE!";
    document.getElementById('response').style.color = "#FF69B4";
});

document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('response').textContent = "Excuse me nauuuuuuuur, try again!";
    document.getElementById('response').style.color = "#8B4513";
});
