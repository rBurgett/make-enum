/*global describe, it*/

import should from 'should';

import makeEnum from '../lib/index'

describe('makeEnum', () => {

    it('should be a function', () => makeEnum.should.be.a.Function());
    it('should return an object', () => makeEnum().should.be.an.Object());

    describe('the returned object', () => {

        it('should contain a matching key/value pair for each param sent in', () => {

            const enumishObj = makeEnum('red', 'green', 'blue');

            const isValid = Object.keys(enumishObj).reduce((b, v) => {
                return b = (enumishObj[v] === v) ? b : false;;
            }, true);

            isValid.should.be.true();

        });

    });
});
