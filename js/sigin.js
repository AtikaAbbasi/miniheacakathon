

import {
    auth,
    createUserWithEmailAndPassword,
    // sendEmailVerification,
 
   
  } from '../config.js';
  

 


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
  