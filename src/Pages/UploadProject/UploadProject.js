





import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Row, Col } from 'react-bootstrap';
// import Button from '@mui/material/Button';
// import './UploadAgent.css'

export default function UploadProject() {
  const [file, setFile] = useState(null); // State to store the uploaded file
  const [formData, setFormData] = useState({
    Delviryyear: '',
    projectName: '',
    DevlporeName: '',
    bedroom: '',
    Adress: '',
    Adress: '',
  }); // State to store the form data

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataWithFile = { ...formData, file }; // Add the file to the form data
    console.log('Form data:', formDataWithFile); // Display the form data in the console
  };

  return (
    <>

      <h1 className="text-center bold">Add New Projects</h1>

      <Container>
        <Row>
          <Col>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit} // Handle form submission
            >

              <h3 className="bold">Add Delviry year</h3>
              <TextField
                id="Delviryyear"
                label="Delviry year"
                variant="outlined"
           
                value={formData.Delviryyear}
                onChange={handleChange} // Handle input change
              />
              <h3 className="bold">Add project Name</h3>
              <TextField
                id="projectName"
                label="project Name"
                variant="outlined"
                value={formData.projectName}
                onChange={handleChange} // Handle input change
              />
              <h3 className="bold">Add devlpore Name </h3>
              <TextField
                id="DevlporeName"
                label="Devlpore Name"
                variant="outlined"
                value={formData.DevlporeName}
                onChange={handleChange} // Handle input change
              />
              <h3 className="bold">No of bedroom</h3>
              <TextField
                id="bedroom"
                label="bedroom"
                variant="outlined"
                value={formData.bedroom}
                onChange={handleChange} // Handle input change
              />
              
              <h3 className="bold">Adress</h3>
              <TextField
                id="Adress"
                label="Adress"
                variant="outlined"
                value={formData.Adress}
                onChange={handleChange} // Handle input change
              />
              <input type="file" accept="image/png" onChange={handleFileUpload} />
              
              <div className='' style={{ alignContent: 'center', textAlign: 'center', width: 'auto' }}>

                <button type="submit" className='submit'>Submit</button>
              </div>
            </Box>
          </Col>
          <Row style={{ textAlign: 'center' }}></Row>
        </Row>
      </Container>
    </>
  );
}

