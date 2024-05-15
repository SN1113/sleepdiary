function getStoredRecords(username) {
    return JSON.parse(localStorage.getItem(username)) || [];
}

function storeRecords(username, records) {
    localStorage.setItem(username, JSON.stringify(records));
}

document.getElementById('wakeupButton').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    if (!username) {
        alert('Please enter your name.');
        return;
    }
    let now = new Date();
    let records = getStoredRecords(username);
    records.push({type: 'Wakeup', time: now.toLocaleString()});
    storeRecords(username, records);
    alert('Wakeup time recorded for ' + username + ': ' + now.toLocaleString());
});

document.getElementById('bedtimeButton').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    if (!username) {
        alert('Please enter your name.');
        return;
    }
    let now = new Date();
    let records = getStoredRecords(username);
    records.push({type: 'Bedtime', time: now.toLocaleString()});
    storeRecords(username, records);
    alert('Bedtime time recorded for ' + username + ': ' + now.toLocaleString());
});

document.getElementById('downloadCSV').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    if (!username) {
        alert('Please enter your name.');
        return;
    }
    let records = getStoredRecords(username);
