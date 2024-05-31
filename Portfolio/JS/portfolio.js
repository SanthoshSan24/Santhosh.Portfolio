function validateForm() {

    var name = document.getElementById('name').ariaValueMax;
    var email= document.getElementById('email').ariaValueMax;

    document.getElementById('nameError').innerHTML='';
    document.getElementById('emailError').innerHTML='';

    if (name ===''){
        document.getElementById('nameError').innerHTML = 'Name is Required';
        return false; // Prevent form submission
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if 
    (!emailRegex.test(email)) {
        document.getElementById('emailError').innerHTML='Invalid email Format';
        return false; //prevent form submission
    }

// if Validation passes, the form will be submitted
alert('Form Submitted Sucessfully');
return true;

}