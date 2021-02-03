import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { isNotEmptyObject } from './index';

function UseHeaderchange({newPath, newHeaderType, ...rest}) {
    if (!window['newMemory']) {
        window['newMemory'] = {};
        const event = new Event('changeGrid');
        console.log('new memory', window['newMemory']);
    }

    const { newMemory } = window;

    const [filters, setFilters] = useState({});

    const initialState = {
        path: newPath,
        headerType: newHeaderType || 'home',
        ...rest
    };

    if (!isNotEmptyObject(filters)) {
        setFilters({ ...initialState });
    }

    if (!newMemory[newPath]) newMemory[newPath] = { ...initialState };

    let handleMemoryChange = useCallback(() => {
        console.log('handleMemoryChange isworking');
        const { path, headerType } = filters;
        if (!newMemory[newPath]) {
            newMemory[newPath] = { ...initialState };
            // setFilters({
            //     ...filters,
            //     path: newPath,
            //     headerType: newHeaderType || 'home'
            // })
            // setFilters({ ...initialState });
            console.log(newMemory, initialState, 'state');
        } else {
            console.log(newMemory, 'state', '1');
            return { ...newMemory[newPath] };
        }
    }, [])

    useEffect(() => {
        window.addEventListener('changeGrid', handleMemoryChange)
        return window.removeEventListener('changeGrid', handleMemoryChange)
    }, [handleMemoryChange])
    console.log(newMemory, 'state', '2');
    return { ...newMemory[newPath] };
}

UseHeaderchange.propTypes = {
    newPath: PropTypes.string,
    headerType: PropTypes.string
}

export default UseHeaderchange;


// function UseHeaderchange(newPath, headerData) {
//     if (!window['newMemory']) {
//         window['newMemory'] = {};
//         const event =  new Event('changeOccur');
//         console.log('new memory', window['newMemory']);
//     }

//     const { newMemory } = window;

//     const [filters, setFilters] = useState({});

//     const { newHeaderType,headerValue } = headerData; 

//     if(!isNotEmptyObject(newMemory) && newPath && headerData) {
//         const initialState = {
//              path: newPath,
//              headerData
//         };
//         newMemory[newPath] = { ...initialState }
//         return setFilters({ ...initialState });
//     }    

//     if (isNotEmptyObject(newMemory) && !newMemory[newPath]) newMemory[newPath] = { ...initialState };
//     else{

//     } 

//     let handleMemoryChange = useCallback(() => {
//         const { path, headerData } = filters;
//         if (!newMemory[newPath]) {
//             newMemory[newPath] = { ...initialState };
//             setFilters({
//                 ...filters,
//                 path: newPath,
//                 headerType: newHeaderType || 'home'
//             })
//             setFilters({ ...initialState });
//             console.log(newMemory, initialState, 'state');
//         } else {
//             console.log(newMemory, 'state', '1');
//             return { ...newMemory[newPath] };
//         }
//     }, [])

//     useEffect(() => {
//         window.addEventListener('changeOccur', handleMemoryChange)
//         return window.removeEventListener('changeOccur', handleMemoryChange)
//     }, [handleMemoryChange])
//     console.log(newMemory, 'state', '2');
//     return { ...newMemory[newPath] };
// }

// UseHeaderchange.propTypes = {
//     newPath: PropTypes.string,
//     headerType: PropTypes.string
// }

// export default UseHeaderchange;


// import React, { useState, useEffect, useCallback } from 'react';
// import PropTypes from 'prop-types';

// function UseHeaderchange(newPath, newHeaderType, ...rest) {
//     if (!window['newMemory']) {
//         window['newMemory'] = {};
//         console.log('new memory', window['newMemory']);
//     }
//     const { newMemory } = window;

//     const initialState = {
//         path: '',
//         headerType: 'home',
//         ...rest
//     };
//     if (!newMemory[newPath]) newMemory[newPath] = { path: newPath, headerType: newHeaderType || 'home', ...rest };
//     // console.log(newMemory, initialState, 'state');
//     // const [filters, setFilters] = useState({ ...initialState });

//     // let handleMemoryChange = useCallback(() => {
//     //     const { path, headerType } = filters;
//     //     if (!newMemory[newPath]) {
//     //         setFilters({
//     //             ...filters,
//     //             path: newPath,
//     //             headerType: newHeaderType || 'home'
//     //         })
//     //         console.log('Hey hi');
//     //     } else {
//     //         console.log(newMemory, filters, 'state', '1');
//     //         return newMemory[newPath];
//     //     }
//     // }, [filters])

//     // useEffect(() => {
//     //     window.addEventListener('memoryChange', handleMemoryChange)
//     //     window.removeEventListener('memoryChange', handleMemoryChange)
//     // }, [filters])
//     console.log(newMemory, 'state', '2');
//     return newMemory[newPath];
// }

// UseHeaderchange.propTypes = {
//     newPath: PropTypes.string,
//     headerType: PropTypes.string
// }

// export default UseHeaderchange;