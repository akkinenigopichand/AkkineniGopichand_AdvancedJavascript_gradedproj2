var presentApplicantNumber;
var searchInput;
var objLength;
var arrayForSearch;
var i, j;
var searchedLocation;



async function initilization() {

    presentApplicantNumber = 0;
    searchInput = "";

    var response = await fetch('./Data.json');
    data = await response.json();

    objLength = data.resume.length;

    arrayForSearch = [];

    displayFunc(0);
};


async function displayFunc(sNo) {


    var response = await fetch('./Data.json');
    data = await response.json();


    document.getElementById("name").innerHTML = data.resume[sNo].basics.name;
    document.getElementById("appliedFor").innerHTML = data.resume[sNo].basics.AppliedFor;

    document.getElementById("phoneNo").innerHTML = data.resume[sNo].basics.phone;
    document.getElementById("emailId").innerHTML = data.resume[sNo].basics.email;

    let linkedInText = data.resume[sNo].basics.profiles.network;
    let linkedinHtml = linkedInText.link(data.resume[sNo].basics.profiles.url);
    document.getElementById("linkedin").innerHTML = linkedinHtml;
    document.getElementById("techSkills").innerHTML = data.resume[sNo].skills.keywords;
    document.getElementById("hobbies").innerHTML = data.resume[sNo].interests.hobbies;


    document.getElementById("companyName").innerHTML = data.resume[sNo].work['Company Name'];
    document.getElementById("position").innerHTML = data.resume[sNo].work.Position;
    document.getElementById("startDate").innerHTML = data.resume[sNo].work['Start Date'];
    document.getElementById("endDate").innerHTML = data.resume[sNo].work['End Date'];
    document.getElementById("summary").innerHTML = data.resume[sNo].work.Summary;
    document.getElementById("projectName").innerHTML = data.resume[sNo].projects.name;
    document.getElementById("projectDescription").innerHTML = data.resume[sNo].projects.description;

    document.getElementById("ugEducation").innerHTML = data.resume[sNo].education.UG.institute + " , " + data.resume[sNo].education.UG.course + " , " + data.resume[sNo].education.UG['Start Date'] + " , " + data.resume[sNo].education.UG['End Date'] + " , " + data.resume[sNo].education.UG.cgpa;

    document.getElementById("puEducation").innerHTML = data.resume[sNo].education['Senior Secondary'].institute + " , " + data.resume[sNo].education['Senior Secondary'].cgpa;

    document.getElementById("hsEducation").innerHTML = data.resume[sNo].education['High School'].institute + " , " + data.resume[sNo].education['High School'].cgpa;

    document.getElementById("internshipCompanyName").innerHTML = data.resume[sNo].Internship["Company Name"];
    document.getElementById("internshipPosition").innerHTML = data.resume[sNo].Internship.Position;
    document.getElementById("internshipStartDate").innerHTML = data.resume[sNo].Internship["Start Date"];
    document.getElementById("internshipEndDate").innerHTML = data.resume[sNo].Internship["End Date"];
    document.getElementById("internshipSummary").innerHTML = data.resume[sNo].Internship.Summary;

    document.getElementById("achievements").innerHTML = data.resume[sNo].achievements.Summary;


    document.getElementById("address").innerHTML = data.resume[sNo].basics.location.address + " - " + data.resume[sNo].basics.location.postalCode + " , " + data.resume[sNo].basics.location.city + " , " + data.resume[sNo].basics.location.state;

    refreshTheButtons();

}


async function previous() {
    if (searchInput !== "") {
        searchedLocation = searchedLocation - 1;


        displayFunc(arrayForSearch[searchedLocation]);

    } else {

        presentApplicantNumber = presentApplicantNumber - 1;
        displayFunc(presentApplicantNumber);
    }

}

async function next() {
    if (searchInput !== "") {
        searchedLocation = searchedLocation + 1;


        displayFunc(arrayForSearch[searchedLocation]);

    } else {

        presentApplicantNumber = presentApplicantNumber + 1;
        displayFunc(presentApplicantNumber);
    }

}

async function searchUpdate() {
    searchInput = document.getElementById('searchBoxText').value;

    arrayForSearch = [];
    if (searchInput !== "") {
        displayAfterSearch(searchInput);
    }
    else {

        initilization();
    }
}

async function displayAfterSearch(sI) {
    var response = await fetch('./Data.json');
    data = await response.json();
    j = 0;

    for (i = 0; i < objLength; i++) {
        if (data.resume[i].basics.AppliedFor.toLowerCase() == sI.toLowerCase()) {
            arrayForSearch[j] = i;
            j = j + 1;
        }
    }
    searchedLocation = 0;

    if (arrayForSearch.length == 0) {

        noRecordsToShow();
    } else {
        displayFunc(arrayForSearch[searchedLocation]);
    }

}



async function refreshTheButtons() {


    if (searchInput !== "") {
        if (searchedLocation == (arrayForSearch.length - 1) || arrayForSearch.length == 0) {
            document.getElementById("nextButton").style.visibility = "hidden";
        }
        else {
            document.getElementById("nextButton").style.visibility = "visible";
        }



        if (searchedLocation == 0) {
            document.getElementById("previousButton").style.visibility = "hidden";
        }
        else {
            document.getElementById("previousButton").style.visibility = "visible";
        }


    } else {
        if (presentApplicantNumber == (objLength - 1)) {
            document.getElementById("nextButton").style.visibility = "hidden";
        }
        else {
            document.getElementById("nextButton").style.visibility = "visible";
        }


        if (presentApplicantNumber == 0) {
            document.getElementById("previousButton").style.visibility = "hidden";
        }
        else {
            document.getElementById("previousButton").style.visibility = "visible";
        }
    }

}


async function noRecordsToShow() {


    document.getElementById("name").innerHTML = "No records to show";
    document.getElementById("appliedFor").innerHTML = "No records to show";

    document.getElementById("phoneNo").innerHTML = "No records to show";
    document.getElementById("emailId").innerHTML = "No records to show";


    document.getElementById("linkedin").innerHTML = "No records to show";
    document.getElementById("techSkills").innerHTML = "No records to show";
    document.getElementById("hobbies").innerHTML = "No records to show";


    document.getElementById("companyName").innerHTML = "No records to show";
    document.getElementById("position").innerHTML = "No records to show";
    document.getElementById("startDate").innerHTML = "No records to show";
    document.getElementById("endDate").innerHTML = "No records to show";
    document.getElementById("summary").innerHTML = "No records to show";
    document.getElementById("projectName").innerHTML = "No records to show";
    document.getElementById("projectDescription").innerHTML = "No records to show";

    document.getElementById("ugEducation").innerHTML = "No records to show";
    document.getElementById("puEducation").innerHTML = "No records to show";
    document.getElementById("hsEducation").innerHTML = "No records to show";

    document.getElementById("internshipCompanyName").innerHTML = "No records to show";
    document.getElementById("internshipPosition").innerHTML = "No records to show";
    document.getElementById("internshipStartDate").innerHTML = "No records to show";
    document.getElementById("internshipEndDate").innerHTML = "No records to show";
    document.getElementById("internshipSummary").innerHTML = "No records to show";

    document.getElementById("achievements").innerHTML = "No records to show";

    refreshTheButtons();
}



window.onload = codeAddress;
function codeAddress() {
    initilization();
}
