var assert = require("assert");
const { it } = require("mocha");
const Calculate = require("./factorial");
var calculate = require("./factorial")


describe('Calculate', () => {
    describe('.factorial', () => {
        it('will test 5! is equal to 120', () => {
            //setup
            const input = 5;
            const expect = 120;
            //excersice
            const answer = Calculate.factorial(input);
            //verify
            assert.equal(answer, expect);
        })
        it('will test 3! is equal to 6', () => {
            //setup
            const input = 3;
            const expect = 6;
            //excerise
            const answer = Calculate.factorial(input);
            //verify
            assert.equal(answer, expect);
        })
        it('returns 0 when 0!', () => {
            //setup
            const input = 0;
            const expect = 0;
            //excersice
            const answer = Calculate.factorial(expect);
            //verify
            assert.equal(answer, expect);
        })
    });
  });