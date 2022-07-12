import {formatAsPrice} from './utils';

describe('formatAsPrice', () => {
    it('formatAsPrice should work correctly', () => {
        expect(formatAsPrice(20)).toBe('$20.00');
    })
})