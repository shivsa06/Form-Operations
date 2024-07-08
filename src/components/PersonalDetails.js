import React, { useRef } from 'react'
import Navigation from './Navigation'

function PersonalDetails() {

    let nameRef = useRef();
    let emailRef = useRef();
    let mobilRef = useRef();
    let dobRef = useRef();
    let passwordRef = useRef();
    let stateRef = useRef();
    let genderRef = useRef();
    let hindiRef = useRef();
    let englishRef = useRef();
    let detailsRef = useRef();

    let nameResultRef = useRef();
    let emailResultRef = useRef();
    let mobileResultRef = useRef();
    let dobResultRef = useRef();
    let passwordResultRef = useRef();
    let stateResultRef = useRef();

    let onFocusInput = (inputFocus, bgColor = "powderblue", txtcolor = "white") => {
        inputFocus.current.style.backgroundColor = bgColor;
        inputFocus.current.style.color = txtcolor;
    }

    let onBlurInput = (inputBlur, txtcolor = "white") => {
        inputBlur.current.style.backgroundColor = "black";
        inputBlur.current.style.color = txtcolor;
    }

    let validateName = (name) => {
        let nameRegEx = /^[a-zA-Z ]{2,30}$/;
        let result = nameRegEx.test(name);
        return result;
    }

    let validateEmail = (email) => {
        let emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let result = emailRegEx.test(email);
        return result
    }

    let validateMobileNo = (mobileNo) => {
        let mobileNoRegEx = /^\d{10}$/;
        let result = mobileNoRegEx.test(mobileNo);
        return result;
    }

    let validateDOB = (dob) => {
        let dobRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/(19|20)\d{2}$/;
        let result = dobRegex.test(dob);
        return result;
    }

    let validatePassword = (password) => {
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,]).{8,}$/;
        let result = passwordRegex.test(password);
        return result;
    }

    let details = () => {
        let name = nameRef.current.value;
        let email = emailRef.current.value;
        let mobileNo = mobilRef.current.value;
        let dob = dobRef.current.value;
        
        detailsRef.current.style.backgroundColor = "green";
        detailsRef.current.style.color = "white";
        detailsRef.current.innerHTML = `Name - ${name}, Email - ${email}, Mobile No - ${mobileNo}, Date of Birth - ${dob}`;
    }

  return (
    <div className='App'>
        <Navigation></Navigation>
        <form>  
            <div>
                <div>
                    <label>Name</label>
                    <input ref={nameRef} type='text' placeholder='Enter Your Name' 
                    onFocus={() => {onFocusInput(nameRef, "burlywood", "black")}}
                    onBlur={() => {onBlurInput(nameRef)}}
                    onChange={() => {
                        let result = validateName(nameRef.current.value);
                        if (result === true){
                            nameResultRef.current.innerHTML = "Valid";
                            nameResultRef.current.style.backgroundColor = "green";
                            nameResultRef.current.style.color = "white"
                        }
                        else{
                            nameResultRef.current.innerHTML = "Invalid";
                            nameResultRef.current.style.backgroundColor = "red";
                            nameResultRef.current.style.color = "white";
                        }
                        }}></input>
                    <span ref={nameResultRef}></span>
                </div>
                <div>
                    <label>Email</label>
                    <input ref={emailRef} type='email' placeholder='Enter Your Email Address' 
                    onFocus={() => {onFocusInput(emailRef, "burlywood", "black")}}
                    onBlur={() => {onBlurInput(emailRef)}}
                    onChange={() => {
                        let result = validateEmail(emailRef.current.value);
                        if (result === true){
                            emailResultRef.current.innerHTML = "Valid";
                            emailResultRef.current.style.backgroundColor = "green";
                            emailResultRef.current.style.color = "white";
                        }
                        else{
                            emailResultRef.current.innerHTML = "Invalid";
                            emailResultRef.current.style.backgroundColor = "red";
                            emailResultRef.current.style.color = "white";
                        }
                        }}></input>
                    <span ref={emailResultRef}></span>
                </div>
                <div>
                    <label>Mobile</label>
                    <input ref={mobilRef} type='number' placeholder='Enter Your Mobile Number' 
                    onFocus={() => {onFocusInput(mobilRef, "burlywood", "black")}}
                    onBlur={() => {onBlurInput(mobilRef)}}
                    onChange={() => {
                        let result = validateMobileNo(mobilRef.current.value);
                        if (result === true){
                            mobileResultRef.current.innerHTML = "Valid";
                            mobileResultRef.current.style.backgroundColor = "green";
                            mobileResultRef.current.style.color = "white";
                        }
                        else{
                            mobileResultRef.current.innerHTML = "Invalid";
                            mobileResultRef.current.style.backgroundColor = "red";
                            mobileResultRef.current.style.color = "white";
                        }
                        }}></input>
                    <span ref={mobileResultRef}></span>
                </div>
                <div>
                    <label>DOB</label>
                    <input ref={dobRef} type='text' placeholder='Enter Your Date of Birth' 
                    onFocus={() => {onFocusInput(dobRef, "burlywood", "black")}}
                    onBlur={() => {onBlurInput(dobRef)}}
                    onChange={() => {
                        let result = validateDOB(dobRef.current.value);
                        if (result === true){
                            dobResultRef.current.innerHTML = "Valid";
                            dobResultRef.current.style.backgroundColor = "green";
                            dobResultRef.current.style.color = "white";
                        }
                        else{
                            dobResultRef.current.innerHTML = "Invalid";
                            dobResultRef.current.style.backgroundColor = "red";
                            dobResultRef.current.style.color = "white";
                        }
                        }}></input>
                    <span ref={dobResultRef}></span>
                </div>
                <div>
                    <label>Password</label>
                    <input ref={passwordRef} type='password' placeholder='Enter Password' 
                    onFocus={() => {onFocusInput(passwordRef, "burlywood", "black")}}
                    onBlur={() => {onBlurInput(passwordRef)}}
                    onChange={() => {
                        let  result = validatePassword(passwordRef.current.value);
                        if (result === true){
                            passwordResultRef.current.innerHTML = "Valid";
                            passwordResultRef.current.style.backgroundColor = "green";
                            passwordResultRef.current.style.color = "white";
                        }
                        else{
                            passwordResultRef.current.innerHTML = "Invalid";
                            passwordResultRef.current.style.backgroundColor = "red";
                            passwordResultRef.current.style.color = "white";
                        }
                        }}></input>
                    <span ref={passwordResultRef}></span>
                </div>
                <div>
                    <label>State</label>
                    <select ref={stateRef} name='state'
                    onFocus={() => {onFocusInput(passwordRef, "burlywood", "black")}}
                    onBlur={() => {onBlurInput(passwordRef)}}>
                        <option>==Select State==</option>
                        <option>Andaman Nikobar</option>
                        <option>Andhra Pradesh</option>
                        <option>Delhi</option>
                        <option>Uttar Pradesh</option>
                        <option>Uttarakhan</option>
                        <option>Telangana</option>
                        <option>Tamilnadu</option>
                    </select>
                    <span ref={stateResultRef}></span>
                </div>
                <div>
                    <label>Gender</label>
                    <input ref={genderRef} type='radio' id='male' name='gender'></input>
                    <label htmlFor='male'>Male</label>
                    <input ref={genderRef} type='radio' id='female' name='gender'></input>
                    <label htmlFor='female'>Female</label>
                    <span></span>
                </div>
                <div>
                    <label>Language</label>
                    <input ref={hindiRef} type='checkbox' id='hindi'></input>
                    <label htmlFor='hindi'>Hindi</label>
                    <input ref={englishRef} type='checkbox' id='english'></input>
                    <label htmlFor='english'>English</label>
                    <span></span>
                </div>
                <div>
                    <button type='button' onClick={() => {details();}}>Submit</button>
                </div>
                <div>
                    <p ref={detailsRef}></p>
                </div>
            </div>
        </form>
    </div>
  )
}

export default PersonalDetails