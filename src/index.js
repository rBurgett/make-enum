const makeEnum = (...vals) => {

    if(vals.some(v => !v)) throw new Error('You cannot add empty strings to make-enum.');

    let initialObj = Object.create({
        contains(v) {
            return this[v] ? true : false;
        },
        toList() {
            return vals;
        }
    });

    const objToReturn = vals.reduce((obj, v) => {
        obj[v] = v;
        return obj;
    }, initialObj);

    return Object.freeze ? Object.freeze(objToReturn) : objToReturn;
};

export default makeEnum;
