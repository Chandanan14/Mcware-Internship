let currentStep = 1;
const totalSteps = 5;

function showStep(step) {
    for (let i = 1; i <= totalSteps; i++) {
        document.getElementById(`step-${i}`).style.display = (i === step) ? 'block' : 'none';
    }
}

// Next/Previous buttons
document.getElementById('next-1').addEventListener('click', () => { currentStep++; showStep(currentStep); });
document.getElementById('prev-2').addEventListener('click', () => { currentStep--; showStep(currentStep); });
document.getElementById('next-2').addEventListener('click', () => { currentStep++; showStep(currentStep); });
document.getElementById('prev-3').addEventListener('click', () => { currentStep--; showStep(currentStep); });
document.getElementById('next-3').addEventListener('click', () => { currentStep++; showStep(currentStep); });
document.getElementById('prev-4').addEventListener('click', () => { currentStep--; showStep(currentStep); });
document.getElementById('next-4').addEventListener('click', () => { currentStep++; showStep(currentStep); });
document.getElementById('prev-5').addEventListener('click', () => { currentStep--; showStep(currentStep); });

// Generate Resume
document.getElementById('resume-form').addEventListener('submit', function(e){
    e.preventDefault();

    // Personal Info
    document.getElementById('rname').textContent = document.getElementById('name').value;
    document.getElementById('r-email').textContent = document.getElementById('email').value;
    document.getElementById('r-phone').textContent = document.getElementById('phone').value;
    document.getElementById('r-address').textContent = document.getElementById('address').value;

    const pfpInput = document.getElementById('pfp');
    const rPfp = document.getElementById('r-pfp');
    if(pfpInput.files[0]){
        rPfp.src = URL.createObjectURL(pfpInput.files[0]);
    }

    // Education
    document.getElementById('r-degree').textContent = document.getElementById('degree').value;
    document.getElementById('r-school').textContent = document.getElementById('school').value;
    document.getElementById('r-yog').textContent = document.getElementById('yog').value;
    document.getElementById('r-gpa').textContent = document.getElementById('gpa').value;

    // Work Experience
    document.getElementById('r-jtitle').textContent = document.getElementById('j-title').value;
    document.getElementById('r-cname').textContent = document.getElementById('c-name').value;
    document.getElementById('r-duration').textContent = document.getElementById('duration').value;
    document.getElementById('r-cdesc').textContent = document.getElementById('c-desc').value;

    // Skills
    document.getElementById('r-tskills').textContent = document.getElementById('t-skills').value;

    let languages = [];
    if(document.getElementById('eng').checked) languages.push("English");
    if(document.getElementById('kan').checked) languages.push("Kannada");
    if(document.getElementById('hin').checked) languages.push("Hindi");
    document.getElementById('r-lang').textContent = languages.join(", ");

    document.getElementById('r-cert').textContent = document.getElementById('cert').value;

    // Projects
    document.getElementById('r-ptitle').textContent = document.getElementById('p-title').value;
    document.getElementById('r-pdesc').textContent = document.getElementById('p-desc').value;
    document.getElementById('r-tech').textContent = document.getElementById('tech').value;

    alert("Resume generated! Sucessfulluy!!");
});
