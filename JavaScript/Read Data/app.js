// Initialize Firebase
var config = {
    apiKey: "AIzaSyBnSrCl0UvzIq1yrDMJ3zsHyLKkuQ_nPvA",
    authDomain: "asdfadsf-a56e7.firebaseapp.com",
    databaseURL: "https://asdfadsf-a56e7.firebaseio.com",
    projectId: "asdfadsf-a56e7",
    storageBucket: "asdfadsf-a56e7.appspot.com",
    messagingSenderId: "104313484945"
};

firebase.initializeApp(config);


const dbRef = firebase.database().ref();

const usersRef = dbRef.child('users');
const userListUI = document.getElementById("userList");

usersRef.on("child_added", snap => {

	let user = snap.val();

	let $li = document.createElement("li");
	$li.innerHTML = user.name;
	$li.setAttribute("child-key", snap.key);
	$li.addEventListener("click", userClicked)
	userListUI.append($li);

});


function userClicked(e) {

	var userID = e.target.getAttribute("child-key");

	const userRef = dbRef.child('users/' + userID);
	const userDetailUI = document.getElementById("userDetail");

	userDetailUI.innerHTML = ""

	userRef.on("child_added", snap => {


		var $p = document.createElement("p");
		$p.innerHTML = snap.key  + " - " +  snap.val()
		userDetailUI.append($p);


	});

}


