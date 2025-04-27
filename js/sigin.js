

import {
    auth,
    createUserWithEmailAndPassword,
    // sendEmailVerification,
 
   
  } from '../config.js';
  
//   // ==== SIGN UP CODE ====
  
//   const signupForm = document?.getElementById("sign-up"); // Form ka ID
  
//   signupForm?.addEventListener("submit", async (e) => {
//     e.preventDefault(); // Page refresh rokta hai
//     console.log("Signup Form Submitted");
  
//     const email = document.getElementById("email");
//     const password = document.getElementById("password");
//     const username = document.getElementById("name");
  
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
//       const user = userCredential.user;
//       console.log("User Created:", user);
//       console.log("Username:", username.value);
  
//       // Send Email Verification
//     //   await sendEmailVerification(user);
//       alert('Verification Email Sent! Please verify your email.');
  
//       // Page redirect after signup
//       window.location.href = "/html/todo.html";
  
//     } catch (error) {
//       console.error("Signup Error:", error.message);
//       alert(error.message);
//     }
//   });
 


const register = async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
  
    try {
      let userCredintial = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
  
      let user = userCredintial?.user;
  
    //   await setDoc(doc(db, "users", user.uid), {   ///// create user in db
    //     name,
    //     age,
    //     contact,
    //     email,
    //     isActive:true,
    //     timestamp:serverTimestamp()
    //   });
  
    //   window.location.replace("/" );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  // let signupForm = document.getElementById("signup-form")
  // if(signupForm){
  
  //    document.getElementById("signup-form").addEventListener("submit", register);
  // }
  
  document.getElementById("test")?.addEventListener("click", register);
  