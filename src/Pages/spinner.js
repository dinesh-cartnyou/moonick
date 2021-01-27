import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

function Spinner() {
    return (
        <div>
            <CircularProgress />
        </div>
    )
}

Spinner.propTypes = {

}

export default Spinner;

