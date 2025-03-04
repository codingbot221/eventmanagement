import React, { useEffect, useState } from 'react';
import './Coordinater.css';
import axios from 'axios';
import jsPDF from 'jspdf';
import image from '../images/image.png';

const Coordinater = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:5001/api/projects')
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setShowContent(true); // Show content after searching
  };

  const generatePDF = (projectItem) => {
    const doc = new jsPDF();
    let yPos = 10; // Initial y position

    const logoUrl = 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nec.png.jpg';
    const logoImg = new Image();
    logoImg.src = logoUrl;
    doc.addImage(logoImg, 'JPEG', 10, yPos, 20, 10);


    
    doc.setTextColor('purple'); // Set header text color to violet
    doc.text('NARASARAOPETA ENGINEERING COLLEGE', 102, yPos + 6, { align: 'center', fontSize: 16,});

    doc.setTextColor('black'); // Set content text color to black
    doc.text('(Autonomous)', 104, yPos + 10, { align: 'center', fontSize: 10 });
    
    doc.text('Kotappakonda Road, Narasaraopet – 522602', 107, yPos +16, { align: 'center', fontSize: 9 });
    

    doc.setTextColor('black'); // Set content text color to black
    doc.rect(5, 5, doc.internal.pageSize.getWidth() - 10, doc.internal.pageSize.getHeight() - 10);
  
  
    doc.setLineWidth(0.5);
    doc.line(6, yPos + 20, 208, yPos + 20);


    doc.text(`Academic: ${projectItem.f_Academic}`, 10, yPos + 30);
    doc.text(`Programe Driven By : ${projectItem.f_Programe}`, 10, yPos + 40);
    doc.text(`Quarter: ${projectItem.f_Quarter}`, 10, yPos + 50);
    doc.text(`Activity Name: ${projectItem.f_Activity}`, 10, yPos +60);
    doc.text(`Program Coordinator: ${projectItem.f_Coordinater}`, 10, yPos + 70);
    doc.text(`Program Type: ${projectItem.f_prgType}`, 10, yPos + 80);
    doc.text(`Start Date: ${projectItem.f_startDate}`, 10, yPos + 90);
    doc.text(`End Date: ${projectItem.f_endDate}`, 10, yPos + 100);
    doc.text(`Program Duration: ${projectItem.f_prgDuration}`, 10, yPos + 110);
    doc.text(`No. of Students: ${projectItem.f_num_std}`, 10, yPos + 120);
    doc.text(`No. of Faculty: ${projectItem.f_num_faculty}`, 10, yPos + 130);
    doc.text(`No. of Externals: ${projectItem.f_num_externals}`, 10, yPos + 140);
    doc.text(`No. of Resource Persons: ${projectItem.f_num_rsrc_person}`, 10, yPos + 150);
    doc.text(`Amount: ${projectItem.f_amount}`, 10, yPos + 160);
    doc.text(`Mode of Session: ${projectItem.f_mode_session}`, 10, yPos + 170);
    doc.text(`Remarks: ${projectItem.f_remarks}`, 10, yPos + 180);
    doc.text(`Objective: ${projectItem.f_objective}`, 10, yPos + 190);
    doc.text(`Benefits: ${projectItem.f_benifits}`, 10, yPos + 200);
   
    
    // Add spacing before the image
    doc.addPage();
    const img1 = new Image();
    img1.src = `http://localhost:5001/${projectItem?.f_img}`;
    doc.addImage(img1, 'JPEG', 10, yPos, 90, 90);

    const img2 = new Image();
    img2.src = `http://localhost:5001/${projectItem?.f_img2}`;
    doc.addImage(img2, 'JPEG', 110, yPos, 90, 90);

    const img3 = new Image();
    img3.src = `http://localhost:5001/${projectItem?.f_img3}`;
    doc.addImage(img3, 'JPEG', 10, yPos + 100, 90, 90);

    const img4 = new Image();
    img4.src = `http://localhost:5001/${projectItem?.f_img4}`;
    doc.addImage(img4, 'JPEG', 110, yPos + 100, 90, 90);
      
      doc.save(`${projectItem.f_Activity}_details.pdf`);
    };


  const filteredData = data.filter((projectItem) => {
    const Academic = projectItem?.f_Academic?.toLowerCase() || '';
    return Academic.includes(searchQuery.toLowerCase());
  });



  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Academic Year"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      {showContent && (
        <div className='he'>
        <div className="gallery-container">
          {filteredData.length > 0 ? (
            filteredData.map((projectItem, projectIndex) => (
              <div key={projectIndex + 1} className="content">
 <div className="img-container">
              <img src={`http://localhost:5001/${projectItem?.f_img}`} alt="" className="img" />
              <img src={`http://localhost:5001/${projectItem?.f_img2}`} alt="" className="img" />
              <img src={`http://localhost:5001/${projectItem?.f_img3}`} alt="" className="img" />
              <img src={`http://localhost:5001/${projectItem?.f_img4}`} alt="" className="img" />
            </div>                <div className="project-details">
                  <h1 className='title'>{projectItem.f_Activity}</h1>
                  <p>Academic: <a>{projectItem.f_Academic}</a></p>
                  <p>Programe Driven By 	: <a>{projectItem.f_Programe}</a></p>
                  <p>Quarter:<a> {projectItem.f_Quarter}</a></p>
                  <p>Coordinater(By dept): <a>{projectItem.f_Coordinater}</a></p>
                  
                  <p>Program Type: <a>{projectItem.f_prgType}</a></p>
                  <p>Start Date: <a>{projectItem.f_startDate}</a></p>
                  <p>End Date:<a> {projectItem.f_endDate}</a></p>
                  <p>Program Duration: <a>{projectItem.f_prgDuration}</a></p>
                  <p>No. of Students: <a>{projectItem.f_num_std}</a></p>
                  <p>No. of Faculty: <a>{projectItem.f_num_faculty}</a></p>
                  <p>No. of Externals: <a>{projectItem.f_num_externals}</a></p>
                  <p>No. of Resource Persons: <a>{projectItem.f_num_rsrc_person}</a></p>
                  <p>Amount: <a>{projectItem.f_amount}</a></p>
                  <p>Mode of Session: <a>{projectItem.f_mode_session === 'session1' ? 'online' : 'offline'}</a></p>
                  <p>Remarks: <a>{projectItem.f_remarks}</a></p>
                  <p>Objective: <a>{projectItem.f_objective}</a></p>
                  <p>Benefits: <a>{projectItem.f_benifits}</a></p>
                  <button onClick={() => generatePDF(projectItem)}>Download PDF</button>
                </div>
              </div>
            ))
          ) : (
            'No data found'
          )}
        </div>
        </div>
      )}
    </>
  );
};

export default Coordinater;
