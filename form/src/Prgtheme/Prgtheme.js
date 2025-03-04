import React, { useEffect, useState } from 'react';
import './Prgtheme.css';
import axios from 'axios';

const Prgtheme = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:5001/api/projects')
      .then((res) => {
        console.log(res.data);
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

  const filteredData = data.filter((projectItem) => {
    const prgType = projectItem?.f_prgType?.toLowerCase() || '';
    return prgType.includes(searchQuery.toLowerCase());
  });

  return (
    <>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Program Theme"
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
                  <h1 className='title'>{projectItem.f_Coordinater}</h1>
                  <p>Program Type: <a>{projectItem.f_prgType}</a></p>
                  <p>Start Date: <a>{projectItem.f_startDate}</a></p>
                  <p>End Date: <a>{projectItem.f_endDate}</a></p>
                  <p>Program Duration: <a>{projectItem.f_prgDuration}</a></p>
                  <p>No: of Students: <a>{projectItem.f_num_std}</a></p>
                  <p>No: of Faculty: <a>{projectItem.f_num_faculty}</a></p>
                  <p>No: of Externals: <a>{projectItem.f_num_externals}</a></p>
                  <p>No: of Resource Persons: <a>{projectItem.f_num_rsrc_person}</a></p>
                  <p>Amount: <a>{projectItem.f_amount}</a></p>
                  <p>Mode of Session: <a>{projectItem.f_mode_session}</a></p>
                  <p>Remarks: <a>{projectItem.f_remarks}</a></p>
                  <p>Objective: <a>{projectItem.f_objective}</a></p>
                  <p>Benefits: <a>{projectItem.f_benifits}</a></p>
                  <p><a>{projectItem.f_img}</a></p>
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

export default Prgtheme;
