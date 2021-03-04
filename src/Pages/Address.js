/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import {TextField} from '@material-ui/core';
import {
    fade,
    ThemeProvider,
    withStyles,
    createMuiTheme,
  } from '@material-ui/core/styles';

  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#000',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'gainsboro',
        },
        '&:hover fieldset': {
          borderColor: 'gainsboro',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#000',
        },
      },
    },
  })(TextField);

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1.5),
            width: '90%',
        },
    },
}));


export const Address = () => {
    const classes = useStyles();

     function Home(){
        const home=document.getElementById("home-address-button");
        console.log(home)
        const office=document.getElementById("office-address-button");

        if(home.style.color=="grey"){
          home.style.color="#000";
          home.style.border="2px solid #000"
          office.style.color="grey"
          office.style.border="gainsboro solid 2px";
        }
      }
    
      function office(){
        const home=document.getElementById("home-address-button");
        const office=document.getElementById("office-address-button");
        if(office.style.color=="grey"){
          office.style.color="#000";
          office.style.border="#000 solid 2px"
          home.style.color="grey"
          home.style.border="gainsboro solid 2px";
        }
      }
    

    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{backgroundColor:"#f5f5f5", height:"calc(100vh)"}}>
                    <div class="container" style={{ backgroundColor: "white",height: "100vh" }}>
                    <Navbar />
                    <section class="bodypanelmian" style={{ height: "calc(100% - 127px)",overflow:"scroll",display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                            {/* <section className="aboutseller"> */}
                                {/* <div className="sellerlocation" style={{ backgroundColor: "white" }}> */}
                                    <p style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                        fontSize:"18px",
                                        marginTop: "330px"
                                    }}>Enter Your Shipping Address</p>
                                    <form className={classes.root} noValidate autoComplete="off">
                                        <CssTextField
                                            className={`${classes.margin}`}
                                            required="true"
                                            label="Phone No"
                                            variant="outlined"
                                            id="custom-css-outlined-input"
                                        />                                        
                                        <CssTextField
                                            className={classes.margin}
                                            required="true"
                                            label="Email"
                                            variant="outlined"
                                            id="custom-css-outlined-input"
                                        />                                         
                                        <CssTextField
                                            className={classes.margin}
                                            required="true"
                                            label="Full Name"
                                            variant="outlined"
                                            id="custom-css-outlined-input"
                                        />                                         
                                        <CssTextField
                                            className={classes.margin}
                                            required="true"
                                            label="Address"
                                            variant="outlined"
                                            id="custom-css-outlined-input"
                                        />                                         
                                        <CssTextField
                                            className={classes.margin}
                                            required="true"
                                            label="Pin code"
                                            variant="outlined"
                                            id="custom-css-outlined-input"
                                        />         
                                                        
                                    </form>
                                    <div class="container" style={{ width: '93%' }}>
                                        <div class="row" style={{marginTop:"10px", marginBottom:"10px"}}>
                                            <div class="col-6">
                                                <CssTextField
                                                className={classes.margin}
                                                required="true"
                                                label="Locality"
                                                variant="outlined"
                                                id="custom-css-outlined-input"
                                                style={{marginRight:"-0.5rem"}}
                                            />                                                
                                        </div>
                                            <div class="col-6">
                                                <CssTextField
                                                className={classes.margin}
                                                required="true"
                                                label="City"
                                                variant="outlined"
                                                id="custom-css-outlined-input"
                                                style={{marginLeft:"-0.5rem"}}
                                            />                                               
                                         </div>
                                        </div>
                                        <div class="row" style={{marginTop:"10px", marginBottom:"10px"}}>
                                            <div class="col-6">
                                                <CssTextField
                                                    className={classes.margin}
                                                    required="true"
                                                    label="State"
                                                    variant="outlined"
                                                    id="custom-css-outlined-input"
                                                    style={{marginRight:"-0.5rem"}}
                                                />                                                
                                            </div>
                                            <div class="col-6">
                                                <CssTextField
                                                className={classes.margin}
                                                required="true"
                                                label="Landmark"
                                                variant="outlined"
                                                id="custom-css-outlined-input"
                                                style={{marginLeft:"-0.5rem"}}
                                            />    
                                            </div>
                                        </div>
                                    </div>
                                    <div class="container mb-3" style={{ width: '93%' }}>
                                        <div class="row">
                                             <p style={{fontSize:"14px",color:"grey",margin:"0.5rem 1rem"}}>Address Type</p>
                                         </div>
                                         <div class="row">
                                             <div class="col-4" style={{marginRight:"0.3rem"}}>
                                                <button className="btn" id="home-address-button" onClick={Home} style={{ padding: "4% 3%", border: "#000 solid 2px", borderRadius:"3px", backgroundColor: "white", color: "#000",width:"115%" }}><b>Home</b></button>
                                             </div>
                                             <div class="col-4">
                                                <button className="btn" id="office-address-button" onClick={office} style={{ padding: "4% 3%", border: "gainsboro solid 2px", borderRadius:"3px", backgroundColor: "white", color: "grey",width:"115%" }}><b>Office</b></button>
                                             </div>
                                         </div>
                                    </div>                                    
                                {/* </div> */}
                            {/* </section> */}
                    </section>
                    <div className='footer d-flex justify-content-center align-items-center' style={{height:"62px"}}>
                        <button type="button" class="btn" style={{padding:"0 15px",height: "50px",width:"calc(100% - 30px)",background: "#000",color: "#fff"}}>SAVE THIS ADDRESS</button>
                    </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
