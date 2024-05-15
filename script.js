let records = [];

document.getElementById('wakeupButton').addEventListener('click', () => {
    let now = new Date();
    records.push({type: 'Wakeup', time: now.toLocaleString()});
    alert('Wakeup time recorded: ' + now.toLocaleString());
});

document.getElementById('bedtimeButton').addEventListener('click', () => {
    let now = new Date();
    records.push({type: 'Bedtime', time: now.toLocaleString()});
    alert('Bedtime time recorded: ' + now.toLocaleString());
});

document.getElementById('downloadCSV').addEventListener('click', () => {
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
    link.setAttribute("download", "wakeup_bedtime_records.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
