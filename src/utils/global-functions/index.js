export function isNotEmptyArray(data) {
    if (Array.isArray(data) && data.length > 0) {
        return true;
    } else return false;
}

export function isNotEmptyObject(data) {
    if (typeof (data) === 'object' && Object.keys(data).length > 0) {
        return true;
    } else return false;
}

export function isNotEmptyString(data) {
    if (typeof (data) === 'string' && data.length > 0) {
        return true;
    } else return false;
}

export function isNumber(data) {
    if (typeof (data) === 'number' && data.length > 0) {
        return true;
    } else return false;
}
export function isUndefined(data) {
    if (typeof (data) === 'undefined') {
        return true;
    } else return false;
}
