const makeEnum = (...vals) => {

    let initialObj = Object.create({
        contains(v) {
            return this[v] ? true : false;
        },
        toList() {
            return vals;
        }
    });

    return vals.reduce((obj, v) => {
        obj[v] = v;
        return obj;
    }, initialObj);
};

export default makeEnum;
