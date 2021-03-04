import React, { Fragment,useState } from 'react';
import ShiftLabel from '../Components/shiftLabel.js';

export const SignUp = () => {
  const handleFocus = e => {
      e.preventDefault();
      e.target.nextElementSibling.className = 'shift-label';
  }

  const handleBlur = e => {
      e.preventDefault();        
      const { value } = e.target;
      if(value.length === 0){
          e.target.nextElementSibling.className = 'initial'
      }        
  }
  return (
    <Fragment>
      <div class="badydiv">
        <div class="universalDiv" style={{textAlign:"unset",height:"100vh",overflow: "scroll"}}>
          <i class='bx bx-arrow-back' style={{ fontSize: "27px", margin: "5%" }}></i>
          <div class="container" style={{
            textAlign: "center",
            dispaly: "flex",
            justifyContent: "center",
            alignItems: "Center",
            flexDirection: "column",
          }}>
            <img src="image/header/moonick.png" style={{maxHeight:"60px"}} alt="Logo" classname="img-fluid"></img>
          </div>
          <div style={{ textAlign: "center" }}>
            <h6 style={{ color: "gray", fontSize: "12px", margin: "3%" }}>SIGN UP</h6>
            <h6 style={{ fontSize: "12px", margin: "3%" }}>You're Just One Step Away From Signing Up</h6>
          </div>
          <div class="container" style={{ backgroundColor: "transparent", padding: "12px" }}>
            <div class="row" style={{ padding: "10px;" }}>
              <div class="col-6" style={{ display: "flex", justifyContent: "center" }}>
                <button type="button" class="btn btn-light" style={{ backgroundColor: "white", fontSize: "16px", width: "10rem", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", border: "solid lightgray 0.5px" }}><i style={{ float: "left", color: "rgb(59, 89, 152)", fontSize: "24px" }} class='bx bxl-facebook-circle' ></i>Facebook</button>
              </div>
              <div class="col-6" style={{ display: "flex", justifyContent: "center" }}>
                <button type="button" class="btn btn-light" style={{ backgroundColor: "white", fontSize: "16px", width: "10rem", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", border: "solid lightgray 0.5px" }}><i style={{ float: "left", color: "rgb(220, 60, 42)", fontSize: "24px" }} class='bx bxl-google'></i>Google</button>
              </div>
            </div>
          </div>
          <div className="strike-color" style={{ textAlign: "center", marginTop: "10px", marginBottom: "24px" }}>
            <h6 className="strike-through-text"><span style={{margin:'0 0.2rem'}}>or</span></h6>
          </div>
          <div style={{ marginLeft: "10px", marginRight: "10px" }}>
            <div style={{position: "relative"}}>                
                <input onFocus={handleFocus} onBlur={handleBlur} className="form-control input-tag-for-focus" style={{ backgroundColor: "#F5F5F5", padding: "7% 3%", borderRadius: "5px", border: "1px solid gainsboro", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", marginTop: '15px' }} ></input>
                <ShiftLabel styles={{position:"absolute"}} className={'initial'} labelFor={"otp"} title={"Full Name"} />
            </div>
            <div style={{position: "relative"}}>                
                <input onFocus={handleFocus} onBlur={handleBlur} className="form-control input-tag-for-focus" style={{ backgroundColor: "#F5F5F5", padding: "7% 3%", borderRadius: "5px", border: "1px solid gainsboro", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", marginTop: '15px' }} type="number" id="phnumber"></input>
                <ShiftLabel styles={{position:"absolute"}} className={'initial'} labelFor={"otp"} title={"Phone Number"} />
            </div>
            <div style={{position: "relative"}}>                
                <input onFocus={handleFocus} onBlur={handleBlur} className="form-control input-tag-for-focus" style={{ backgroundColor: "#F5F5F5", padding: "7% 3%", borderRadius: "5px", border: "1px solid gainsboro", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", marginTop: '15px' }} ></input>
                <ShiftLabel styles={{position:"absolute"}} className={'initial'} labelFor={"otp"} title={"Email Id"} />
            </div>
            <div style={{position: "relative"}}>                
                <input onFocus={handleFocus} onBlur={handleBlur} className="form-control input-tag-for-focus" style={{ backgroundColor: "#F5F5F5", padding: "7% 3%", borderRadius: "5px", border: "1px solid gainsboro", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", marginTop: '15px' }} type="password" id="input-pwd" ></input>
                <ShiftLabel styles={{position:"absolute"}} className={'initial'} labelFor={"otp"} title={"Password"} />
            </div>            
            <div class="form-check" style={{ marginTop: '5px', fontSize: '14px' }}>
              <input class="form-check-input" type="checkbox" id="eye-password" value="" />
              <label> Show Password</label>
            </div>
            <div style={{ marginTop: '0' }}>
              <button className="btn" style={{ padding: "4% 3%", borderRadius: "5px", border: "none", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", backgroundColor: "#000", color: "white" }}>Verify Your Phone Number</button>
              <div class="form-check" style={{ marginTop: '5px', fontSize: '12px' }}>
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label class="form-check-label" for="defaultCheck1" style={{margin: '0.2rem 0'}}>
                  By continuing, you agree to <span style={{ color: "#000", fontSize: "12px" }}>Terms of Use</span> and <span style={{ color: "#000", fontSize: "12px" }}>Privacy Policy</span>
                </label>
              </div>
            </div>
          </div>
          <div style={{ margin: "1.8rem 0",textAlign:"center" }}>
            <p style={{ fontSize: "15px" }}>Already have an account? <span style={{ color: "#000", fontSize: "14px",fontWeight: "bold",cursor: "pointer" }}>Sign In</span></p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};