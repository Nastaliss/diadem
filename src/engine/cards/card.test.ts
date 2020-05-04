import { Card } from './card';
describe('Test card creation', () => {
    it('should create a card with an id', () => {
        const id = 0;
        expect(new Card(id).id).toBe(id);
    });
});