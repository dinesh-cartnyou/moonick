import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

function UseHeaderchange(newPath, newHeaderType, ...rest) {
    if (!window['newMemory']) {
        window['newMemory'] = {};
        console.log('new memory', window['newMemory']);
    }
    const { newMemory } = window;

    const initialState = {
        path: '',
        headerType: 'home',
        ...rest
    }
    if (!newMemory[newPath]) newMemory[newPath] = initialState;

    const [filters, setFilters] = useState(initialState);

    let handleMemoryChange = useCallback(() => {
        const { path, headerType } = filters;
        if (!newMemory[newPath]) {
            setFilters({
                ...filters,
                path: newPath,
                headerType: newHeaderType || 'home'
            })
        } else {
            return [filters, setFilters];
        }
    }, [filters])

    useEffect(() => {
        window.addEventListener('memoryChange', handleMemoryChange)
        window.removeEventListener('memoryChange', handleMemoryChange)
    }, [filters])

    return [filters, setFilters];
}

UseHeaderchange.propTypes = {
    newPath: PropTypes.string,
    headerType: PropTypes.string
}

export default UseHeaderchange;