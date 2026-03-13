// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { 
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged,
updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// Your Firebase config
const firebaseConfig = {
apiKey: "AIzaSyAvN_dDlBgxxJBwL30GZQgYDQdSvtcU6Tc",
authDomain: "community-site-c7de2.firebaseapp.com",
projectId: "community-site-c7de2",
storageBucket: "community-site-c7de2.firebasestorage.app",
messagingSenderId: "688996482373",
appId: "1:688996482373:web:d44d9689688e22c233122c"
};


// Start Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// SIGN UP
window.signUp = function(){

const email = document.getElementById("signupEmail").value
const password = document.getElementById("signupPassword").value
const username = document.getElementById("signupUsername").value
const photo = document.getElementById("signupPhoto").value

createUserWithEmailAndPassword(auth, email, password)
.then((userCredential)=>{

updateProfile(userCredential.user,{
displayName: username,
photoURL: photo
})

alert("Account created!")

})
.catch((error)=>{
alert(error.message)
})

}


// SIGN IN
window.logIn = function(){

const email = document.getElementById("loginEmail").value
const password = document.getElementById("loginPassword").value

signInWithEmailAndPassword(auth,email,password)
.then(()=>{
alert("Logged in!")
})
.catch((error)=>{
alert(error.message)
})

}


// SIGN OUT
window.logOut = function(){

signOut(auth)

}


// SHOW USER INFO
onAuthStateChanged(auth,(user)=>{

if(user){

document.getElementById("userInfo").innerHTML =
"Username: "+user.displayName+
"<br>Email: "+user.email+
"<br><img src='"+user.photoURL+"' width='100'>"

}else{

document.getElementById("userInfo").innerText = "Not logged in"

}

})