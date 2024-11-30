const { expect } = require('chai');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should round both numbers up correctly and return the sum', () => {
        expect(calculateNumber(1.5, 2.5)).to.equal(5); // 2 + 3 = 5
    });

    it('should round both numbers down correctly and return the sum', () => {
        expect(calculateNumber(1.4, 2.4)).to.equal(3); // 1 + 2 = 3
    });

    it('should handle one number rounding up and the other rounding down', () => {
        expect(calculateNumber(1.6, 2.3)).to.equal(4); // 2 + 2 = 4
    });

    it('should round negative numbers correctly', () => {
        expect(calculateNumber(-1.5, -2.5)).to.equal(-4); // -2 + -2 = -4
    });

    it('should round zero correctly', () => {
        expect(calculateNumber(0.4, 0.6)).to.equal(1); // 0 + 1 = 1
    });

    it('should return the correct sum when inputs are already integers', () => {
        expect(calculateNumber(5, 10)).to.equal(15); // 5 + 10 = 15
    });

    it('should handle very small fractional numbers correctly', () => {
        expect(calculateNumber(0.1, 0.2)).to.equal(0); // 0 + 0 = 0
    });
});
