/*global describe, it*/

import should from 'should';

import makeEnum from '../src/index';

describe('makeEnum', () => {

    it('should be a function', () => makeEnum.should.be.a.Function());
    it('should return an object', () => makeEnum().should.be.an.Object());

    describe('the returned object', () => {

        const val1 = 'red',
            val2 = 'green',
            val3 = 'blue';

        const enumishObj = makeEnum(val1, val2, val3);

        it('should contain a matching key/value pair for each param sent in', () => {

            const isValid = Object.keys(enumishObj).reduce((b, v) => {
                return b = (enumishObj[v] === v) ? b : false;
            }, true);

            isValid.should.be.true();

        });

        it('should have a method called contains', () => enumishObj.contains.should.be.a.Function());

        describe('the contains method', () => {
            it('should take a value and return a boolean indicating if it is a valid enum value', () => {
                enumishObj.contains(val1).should.be.true();
                enumishObj.contains('something_else').should.be.false();
            });
        });

        it('should have a method called toList', () => enumishObj.toList.should.be.a.Function());

    });
});
