import React, { useRef } from 'react'
import Navigation from './Navigation'

function Intermidiate() {

  let nameRef = useRef();
  let hindiInterRef = useRef();
  let englishInterRef = useRef();
  let mathsInterRef = useRef();
  let physicsRef = useRef();
  let chemistryRef = useRef();

  let hindiInterResultRef = useRef();
  let englishInterResultRef = useRef();
  let mathsInterResultRef = useRef();
  let physicsResultRef = useRef();
  let chemistryResultRef = useRef();

  let resultLabelRef = useRef();

  let onChangeInput = (inputMarks, inputResult) => {
    if(inputMarks >= 35 && inputMarks <= 100){
      inputResult.current.innerHTML = "Pass";
      inputResult.current.style.backgroundColor = "green";
      inputResult.current.style.color = "white";
    }
    else if(inputMarks < 35 && inputMarks > 0){
      inputResult.current.innerHTML = "Fail";
      inputResult.current.style.backgroundColor = "red";
      inputResult.current.style.color = "white";
    }
    else{
      inputResult.current.innerHTML = "Invalid";
      inputResult.current.style.backgroundColor = "orange";
      inputResult.current.style.color = "white";
    }
  }

  let calculateResult = () => {
    let hindi = Number(hindiInterRef.current.value);
    let english = Number(englishInterRef.current.value);
    let maths = Number(mathsInterRef.current.value);
    let physics = Number(physicsRef.current.value);
    let chemistry = Number(chemistryRef.current.value);

    let totalMarks = hindi + english + maths + physics + chemistry;
    let percentage = (totalMarks/500)*100;
    percentage = percentage.toFixed(2);

    let result = "";
    let grade = "";

    if(hindi >= 35 && english >= 35 && maths >= 35 && physics >= 35 && chemistry >= 35){
      result = "Passed";
      resultLabelRef.current.style.backgroundColor = "green";
      resultLabelRef.current.style.color = "white";
    }
    else{
      result = "Failed";
      resultLabelRef.current.style.backgroundColor = "red";
      resultLabelRef.current.style.color = "white";
    }

    if (percentage > 70){
      grade = "Distinction";
    }
    else if (percentage >= 60 && percentage < 70){
      grade = "First Class";
    }
    else if(percentage >= 50 && percentage < 60){
      grade = "Second Class";
    }
    else if(percentage >= 40 && percentage < 50){
      grade = "Third Class";
    }
    else if(percentage >= 33){
      grade = "Just Passed";
    }
    else{
      grade = "Failed";
    }

    if (result === "Passed"){
      resultLabelRef.current.innerHTML = `${nameRef.current.value} is ${result} and got ${totalMarks} with ${percentage}% and ${grade}`
    }
    else{
      resultLabelRef.current.innerHTML = `${nameRef.current.value} is ${result} and got ${percentage}, so Try Next Year`
    }

  }

  return (
    <div>
      <Navigation></Navigation>
      <form className='labelHighInter'>
        <fieldset>
          <div>
            <div>
              <label>Name</label>
              <input ref={nameRef} type='text'></input>
              <span></span>
            </div>
            <div>
              <label>Hindi</label>
              <input ref={hindiInterRef} type='number' onChange={() => {onChangeInput(hindiInterRef.current.value, hindiInterResultRef)}}></input>
              <span ref={hindiInterResultRef}></span>
            </div>
            <div>
              <label>English</label>
              <input ref={englishInterRef} type='number'onChange={() => {onChangeInput(englishInterRef.current.value, englishInterResultRef)}}></input>
              <span ref={englishInterResultRef}></span>
            </div>
            <div>
              <label>Mathematics</label>
              <input ref={mathsInterRef} type='number' onChange={() => {onChangeInput(mathsInterRef.current.value, mathsInterResultRef)}}></input>
              <span ref={mathsInterResultRef}></span>
            </div>
            <div>
              <label>Physics</label>
              <input ref={physicsRef} type='number' onChange={() => {onChangeInput(physicsRef.current.value, physicsResultRef)}}></input>
              <span ref={physicsResultRef}></span>
            </div>
            <div>
              <label>Chemistry</label>
              <input ref={chemistryRef} type='number' onChange={() => {onChangeInput(chemistryRef.current.value, chemistryResultRef)}}></input>
              <span ref={chemistryResultRef}></span>
            </div>
            <div>
              <button className='btnSubmit' type='button' onClick={() => {calculateResult();}}>Submit</button>
              <button className='btnReset' type='reset'>Reset</button>
            </div>
            <br></br>
            <br></br>
            <div>
              <p ref={resultLabelRef}></p>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Intermidiate
