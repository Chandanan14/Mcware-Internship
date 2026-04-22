let btn = document.getElementById("btn");
btn.addEventListener('click', function(event){
    event.preventDefault();

    // Personal Info
    document.getElementById('rname').textContent = document.getElementById('name').value;
    document.getElementById('r-email').textContent = document.getElementById('email').value;
    document.getElementById('r-phone').textContent = document.getElementById('phone').value;
    document.getElementById('r-address').textContent = document.getElementById('address').value;

    // Profile Picture (show PFP)
    let pfpFile = document.getElementById('pfp').files[0];
let rpfp = document.getElementById('r-pfp');

if (pfpFile) {
    rpfp.src = URL.createObjectURL(pfpFile); // show the image
} else {
    rpfp.src = ''; // clear if no file selected
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
    document.getElementById('r-cert').textContent = document.getElementById('cert').value;

    // Languages (checkboxes)
    let langs = [];
    if(document.getElementById('eng').checked) langs.push('English');
    if(document.getElementById('kan').checked) langs.push('Kannada');
    if(document.getElementById('hin').checked) langs.push('Hindi');
    document.getElementById('r-lang').textContent = langs.join(', ');

    // Projects
    document.getElementById('r-ptitle').textContent = document.getElementById('p-title').value;
    document.getElementById('r-pdesc').textContent = document.getElementById('p-desc').value;
    document.getElementById('r-tech').textContent = document.getElementById('tech').value;
});
