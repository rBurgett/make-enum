const makeEnum = (...vals) => {
    return vals.reduce((obj, v) => {
        obj[v] = v;
        return obj;
    }, {
        contains(s) {
            return this[s] ? true : false;
        }
    });
};

export default makeEnum;
