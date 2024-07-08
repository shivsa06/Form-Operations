import React, { useRef } from 'react'
import Navigation from './Navigation'

function HighSchool() {

  let nameRef = useRef();
  let hindiMarks = useRef();
  let englishMarks = useRef();
  let mathsMarks = useRef();
  let scienceMarks = useRef();
  let socialMarks = useRef();
  let sanskritMarks = useRef();

  let hindiResultRef = useRef();
  let englishResultRef = useRef();
  let mathsResultRef =  useRef();
  let scienceResultRef = useRef();
  let socialResultRef = useRef();
  let sanskritResultRef = useRef();

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
    let hindi = Number(hindiMarks.current.value);
    let english = Number(englishMarks.current.value);
    let maths = Number(mathsMarks.current.value);
    let science = Number(scienceMarks.current.value);
    let social = Number(socialMarks.current.value);
    let sanskrit = Number(sanskritMarks.current.value);

    let result = "";
    let grade = "";

    if(hindi >= 35 && english >= 35 && maths >= 35 && science >= 35 && social >= 35 && science >= 35 && social >= 35 && sanskrit >= 35){
      result = "Passed";
      resultLabelRef.current.style.backgroundColor = "Green";
      resultLabelRef.current.style.color = "white";
    }
    else{
      result = "Failed";
      resultLabelRef.current.style.backgroundColor = "Red";
      resultLabelRef.current.style.color = "white";
    }

    let totalMarks = hindi + english + maths + science + social + sanskrit;
    let percentage = (totalMarks/600)*100;
    percentage = percentage.toFixed(2);
    console.log(totalMarks);
    console.log(percentage);

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
              <input ref={hindiMarks} type='number'onChange={() => {onChangeInput(hindiMarks.current.value, hindiResultRef)}}></input>
              <span ref={hindiResultRef}></span>
            </div>
            <div>
              <label>English</label>
              <input ref={englishMarks} type='number' onChange={() => {onChangeInput(englishMarks.current.value, englishResultRef)}}></input>
              <span ref={englishResultRef}></span>
            </div>
            <div>
              <label>Maths</label>
              <input ref={mathsMarks} type='number' onChange={() => {onChangeInput(mathsMarks.current.value, mathsResultRef)}}></input>
              <span ref={mathsResultRef}></span>
            </div>
            <div>
              <label>Science</label>
              <input ref={scienceMarks} type='number' onChange={() => {onChangeInput(scienceMarks.current.value, scienceResultRef)}}></input>
              <span ref={scienceResultRef}></span>
            </div>
            <div>
              <label>Social</label>
              <input ref={socialMarks} type='number' onChange={() => {onChangeInput(socialMarks.current.value, socialResultRef)}}></input>
              <span ref={socialResultRef}></span>
            </div>
            <div>
              <label>Sanskrit</label>
              <input ref={sanskritMarks} type='number' onChange={() => {onChangeInput(sanskritMarks.current.value, sanskritResultRef)}}></input>
              <span ref={sanskritResultRef}></span>
            </div>
            <div>
              <button className='btnSubmit' type='button' onClick={() => {calculateResult()}}>Submit</button>
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

export default HighSchool
