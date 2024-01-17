import { sum } from "./sum";

describe('Math', () => {
    it('Shoulbe be return sum A and B', () => {
        expect(sum(2, 2)).toBe(4)
    })
})