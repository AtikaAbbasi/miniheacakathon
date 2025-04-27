import{
    auth,
    signInWithEmailAndPassword,
    // sendPasswordResetEmail,
    // GoogleAuthProvider,
    // signInWithPopup,
    // signOut,
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




// FORGOT PASSWORD  CODE //

// let forgotpasword = document.getElementById('forgot-pass')
// forgotpasword?.addEventListener('click', async () => {
// try {
  
//   let email = document.getElementById("email").value;
//   sendPasswordResetEmail(auth , email)

//   alert('Password reset email sent!')
// } catch (error) {
//   console.log('error found in forgot password');
  
// }

// } ) 




//SIGN IN WITH GOOGLE CODE //////////////////////////////

// let googlebtn = document.getElementById('siginwithgoogle') //...BUTTON ID...//


// let  provider = new GoogleAuthProvider();
// provider.setCustomParameters({prompt : "select_account"})

// googlebtn?.addEventListener('click', async  () =>{

//     try {
//         await signOut(auth)
//         console.log('user tried into google ');
//         let res = await signInWithPopup(auth,provider)
        
//     } catch (error) {  
        
//         console.log(error, 'error in  provider code ');
        
//     } 
// } )