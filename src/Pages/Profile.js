import React, { Fragment } from 'react';
import {RedNavbar} from "../Components/RedNavbar";
import WrapperDiv from '../Components/wrapper-div';
import ShiftLabel from '../Components/shiftLabel.js';

export const Profile = () => {
    const handleFocus = e => {
        e.preventDefault();
        console.log(e.target,'e.target',e.target.previousElementSibling);
        e.target.previousElementSibling.className = 'shift-label';
    }
  
    const handleBlur = e => {
        e.preventDefault();
        console.log(e.target,'e.target');        
        const { value } = e.target;
        if(value.length === 0){
            e.target.previousElementSibling.className = 'initial'
        }        
    }
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{height: '100vh', backgroundColor: '#f5f5f5'}}>
                    <RedNavbar navbar="Profile"></RedNavbar>
                    <WrapperDiv className={'aboutseller text-left'} isFooterPresent={true} footerHeight={'60px'} headerHeight={'48px'} >
                    {/* <section className="bodypanelmian aboutseller text-left"> */}
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"7rem"}}>
                            <div class="customer-account-image" style={{height:"6rem",width:"6rem", padding:"1.5rem 2.3rem",fontSize:"34px",marginTop:"1.5rem"}}>N</div>
                            <span class="profile-image-edit-button" style={{ borderRadius: "50%",backgroundColor: "white",position: "relative",zIndex: "10",height: "1.5rem",width: "1.5rem",border: "1px solid gainsboro",textAlign:"center",top:"-1.8rem",left:"1.8rem"}}><i class='bx bx-edit' style={{color:"#000"}}></i></span>                           
                        </div>
                        <div style={{margin:"0.7rem 0",position: 'relative'}}>
                            <div style={{position: 'relative'}}>
                                <ShiftLabel style={{position: 'absolute',left: '20px'}} labelFor={'email-password-input-box'} title={'Email/Contact No.'} />
                                {/* <label style={{fontSize:"11px",color:"#000",marginLeft:"0.8rem"}} for="email-password-input-box">Full Name</label>  */}
                                <input onFocus={handleFocus} onBlur={handleBlur} className="form-control input-tag-for-focus" style={{ backgroundColor: "white", padding: "1.5rem 3%", borderRadius: "5px", border: "1px solid gainsboro", width: "95%",margin:"0 auto",marginBottom:"0.7rem"}} id="email-password-input-box"></input>
                            </div>                            

                            <label style={{fontSize:"11px",color:"grey",marginLeft:"0.8rem"}} for="email-password-input-box">Email ID</label> 
                            <input disabled className="form-control input-tag-for-focus" style={{ backgroundColor: "##F5F5F5", padding: "1.5rem 3%", borderRadius: "5px", border: "1px solid gainsboro", width: "95%",margin:"0 auto",marginBottom:"0.7rem"}} placeholder="nesh.28feb@gmail.com" id="email-password-input-box"></input>

                            <label style={{fontSize:"11px",color:"grey",marginLeft:"0.8rem"}} for="email-password-input-box">Password</label> 
                            <input disabled className="form-control input-tag-for-focus" style={{ backgroundColor: "##F5F5F5", padding: "1.5rem 3%", borderRadius: "5px", border: "1px solid gainsboro", width: "95%",margin:"0 auto"}} placeholder="**********" id="email-password-input-box"></input>
                            <p style={{textAlign:"right",color:"#000",fontSize:"15px",marginRight:"1rem",marginTop:"0.5rem"}}>Change Password</p>

                            <div className='mt-3' style={{position: 'relative'}}>
                                <ShiftLabel style={{position: 'absolute',left: '20px'}} labelFor={'email-password-input-box'} title={'Phone No'} />
                                {/* <label style={{fontSize:"11px",color:"#x2172",marginLeft:"0.8rem"}} for="email-password-input-box">Phone No</label>  */}
                                <input onFocus={handleFocus} onBlur={handleBlur} className="form-control input-tag-for-focus" style={{ backgroundColor: "white", padding: "1.5rem 3%", borderRadius: "5px", border: "1px solid gainsboro", width: "95%",margin:"0 auto"}} id="email-password-input-box"></input>
                            </div>
                            
                        </div>

                        <div class="sellerlocation" style={{backgroundColor: "#fff"}}>
                            <div class="container">
                                <div class="row">
                                    <div class="col-2">
                                        <label class="switch" >
                                            <input type="checkbox" />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                    <div class="col-10">
                                        <p style={{fontSize: '12px'}}>I want to recieve order update on Whatsapp</p>
                                        <p style={{fontSize: '10px'}}>Allow us to send updates via Whatsapp for order related communication</p>
                                        <p style={{fontSize: '10px'}}>We do not use Whatsapp for promotional purposes</p>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    {/* </section> */}
                    </WrapperDiv>
                    <div style={{height: '60px',position:"relative",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                        <button type="button" class="btn" style={{backgroundColor:" #000",width:"90%",color: '#fff'}}>Save Changes</button>
                    </div>
                </div>  
            </div>
        </Fragment>
    )
}
