document.getElementById('electiveForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('studentName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phoneNumber').value;
    const gender = document.getElementById('gender').options[document.getElementById('gender').selectedIndex].text;
    const usn = document.getElementById('usn').value;
    const dept = document.getElementById('department').options[document.getElementById('department').selectedIndex].text;
    const el1 = document.getElementById('elective1').options[document.getElementById('elective1').selectedIndex].text;
    const el2 = document.getElementById('elective2').options[document.getElementById('elective2').selectedIndex].text;

    const summaryText = `
        <strong>Submission Details:</strong><br>
        Name: ${name}<br>
        Email: ${email}<br>
        Phone: ${phone}<br>
        Gender: ${gender}<br>
        USN: ${usn}<br>
        Department: ${dept}<br>
        Selected Elective 1: ${el1}<br>
        Selected Elective 2: ${el2}
    `;
    
    document.getElementById('summary').innerHTML = summaryText;
    document.getElementById('result').classList.remove('hidden');

    document.getElementById('electiveForm').reset();
});
