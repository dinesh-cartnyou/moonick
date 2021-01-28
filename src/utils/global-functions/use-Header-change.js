import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function useHeaderchange(newPath, newHeaderType) {
    if (!window['newMemory']) {
        window['newMemory'] = {};
    }
    const { memory: newMemory } = window;

    const initialState = {
        path: '',
        headerType: 'home',
        ...rest
    }
    memory[newPath] = initialState;
    const [filters, setFilters] = useState(initialState);

    useEffect(() => {
        window.addEventListener('memoryChange', () => {
            const { path, headerType } = filters;
            if (!memory[newPath]) {
                setFilters({
                    ...filters,
                    path: newPath,
                    headerType: newHeaderType || 'home'
                })
            } else {
                return [filters, setFilters];
            }
        })
        window.removeEventListener('memoryChange', () => {
            const { path, headerType } = filters;
            if (!memory[newPath]) {
                setFilters({
                    ...filters,
                    path: newPath,
                    headerType: newHeaderType || 'home'
                })
            } else {
                return [filters, setFilters];
            }
        })
    }, [])



    return [filters, setFilters];
}

export default useHeaderchange;