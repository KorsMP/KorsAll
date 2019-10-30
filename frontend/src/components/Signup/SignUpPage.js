import ChatHttpServer from '../../utils/chatHttpServer';
import React, { useState, Component, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form'
import ProgressBar from 'react-bootstrap/ProgressBar'

import './styler.css'

export class Signup extends Component {
  render() {
    return (
      <React.Fragment>
        <DisplayLoginCard>

        </DisplayLoginCard>

      </React.Fragment>
    )
  }
}

const Title = () => {
  return (
    <h1>
      KORS
    </h1>
  )
}

const DisplayLoginCard = () => {

  // form Deatails
  // Roll-Number
  const [rollNumber, setRollNumber] = useState("");
  const [phone, setPhone] = useState("");

  //FirstName LastName MiddleName
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log(rollNumber);
  });




  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const [initialState, setInitialState] = useState(100 / 5);
  const [progressBar, setProgressBar] = useState(100 / 5);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    // console.log(selectedIndex + '   ' + e);
    if (selectedIndex === 4 & e === 'prev') {
      console.log(" move right");
    }
    else if (selectedIndex === 0 & e === 'next') {
      console.log(" move left");
    }
    else {
      setIndex(selectedIndex);
      setDirection(e.direction);
      console.log(parseInt(selectedIndex));

      setProgressBar(initialState * parseInt(selectedIndex + 1))

    }


  };

  //year , //year selection checkbox


  const [selectedSection, setSection] = useState("");

  const checkboxSectionHandler = (e) => {
    let value = e.target.value
    console.log(e.target.value);
    if (value === selectedSection) {
      setSection("");
    } else {
      ['A', 'B', 'C', 'D', 'E', 'F', 'G'].forEach((element, index) => {
        if (element === value) {
          setSection(element);
        }
      });
    }
  };

  const [selectedYear, setYear] = useState("");

  const checkboxYearHandler = (e) => {
    let value = e.target.value
    console.log(e.target.value);
    if (value === selectedYear) {
      setYear("");
    } else {
      ['1', '2', '3', '4'].forEach((element) => {
        if (element === value) {
          setYear(element);
        }
      });
    }
  };

  const [selectedBranch, setBranch] = useState("");
  const checkboxBranchHandler = (e) => {
    let value = e.target.value
    console.log(e.target.value);
    if (value === selectedBranch) {
      setYear("");
    } else {
      ['C.S.E', 'E.C.E', 'I.T', 'E.I.E'].forEach((element) => {
        if (element === value) {
          setBranch(element);
        }
      });
    }
  };
  function formHandler(e) {
    e.preventDefault();
    let data = {
      rollNumber: rollNumber,
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      email: email,
      phone: phone,
      year: selectedYear,
      branch: selectedBranch,
      section: selectedSection,
      password: password
    }
    ChatHttpServer.register(data)
      .then(res => {
        if (res.success) {
          alert("Registered successfully")
          window.location.assign('/')
        }
        else if (res.exists)
          alert("Rollnumber already exists")
      })
  }
  return (
    <React.Fragment>



      <div className="container ">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex">
                {/* <!-- Background image for card set in CSS! --> */}
              </div>

              <div className='card-body C-B' >

                <h5 className="card-title text-center C-T">Sign Up Form</h5>
                <ProgressBar animated variant="success" now={progressBar} label={progressBar} />




                <Carousel slide={true} indicators={false} id="quote-carousel" activeIndex={index} onSelect={handleSelect} direction={direction} interval={false}  >

                  {/* Roll-Number Slide */}
                  <Carousel.Item>
                    <form className="form-signin  " style={{ "marginTop": "30px" }}>
                      <div className=" name form-label-group "  >
                        <input
                          type="text" id="inputRollNumber" className="form-control text-center"
                          placeholder="Roll Number" autoCapitalize={"characters"}
                          value={rollNumber}
                          onChange={(event) => { setRollNumber(event.target.value.toUpperCase()) }}
                          required />
                        <label htmlFor="inputRollNumber" >Roll Number</label>
                      </div>
                      <div className=" name form-label-group "  >
                        <input
                          type="text" id="inputPhone" className="form-control text-center"
                          placeholder="Phone" autoCapitalize={"characters"}
                          value={phone}
                          onChange={(event) => { setPhone(event.target.value) }}
                          required />
                        <label htmlFor="inputPhone" >Mobile Number</label>
                      </div>
                    </form>
                  </Carousel.Item>

                  {/* FirstName LastName MiddleName Slide */}
                  <Carousel.Item>
                    <form className="form-signin  " style={{ 'marginLeft': '45px' }}  >
                      {/* First Name  */}
                      <div className=" name form-label-group  " style={{ 'width': "80%" }} >
                        <input
                          type="text" id="inputFirstName" className="form-control text-center"
                          placeholder="FirstName" autoCapitalize={"characters"}
                          value={firstName}
                          onChange={(event) => { setFirstName(event.target.value.toUpperCase()) }}
                          required />
                        <label htmlFor="inputFirstName" >First Name</label>
                      </div>
                      {/* Middle Name */}
                      <div className=" name form-label-group " style={{ 'width': "80%" }}  >
                        <input
                          type="text" id="inputMiddleName" className="form-control text-center"
                          placeholder="MiddleName" autoCapitalize={"characters"}
                          value={middleName}
                          onChange={(event) => { setMiddleName(event.target.value.toUpperCase()) }}
                          required />
                        <label htmlFor="inputMiddleName" >Middle Name</label>
                      </div>
                      {/* Last Name */}
                      <div className=" name form-label-group " style={{ 'width': "80%" }} >
                        <input
                          type="text" id="inputLastName" className="form-control text-center"
                          placeholder="LastName" autoCapitalize={"characters"}
                          value={lastName}
                          onChange={(event) => { setLastName(event.target.value.toUpperCase()) }}
                          required />
                        <label htmlFor="inputLastName" >Last Name</label>
                      </div>
                    </form>
                  </Carousel.Item>

                  <Carousel.Item>
                    <Form>
                      <Form.Label><span style={{ 'fontSize': '20px' }}><u>Year : {selectedYear}</u></span></Form.Label>
                      {['checkbox'].map(type => (
                        <div key={`custom-inline-${type}`} className="mb-3">
                          <Form.Check
                            custom
                            inline
                            onChange={(e) => { checkboxYearHandler(e) }}
                            value={"1"}
                            label="Year 1"
                            checked={selectedYear === '1'}
                            type={type}


                            id={`custom-inline-${type}-11`}
                          />
                          <Form.Check

                            custom
                            inline
                            onChange={e => { checkboxYearHandler(e) }}
                            value={"2"}
                            checked={selectedYear === '2'}
                            label="Year 2"
                            type={type}

                            id={`custom-inline-${type}-21`}
                          />
                          <Form.Check
                            custom
                            inline
                            onClick={e => { checkboxYearHandler(e) }}
                            value={"3"}
                            label="Year 3"
                            checked={selectedYear === '3'}
                            type={type}

                            id={`custom-inline-${type}-31`}
                          />
                          <Form.Check
                            custom
                            inline
                            onClick={e => { checkboxYearHandler(e) }}
                            value={"4"}
                            label="Year 4 "
                            type={type}
                            checked={selectedYear === '4'}
                            id={`custom-inline-${type}-41`}
                          />
                        </div>
                      ))}

                    </Form>
                    <div className="p-2">

                    </div>
                    <Form>
                      <Form.Label><span style={{ 'fontSize': '20px' }}><u>Branch : {selectedBranch}</u></span></Form.Label>
                      {['checkbox'].map(type => (
                        <div key={`custom-inline-${type}`} className="mb-3">
                          <Form.Check
                            custom
                            inline
                            onClick={(e) => { checkboxBranchHandler(e) }}
                            value={"C.S.E"}
                            label="C.S.E"
                            type={type}
                            checked={selectedBranch === 'C.S.E'}
                            id={`custom-inline-${type}-1`}
                          />
                          <Form.Check
                            custom
                            inline
                            onClick={e => { checkboxBranchHandler(e) }}
                            value={"I.T"}
                            checked={selectedBranch === 'I.T'}
                            label="I.T"
                            type={type}

                            id={`custom-inline-${type}-2`}
                          />
                          <Form.Check
                            custom
                            inline
                            onClick={e => { checkboxBranchHandler(e) }}
                            value={"E.C.E"}
                            label="E.C.E"
                            checked={selectedBranch === 'E.C.E'}
                            type={type}

                            id={`custom-inline-${type}-3`}
                          />
                          <Form.Check
                            custom
                            inline
                            onClick={e => { checkboxBranchHandler(e) }}
                            value={"E.I.E"}
                            label="E.I.E"
                            checked={selectedBranch === 'E.I.E'}
                            type={type}

                            id={`custom-inline-${type}-4`}
                          />

                        </div>
                      ))}

                    </Form>
                    <div className="p-2">

                    </div>
                    <Form>

                      <Form.Label><span style={{ 'fontSize': '20px' }}><u>Section : {selectedSection}</u></span></Form.Label>
                      {['checkbox'].map(type => (
                        <div key={`custom-inline-${type}`} className="mb-3">
                          <Form.Check
                            custom
                            inline
                            onClick={(e) => { checkboxSectionHandler(e) }}
                            value={"A"}
                            label="A"
                            checked={selectedSection === 'A'}
                            type={type}

                            id={`custom-inline-${type}-secA`}
                          />
                          <Form.Check
                            custom
                            inline
                            onClick={e => { checkboxSectionHandler(e) }}
                            value={"B"}
                            label="B"
                            checked={selectedSection === 'B'}
                            type={type}

                            id={`custom-inline-${type}-secB`}
                          />
                          <Form.Check
                            custom
                            inline
                            onClick={e => { checkboxSectionHandler(e) }}
                            value={"C"}
                            label="C"
                            checked={selectedSection === 'C'}
                            disabled={false}
                            type={type}

                            id={`custom-inline-${type}-secC`}
                          />
                          <Form.Check
                            custom
                            inline
                            onClick={e => { checkboxSectionHandler(e) }}
                            checked={selectedSection === 'D'}
                            value={"D"}
                            label="D"
                            type={type}

                            id={`custom-inline-${type}-secD`}
                          />
                          <Form.Check
                            custom
                            inline
                            onClick={e => { checkboxSectionHandler(e) }}
                            value={"E"}
                            label="E"
                            checked={selectedSection === 'E'}
                            type={type}

                            id={`custom-inline-${type}-secE`}
                          />
                          <Form.Check
                            custom
                            inline
                            onClick={e => { checkboxSectionHandler(e) }}
                            value={"F"}
                            label="F"
                            checked={selectedSection === 'F'}
                            type={type}

                            id={`custom-inline-${type}-secF`}
                          />
                          <Form.Check
                            custom
                            inline
                            onClick={e => { checkboxSectionHandler(e) }}
                            value={"G"}
                            label="G"
                            checked={selectedSection === 'G'}
                            type={type}

                            id={`custom-inline-${type}-secG`}
                          />
                        </div>
                      ))}

                    </Form>
                  </Carousel.Item>

                  {/* Mail Password Confirm Password */}
                  <Carousel.Item >
                    <form className="form-signin " style={{ 'marginLeft': '45px' }} >
                      {/* First Name  */}
                      <div className=" name form-label-group  " style={{ 'width': '85%' }}>
                        <input
                          type="text" id="inputEmail" className="form-control text-center"
                          placeholder="Mail" autoCapitalize={"characters"}
                          autoComplete="username"
                          value={email}
                          onChange={(event) => { setEmail(event.target.value) }}
                          required />
                        <label htmlFor="inputEmail" >Mail</label>
                      </div>
                      {/* Password */}
                      <div className=" name form-label-group " style={{ 'width': '85%' }} >
                        <input
                          type="password" id="inputPassword" className="form-control text-center"
                          placeholder="Password" autoComplete="current-password"
                          value={password}
                          onChange={(event) => { setPassword(event.target.value) }}
                          required />
                        <label htmlFor="inputPassword" >Password</label>
                      </div>

                      {/* Confirm Password */}
                      <div className=" name form-label-group " style={{ 'width': '85%' }} >
                        <input
                          type="password" id="inputConfirmPassword" className="form-control text-center"
                          placeholder="Password" autoComplete="current-password"
                          value={confirmPassword}
                          onChange={(event) => { setConfirmPassword(event.target.value) }}
                          required />
                        <label htmlFor="inputConfirmPassword" >Confirm Password</label>
                      </div>
                      <Button
                        className="btn3d btn btn btn-lg"
                        variant="outline-dark"
                        style={{ 'borderRadius': '20px', 'marginLeft': '-30px' }}
                        onClick={(e) => { formHandler(e) }}
                        type='submit'
                      >Sign UP</Button>
                    </form>



                  </Carousel.Item>



                </Carousel>

              </div>
            </div>
          </div>
        </div>

      </div>
    </React.Fragment>
  )
}



export default Signup