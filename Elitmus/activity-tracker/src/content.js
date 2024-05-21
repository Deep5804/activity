let startTime = new Date().getTime();

window.addEventListener('beforeunload', () => {
    let endTime = new Date().getTime();
    let duration = endTime - startTime;

    // Send duration data to backend
    fetch('https://your-backend-api.com/activities', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            url: window.location.href,
            duration: duration
        })
    });
});
