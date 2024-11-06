import React from 'react'
import Lottie from 'lottie-react'
import './Register.css'
import Avatar from '../../assets/addAvatar.png'
import Animation from '../../assets/Animation.json'
import {auth, storage, db} from '../../firebase'
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 

function Register(){
    const [err, setErr] = useState(false)
    const handleSubmit = async(e)=>{
        e.preventDefault()
        // console.log(e.target[0].value)
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try{
            const response = await createUserWithEmailAndPassword(auth, email, password)
           
            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on('state_changed', 
            null,
             
            (error) => {
                // Handle unsuccessful uploads
                console.error("Upload error:", error);
                setErr(true);
            }, 
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
                    await updateProfile(response.user, {
                        displayName,
                        photoURL: downloadURL,
                        
                    });
                    await setDoc(doc(db, "users", response.user.uid),{
                        uid: response.user.uid,
                        displayName,
                        email,
                        photoURL: downloadURL, 
                    });
                });
            }
            );
            
        }
        catch(err){
            console.error("Error in registration:", err);
            setErr(true);
        }
           
    }

    return(
        <div className='formContainer'>
            <div className='box'>
                <Lottie animationData={Animation} loop={true} className='animation'/>
                <div className="formWrapper">
                    <span className="logo">Messenger</span>
                    <span className="title">Register</span>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Display name'/>
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='Password' />
                        <input type="file" id='file' style={{display:"none"}}/>
                        <div className='fileUpload'>
                            <label htmlFor="file"><img src={Avatar} alt="Add Avatar" id="avatar"/></label>
                            <p>Add Avatar</p>
                        </div>
                        
                        <button className='signup'>Sign Up</button>
                        {err && <span>Something went wrong!</span>}
                    </form>
                    <p>You do have an account? <span>Login</span></p>
                </div>
            </div>
        </div>
    )
}

export default Register