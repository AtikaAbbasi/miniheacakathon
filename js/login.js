import{
    auth,
    signInWithEmailAndPassword
    ,GoogleAuthProvider,
    signInWithPopup,
    signOut,
   
}from '../config.js'



/////// LOGIN USER SIGIN WITH EMAIL AND PASSWORD:////////////////////////////

const logIn = document.getElementById("login"); //FORM ID

logIn?.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
     let userRef =  await signInWithEmailAndPassword(auth, email, password)
     let user = userRef?.user
     console.log(user);
     


     if (user) {
        window.location.replace("/html/todo.html")
    }
  } catch (error) {
    console.log(error); 
  }

});





let loginwithGoogle = document.getElementById('google')


let provider = new  GoogleAuthProvider()
provider.setCustomParameters({prompt : "select_account"})

loginwithGoogle.addEventListener("click" , async () =>{

try {
    
    await signOut(auth)
console.log('user tired to sign In');
let result = await signInWithPopup(auth,provider)


} catch (error) {
    console.log(error ,'mila hai');
    
}


})



