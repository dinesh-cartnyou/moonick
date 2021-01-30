import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import style from './top-most-categories.scss';
import { isNotEmptyArray } from '../utils/global-functions';
import useGlobals from '../utils/global-functions/use-globals';

function TopMostCategories({ data }) {
    const globals = useGlobals();
    // const history = useHistory();
    // let location = useLocation();
    const { location } = globals;
    const pathname = location && location.pathname.toString();
    const pathValue = pathname && pathname.substring(pathname.lastIndexOf('/') + 1);
    // console.log(location, 'location', globals, 'globals', pathValue);
    return (
        <div className='top-most-categories '>
            {
                isNotEmptyArray(data) &&
                <ul className='d-flex align-items-center category-list'>
                    {
                        data.map(data => {
                            let routeName = data && data.route && data.route.toString();
                            let routeValue = routeName && routeName.substring(routeName.lastIndexOf('/') + 1);
                            // console.log(pathname, pathValue, data.route, 'data', routeValue, routeName);
                            return (
                                <li key={data.key} className={(pathValue === routeValue) ? 'active list-item' : 'list-item'}>
                                    <Link to={{ pathname: data.route, state: location.state }}>
                                        {data.name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            }
        </div>
    )
}

// function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             // hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box p={3}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

// const useStyles = makeStyles(theme => ({
//     root: {
//         flexGrow: 1,
//         backgroundColor: theme.palette.background.paper
//     }
// }));

// function TopMostCategories({ data }) {
//     const classes = useStyles();
//     const [value, setValue] = useState(data[0].name);
//     const history = useHistory();
//     const location = useLocation();

//     useEffect(() => {
//         setValue(data[0].name);
//     }, []);

//     const handleClick = (event, data) => {
//         event.preventDefault();
//         setValue(data.name);
//         history.push({
//             pathname: data.route,
//             state: location.state
//         })
//     }
//     console.log(value, 'value', data[0].name);
//     return (
//         <div className={`top-most-categories' ${classes.root}`}>
//             <AppBar position="static">
//                 {
//                     data && data.length > 0 &&
//                     <Tabs value={value} aria-label="simple tabs example">
//                         {
//                             data.map(data => {
//                                 return (
//                                     <Tab onClick={(e) => handleClick(e, data)} label={data.name} key={data.key} />
//                                 )
//                             })
//                         }
//                     </Tabs>
//                 }

//             </AppBar>
//             {
//                 data && data.length > 0 && data.map((data, dataIndex) => {
//                     return (
//                         <TabPanel value={value} index={dataIndex}>
//                             {data.component}
//                         </TabPanel>
//                     )
//                 })

//             }
//         </div>
//     );
// }

TopMostCategories.propTypes = {
    data: PropTypes.array
};

export default TopMostCategories;
