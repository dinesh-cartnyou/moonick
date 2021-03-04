import React, { Fragment } from 'react';
import {RedNavbar} from "../Components/RedNavbar";
import { makeStyles } from '@material-ui/core/styles';
import {TextField} from '@material-ui/core';
import {
    fade,
    ThemeProvider,
    withStyles,
    createMuiTheme,
  } from '@material-ui/core/styles';
import WrapperDiv from '../Components/wrapper-div';

  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#c2172e',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'gray',
        },
        '&:hover fieldset': {
          borderColor: 'gainsboro',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#c2172e',
        },
      },
    },
  })(TextField);

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1.5),
            width: '94%',
            backgroundColor:"white",
            padding: '-100px'
        },
    },
}));


export const Password = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{height: '100vh', backgroundColor: '#f5f5f5'}}>
                    <RedNavbar navbar="Change Password"></RedNavbar>
                    <WrapperDiv className={'aboutseller text-left'} isFooterPresent={true} footerHeight={'60px'} headerHeight={'48px'} >
                    {/* <section className="bodypanelmian aboutseller text-left"> */}
                      <div style={{height:""}}>
                        <div class="row" style={{height:"100%", width: '100%'}}>
                            <div class="col-2" style={{display:"flex",padding:"none"}}>
                            <div class="customer-account-image">N</div>                          
                        </div>
                        <div class="col-6 customer-account-details" style={{marginLeft:"1.4rem"}}>
                            <p style={{fontSize:"18px",marginTop:"0.3rem"}}>NEERAJ</p>
                            <p style={{fontSize:"14px"}}>nesh.28feb@gmail.com</p>
                            <p style={{fontSize:"13px"}}>+91-9123410101</p>
                        </div>
                            
                        </div>
                      </div>
                      <form className={classes.root} noValidate autoComplete="off">
                          <CssTextField
                              className={classes.margin}
                              required="true"
                              label="New Password"
                              variant="outlined"
                              id="custom-css-outlined-input"
                          />                                        
                          <CssTextField
                              className={classes.margin}
                              required="true"
                              label="Confirm Password"
                              variant="outlined"
                              id="custom-css-outlined-input"
                          />                                                        
                      </form>

                    {/* </section> */}
                    </WrapperDiv>
                    <div style={{height:'60px',position:"relative",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                      <button type="button" class="btn" style={{backgroundColor:" #000",width:"90%",color: '#fff'}}>Save Changes</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}