async function input() {
    userName = document.getElementById("userName").value;
    password = document.getElementById("password").value;

    validate(userName, password);
}

async function validate(userName, password) {

    var flag = false;

    var response = await fetch('./login.json');
    data = await response.json();

    for (var i = 0; i < data.length; i++) {

        if (data[i].Username == userName && data[i].Password == password) {
            flag = true;
        }
    }

    if (flag) {
        window.location.replace("./applicant.html");

    } else {
        document.getElementById("errorMessage").innerHTML = "Incorrect Username or Password";
    }

}

window.history.forward();
function noBack() {
    window.history.forward();
}