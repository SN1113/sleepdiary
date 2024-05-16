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
    if (records.length === 0) {
        alert('No records to download.');
        return;
    }

    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Type,Time\n";
    records.forEach(record => {
        csvContent += `${record.type},${record.time}\n`;
    });

    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${username}_wakeup_bedtime_records.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
