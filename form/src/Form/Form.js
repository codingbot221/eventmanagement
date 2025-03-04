import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import axios from 'axios';
import './Form.css';

const Form = () => {
  const [Coordinater, setCoordinater] = useState('');
  const [visitedPlace, setVisitedPlace] = useState('');
  const [photo, setPhoto] = useState(null); // Modified to use null initially instead of an empty string
  const [prgType, setprgType] = useState('');
  // const [prgTheme, setprgTheme] = useState('');
  const [startDate, setstartDate] = useState('');
  const [endDate, setendDate] = useState('');

  const [prgDuration, setprgDuration] = useState('');
  const [num_std, setnum_std] = useState('');
  const [num_faculty, setnum_faculty] = useState('');
  const [num_externals, setnum_externals] = useState('');
  const [num_rsrc_person, setnum_rsrc_person] = useState('');
  const [amount, setamount] = useState('');
  const [mode_session, setmode_session] = useState('');

  const [remarks, setremarks] = useState('');
  const [objective, setobjective] = useState('');
  const [benifits, setbenifits] = useState('');

  const [photo2, setPhoto2] = useState(null);
  const [photo3, setPhoto3] = useState(null);
  const [photo4, setPhoto4] = useState(null);

  const [Academic, setAcademic] = useState('');
  const [Programe, setPrograme] = useState('');
  const [Activity, setActivity] = useState('');
  const [Quarter, setQuarter] = useState('');

  const [hasLinkedIn, setHasLinkedIn] = useState('no'); // State to track if LinkedIn link is provided
  const [linkedInLink, setLinkedInLink] = useState('');
   
  const formRef = useRef(null);

  // const [Coordinater, setCoordinater] = useState('');
  // const [visitedPlace, setVisitedPlace] = useState('');

  const handleCoordinaterChange = (event) => {
    setCoordinater(event.target.value);
  };

  const handleVisitedPlaceChange = (event) => {
    setVisitedPlace(event.target.value);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };
  const handleprgTypeChange = (event) => {
    setprgType(event.target.value);
  };

  // const handleprgThemeChange = (event) => {
  //   setprgTheme(event.target.value);
  // };
  const handlestartDateChange = (event) => {
    setstartDate(event.target.value);
  };

  const handleendDateChange = (event) => {
    setendDate(event.target.value);
  };

  const handleprgDurationChange = (event) => {
    setprgDuration(event.target.value);
  };

  const handlenum_stdChange = (event) => {
    setnum_std(event.target.value);
  };


  const handlenum_facultyChange = (event) => {
    setnum_faculty(event.target.value);
  };

  const handlenum_externalsChange = (event) => {
    setnum_externals(event.target.value);
  };
  const handlenum_rsrc_personChange = (event) => {
    setnum_rsrc_person(event.target.value);
  };

  const handleamountChange = (event) => {
    setamount(event.target.value);
  };
  const handlemode_sessionChange = (event) => {
    setmode_session(event.target.value);
  };
  const handleremarksChange = (event) => {
    setremarks(event.target.value);
  };
  const handleobjectiveChange = (event) => {
    setobjective(event.target.value);
  };
  const handlebenifitsChange = (event) => {
    setbenifits(event.target.value);
  };

  const handleAcademicChange = (event) => {
    setAcademic(event.target.value);
  };

  const handleProgrameChange = (event) => {
    setPrograme(event.target.value);
  };
  const handleActivityChange = (event) => {
    setActivity(event.target.value);
  };
  const handleQuarterChange = (event) => {
    setQuarter(event.target.value);
  };
 
  const handleHasLinkedInChange = (event) => {
    setHasLinkedIn(event.target.value);
  };

  const handleLinkedInLinkChange = (event) => {
    setLinkedInLink(event.target.value);
  };
  const handlePhoto2Change = (event) => {
    setPhoto2(event.target.files[0]);
  };
  const handlePhoto3Change = (event) => {
    setPhoto3(event.target.files[0]);
  };
  const handlePhoto4Change = (event) => {
    setPhoto4(event.target.files[0]);
};

const handleClick = () => {
  const formData = new FormData();
  formData.append('f_Coordinater', Coordinater);
  formData.append('f_place', visitedPlace);
  formData.append('f_prgType', prgType);
  // formData.append('f_prgTheme', prgTheme);
  formData.append('f_startDate', startDate);
  formData.append('f_endDate', endDate);
  formData.append('f_prgDuration', prgDuration);
  formData.append('f_num_std', num_std);
  formData.append('f_num_faculty', num_faculty);
  formData.append('f_num_externals', num_externals);
  formData.append('f_num_rsrc_person', num_rsrc_person);
  formData.append('f_amount', amount);
  formData.append('f_mode_session', mode_session);
  formData.append('f_remarks', remarks);
  formData.append('f_objective', objective);
  formData.append('f_benifits', benifits);
  formData.append('f_img', photo);
  formData.append('f_Academic', Academic);

  formData.append('f_Programe', Programe);
  formData.append('f_Activity',Activity);
  formData.append('f_Quarter', Quarter);
  formData.append('f_hasLinkedIn',hasLinkedIn);
  formData.append('f_linkedInLink',linkedInLink);


  formData.append('f_img2', photo2);
  formData.append('f_img3', photo3);
  formData.append('f_img4', photo4);

  axios
    .post('http://localhost:5001/api/projects', formData)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err, "err");
    });
};

const handleSubmit = (event) => {
  event.preventDefault();

  // Call handleClick here
  handleClick();

  //eset form fields after submission
  setCoordinater('');
  setVisitedPlace('');
  setprgType('');
  // setprgTheme('');
  setstartDate('');
  setendDate('');
  setprgDuration('');
  setnum_std('');
  setnum_faculty('');
  setnum_externals('');
  setnum_rsrc_person('');
  setamount('');
  setmode_session('');
  setremarks('');
  setobjective('');
  setbenifits('');
  setAcademic('')
  setPhoto(null);

  setQuarter('');
  setActivity('');
  setPrograme('');
  setHasLinkedIn('');
  setLinkedInLink('');
  setPhoto2(null);
  setPhoto3(null);
  setPhoto4(null);
};

const handlePreview = () => {
  html2pdf().from(formRef.current).save();
};

return (
  <>
    <br></br>
    <div className='for'>
      <div className="upload-container">
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="mb-3">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Academic Year</label>
            <input type="text" className="input-field " value={Academic} onChange={handleAcademicChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Programe Driven By </label>
            <input type="text" className="input-field " value={Programe} onChange={handleProgrameChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Quarter</label>
            <input type="text" className="input-field " value={Quarter} onChange={handleQuarterChange} required />
          </div>
            

          

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Program/Activity Name </label>
            <input type="text" className="input-field " value={Activity} onChange={handleActivityChange} required />
          </div>

          <label htmlFor="name" className="form-label">Program Coordinated By (Dept):</label>
            <input type="text" className="input-field " value={Coordinater} onChange={handleCoordinaterChange} required />
          </div>


          <div className="mb-3">
            <label htmlFor="prgType" className="form-label">Program Type:</label>
            <select className="input-field" value={prgType} onChange={handleprgTypeChange} required>
              <option value="">Select Program Type</option>
              <option>TECHNOLOGY KNOWLEDGE</option>
              <option>INNOVATION</option>
              <option>DESIGN THINKING</option>
              <option>ENTREPRENEUR</option>
              <option>START UP</option>
              <option>COURSE RELATED</option>
              <option>PLACEMENTS</option>
            </select>
          </div>
          {/* <div className="mb-3">
          <label htmlFor="prgTheme" className="form-label">Program Theme:</label>
          <input type="text" className="input-field" value={prgTheme} onChange={handleprgThemeChange} required />
        </div> */}
          <div className="mb-3">
            <label htmlFor="startDate" className="form-label">Start Date:</label>
            <input type="date" className="input-field" value={startDate} onChange={handlestartDateChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="endDate" className="form-label">End Date:</label>
            <input type="date" className="input-field" value={endDate} onChange={handleendDateChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="prgDuration" className="form-label">Program Duration:</label>
            <input type="text" className="input-field" value={prgDuration} onChange={handleprgDurationChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="num_std" className="form-label">No:of Student's:</label>
            <input type="text" className="input-field" value={num_std} onChange={handlenum_stdChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="num_faculty" className="form-label">No:of Faculty:</label>
            <input type="text" className="input-field" value={num_faculty} onChange={handlenum_facultyChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="num_externals" className="form-label">No:of External's:</label>
            <input type="text" className="input-field" value={num_externals} onChange={handlenum_externalsChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="num_rsrc_person" className="form-label">No:of Resource Person's:</label>
            <input type="text" className="input-field" value={num_rsrc_person} onChange={handlenum_rsrc_personChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">Amount:</label>
            <input type="text" className="input-field" value={amount} onChange={handleamountChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="mode_session" className="form-label">Session Mode:</label>
            <select className="input-field" value={mode_session} onChange={handlemode_sessionChange} required>
              <option value="">Select Mode Session</option>
              <option value="Session 1">Online</option>
              <option value="Session 2">Offline</option>
              <option value="Session 3">Dual</option>

            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="remarks" className="form-label">Remarks:</label>
            <input type="text" className="input-field" value={remarks} onChange={handleremarksChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="objective" className="form-label">Objective:</label>
            <input type="text" className="input-field" value={objective} onChange={handleobjectiveChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="benifits" className="form-label">Benefits:</label>
            <input type="text" className="input-field" value={benifits} onChange={handlebenifitsChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="photo" className="form-label">Photo1:</label>
            <input type="file" className="input-field" onChange={handlePhotoChange} accept="image/*" required />
          </div>

          <div className="mb-3">
        <label htmlFor="photo2" className="form-label">Image 2:</label>
        <input type="file" className="input-field" onChange={handlePhoto2Change} accept="image/*" required />
      </div>

      {/* Image 3 */}
      <div className="mb-3">
        <label htmlFor="photo3" className="form-label">Image 3:</label>
        <input type="file" className="input-field" onChange={handlePhoto3Change} accept="image/*" required />
      </div>

      {/* Image 4 */}
      <div className="mb-3">
        <label htmlFor="photo4" className="form-label">Image 4:</label>
        <input type="file" className="input-field" onChange={handlePhoto4Change} accept="image/*" required />
      </div>


{/* <div className="mb-3">
        <label className="form-label">Do you have a LinkedIn profile to share?</label>
        <div>
          <input
            type="radio"
            id="yes"
            name="hasLinkedIn"
            value="yes"
            checked={hasLinkedIn === 'yes'}
            onChange={handleHasLinkedInChange}
          />
          <label htmlFor="yes">Yes</label>

          <input
            type="radio"
            id="no"
            name="hasLinkedIn"
            value="no"
            checked={hasLinkedIn === 'no'}
            onChange={handleHasLinkedInChange}
          />
          <label htmlFor="no">No</label>
        </div>
      </div>

      {hasLinkedIn === 'yes' && (
        <div className="mb-3">
          <label htmlFor="linkedinLink" className="form-label">LinkedIn Profile Link:</label>
          <input
            type="text"
            id="linkedinLink"
            className="input-field"
            value={linkedInLink}
            onChange={handleLinkedInLinkChange}
            required
          />
        </div> */}
      

          
          <h6>** Before Submitting form Once preview the form **</h6>
          <button type="submit" className="submit-button">
            Submit
          </button>     </form>
        <br></br>
        <button onClick={handlePreview} className="preview-button">Preview as PDF</button>


      </div>
    </div>
  </>
);
};

export default Form;