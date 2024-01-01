/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Card } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext/index";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Button, CircularProgress, Box } from "@mui/material";
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const MIN_PASSWORD_LENGTH = 8;

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value.trim();
    setPassword(value);
    setPasswordError(value.length >= MIN_PASSWORD_LENGTH ? "" : `Password must be at least ${MIN_PASSWORD_LENGTH} characters long`);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(value) ? "" : "Invalid email format");
  };

  const handleLogin = () => {
    if (!validateEmail(email) || password.length < MIN_PASSWORD_LENGTH) {
      setErrorMessage("Please enter a valid email and ensure the password is at least 8 characters long");
      return;
    }

    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User logged in:", user);

        // Additional logic if needed

        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        console.log("Login error:", error.message);
        setErrorMessage("Login failed: invalid credentials ");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  // const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');


  const handleResetPassword = async () => {
    try {
      setLoading(true);
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);

      setMessage('Password reset email sent. Check your inbox.');
      setLoading(false);
      setError('');
    } catch (error) {
      setError(`Error sending password reset email: ${error.message}`);
      setMessage('');
      setLoading(false);
    }
  };

  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow(true)
  }
const [showfogError,setFogShowError]=useState(true)

const enrrorHandler=()=>{
setFogShowError(false)
}
const [basicModal, setBasicModal] = useState(false);

const toggleOpen = () => setBasicModal(!basicModal);

  return (

    <div className="login-container" style={{ minHeight: '100vh', color: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
      {show ? (
        <>
          <Card className='card-forget' style={{
            display: 'flex',
            padding: '1rem', flexDirection: 'column',
          
          }}>
            <h4>Forgot Password</h4>
            <div style={{ marginTop: '1rem', marginBottom: '1rem' }} >
              <input placeholder="enter your email" style={{ width: '98%', height: '2.5rem', }} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            </div>

            <Button className="login-btn" style={{ width: '98%', color: 'white' }} onClick={()=>{
              handleResetPassword()
             toggleOpen()
            }}>Reset Password</Button>

           
            {message && (
  <>

<>
      
      <MDBModal open={basicModal} setopen={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            {/* <MDBModalHeader>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader> */}
            <MDBModalBody>

            </MDBModalBody>
            <p style={{fontSize:'1.2rem',marginLeft:'3rem'}}>Check your email address to reset your password</p>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Ok
              </MDBBtn>
            
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>


    
  </>
)}
           {error && (
  <>

<>
      
      <MDBModal open={basicModal} setopen={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            {/* <MDBModalHeader>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader> */}
            <MDBModalBody>

            </MDBModalBody>
            <p style={{color:"red",marginLeft:'3rem',fontSize:'1.2rem'}} >Inavlid email address or email not registered</p>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Ok
              </MDBBtn>
            
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  
   
  </>
)}
            
            <p style={{ marginTop: '1rem', cursor: 'pointer' }} onClick={() => setShow(false)}>Continue to login</p>
          </Card>
        </>
      ) : (
        <>
          <Card
            title=""
            style={{
              width: "90%",
              maxWidth: "700px",
              borderRadius: '.6rem',
              height: '32rem',
              background: 'white',
              border: 'none'
            }}
            className="login-card"
          >
            <div className="logo-container">
              <div className="l">
                <img
                  src="https://app.yafreeka.com/splash/img/light-1x.png"
                  alt="Logo"
                  className="logo"
                />
              </div>
              <h4 style={{ color: 'white' }}>  Yafreeka Studio</h4>
            </div>
            <form autoComplete="off">
              <div>
                {/* <FormControl
              className="input"
              sx={{ m: 1, width: '95%' }}
              variant="outlined"
              autoComplete="off"
            >
              <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
              <OutlinedInput
              
               autoComplete="off"
                id="outlined-adornment-email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                label="Email"
                startAdornment={
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                }
                classes={{ notchedOutline: 'no-background' }}
              />
            </FormControl> */}

                <FormControl sx={{
                  m: 1, width: '100%', height: '4rem',
                  border: emailError ? '1px splid red' : '', // Set border color to red if there's an error
                }} variant="outlined" className={emailError ? 'error-input' : ''} // Add a class for error styling
                >
                  <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                  <OutlinedInput

                    autoComplete="off"
                    id="outlined-adornment-email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    label="Email"
                    startAdornment={
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    }
                    classes={{ notchedOutline: 'no-background' }}
                  />
                </FormControl>
                <FormControl sx={{
                  m: 1, width: '100%', height: '4rem',
                  borderColor: emailError ? 'red' : '', // Set border color to red if there's an error
                }} variant="outlined" >
                  <InputLabel htmlFor="outlined-adornment-password">password</InputLabel>
                  <OutlinedInput
                    style={{ background: 'transparent' }}

                    autoComplete="new-password"
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handlePasswordChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    startAdornment={
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    }
                  />
                </FormControl>

                {passwordError && <p style={{ color: 'red', marginLeft: '3rem', marginBottom: 1 }}>{passwordError}</p>}
              </div>
              {/* <Link to="/test"> */}
              <p onClick={handleClick} className="p" style={{
                width: '100%',
                textAlign: "center",
                cursor: 'pointer',
                color: "#3b3763"
              }}>Forgot Password ?</p>
              {/* </Link> */}

              <div style={{ width: '100%' }}>
                {loading ? (
                  <div
                    className="text-center"
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "94%",
                      color: 'white',

                    }}
                  >
                    <Box sx={{ display: 'flex' }}>
                      <CircularProgress />
                    </Box>
                  </div>
                ) : (
                  <>
                    <Button className="login-btn" style={{ width: '98%', color: 'black', marginTop: '1rem', marginLeft: '6px' }} onClick={handleLogin}>
                      Login
                    </Button>

                    {errorMessage && <p style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>{errorMessage}</p>}
                  </>
                )}
              </div>
            </form>
          </Card>
        </>
      )}


      <img className="log-img" style={{ height: '30rem', objectFit: 'cover', marginTop: '1rem' }} src="https://res.cloudinary.com/pitz/image/upload/v1700383118/yafreeka_logo-02_yrttoj.svg" alt="" />
    </div>

  );
};

export default Login;
