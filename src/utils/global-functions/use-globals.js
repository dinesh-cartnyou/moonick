import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation, useParams } from 'react-router-dom';

function useGlobals() {
    const location = useLocation();
    const history = useHistory();
    const params = useParams();

    let globals = { location, history, params };
    return (
        globals
    )
}

export default useGlobals;
