const makeEnum = (...vals) => {

    let initialObj = Object.create({
        contains(v) {
            return this[v] ? true : false;
        },
        toList() {
            return Object.keys(this).filter(k => (k !== 'contains' && k !== 'toList'));
        }
    });

    return vals.reduce((obj, v) => {
        obj[v] = v;
        return obj;
    }, initialObj);
};

export default makeEnum;
