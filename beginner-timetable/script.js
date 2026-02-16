// Load data when page starts
let myClasses = JSON.parse(localStorage.getItem('timetableData')) || [];
showTimetable();

function addClass() {
    let sub = document.getElementById('subjectInput').value;
    let day = document.getElementById('daySelect').value;
    let time = document.getElementById('timeInput').value;

    if (sub == "" || time == "") {
        alert("Please fill everything!");
        return;
    }

    let newClass = {
        subject: sub,
        day: day,
        time: time
    };

    myClasses.push(newClass);
    localStorage.setItem('timetableData', JSON.stringify(myClasses));
    
    // Clear inputs
    document.getElementById('subjectInput').value = "";
    document.getElementById('timeInput').value = "";

    showTimetable();
}

function showTimetable() {
    let tableBody = document.getElementById('timetableBody');
    tableBody.innerHTML = "";

    // Sort by time
    myClasses.sort((a, b) => a.time.localeCompare(b.time));

    // Get unique times
    let times = [];
    for (let i = 0; i < myClasses.length; i++) {
        if (!times.includes(myClasses[i].time)) {
            times.push(myClasses[i].time);
        }
    }

    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    for (let i = 0; i < times.length; i++) {
        let row = document.createElement('tr');
        
        let timeCell = document.createElement('td');
        timeCell.innerText = times[i];
        row.appendChild(timeCell);

        for (let j = 0; j < days.length; j++) {
            let cell = document.createElement('td');
            
            // Look for class at this time and day
            for (let k = 0; k < myClasses.length; k++) {
                if (myClasses[k].time == times[i] && myClasses[k].day == days[j]) {
                    cell.innerText = myClasses[k].subject;
                    cell.style.backgroundColor = "pink";
                }
            }
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
}
