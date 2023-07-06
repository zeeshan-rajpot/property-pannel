// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { Container, Row, Col } from 'react-bootstrap';
// import Button from '@mui/material/Button';
// import './UploadAgent.css'

// export default function UploadAgents() {
//   const [file, setFile] = useState(null); // State to store the uploaded file
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     companyName: '',
//     nationality: '',
//     languages: '',
//   }); // State to store the form data

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [id]: value,
//     }));
//   };

//   const handleFileUpload = (event) => {
//     const uploadedFile = event.target.files[0];
//     setFile(uploadedFile);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formDataWithFile = { ...formData, file }; // Add the file to the form data
//     console.log('Form data:', formDataWithFile); // Display the form data in the console
//   };

//   return (
//     <>
      
//       <h1 className="text-center bold">Add New Agent</h1>

//       <Container>
//         <Row>
//           <Col>
//             <Box
//               component="form"
//               sx={{
//                 '& > :not(style)': { m: 1, width: '25ch' },
//               }}
//               noValidate
//               autoComplete="off"
//               onSubmit={handleSubmit} // Handle form submission
//             >

// <h3 className="bold">Add Name</h3>
//               <TextField
//                 id="name"
//                 label="Name"
//                 variant="outlined"
//                 value={formData.name}
//                 onChange={handleChange} // Handle input change
//               />
//               <h3 className="bold">Add Name</h3>
//               <TextField
//                 id="email"
//                 label="Email"
//                 variant="outlined"
//                 value={formData.email}
//                 onChange={handleChange} // Handle input change
//               />
//               <h3 className="bold">Add companyName </h3>
//               <TextField
//                 id="companyName"
//                 label="Company Name"
//                 variant="outlined"
//                 value={formData.companyName}
//                 onChange={handleChange} // Handle input change
//               />
//               <h3 className="bold">Add nationality</h3>
//               <TextField
//                 id="nationality"
//                 label="Nationality"
//                 variant="outlined"
//                 value={formData.nationality}
//                 onChange={handleChange} // Handle input change
//               />
//               <h3 className="bold">Add languages</h3>
//               <TextField
//                 id="languages"
//                 label="Languages"
//                 variant="outlined"
//                 value={formData.languages}
//                 onChange={handleChange} // Handle input change
//               />
//               <input type="file" accept="image/png" onChange={handleFileUpload} />
//               <div className='' style={{ alignContent: 'center', textAlign: 'center', width: 'auto' }}>

//                 <button type="submit" className='submit'>Submit</button>
//               </div>
//             </Box>
//           </Col>
//           <Row style={{ textAlign: 'center' }}></Row>
//         </Row>
//       </Container>
//     </>
//   );
// }





import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '@mui/material/Button';
import './UploadAgent.css';

export default function UploadAgents() {
  const [file, setFile] = useState(null); // State to store the uploaded file
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    nationality: '',
    language: '',
    propertyForSale: '',
    profileImage: null, // State to store the uploaded profile image
  }); 

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

    // Update the formData state with the uploaded file
    setFormData((prevFormData) => ({
      ...prevFormData,
      profileImage: uploadedFile,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = 'http://localhost:8222/addAgent';
    const apiKey = {
      name: formData.name,
      nationality: formData.nationality,
      language: formData.language,
      propertyForSale: formData.propertyForSale,
      companyName: formData.companyName,
      profileImage: formData.profileImage,
    };

    // Create FormData object and append the API keys
    const formDataToSend = new FormData();
    for (const key in apiKey) {
      formDataToSend.append(key, apiKey[key]);
    }

    // Send the form data to the API server
    fetch(apiUrl, {
      method: 'POST',
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response from API server:', data);
        // Handle the response from the API server
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle the error
      });
  };

  return (
    <>
      <h1 className="text-center bold">Add New Agent</h1>

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
              <h3 className="bold">Add Name</h3>
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange} // Handle input change
              />
              <h3 className="bold">Add Email</h3>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange} // Handle input change
              />
              <h3 className="bold">Add Company Name</h3>
              <TextField
                id="companyName"
                label="Company Name"
                variant="outlined"
                value={formData.companyName}
                onChange={handleChange} // Handle input change
              />
              <h3 className="bold">Add Nationality</h3>
              <TextField
                id="nationality"
                label="Nationality"
                variant="outlined"
                value={formData.nationality}
                onChange={handleChange} // Handle input change
              />
              <h3 className="bold">Add Languages</h3>
              <TextField
                id="language"
                label="Languages"
                variant="outlined"
                value={formData.language}
                onChange={handleChange} // Handle input change
              />
              <h3 className="bold">Add Property for Sale</h3>
              <TextField
                id="propertyForSale"
                label="Property for Sale"
                variant="outlined"
                value={formData.propertyForSale}
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
