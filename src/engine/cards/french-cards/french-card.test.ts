
import { FrenchCard, Suit } from './french-card';

describe ('Test card generation', () => {
    it('should generate a card', () => {
        const [suit, value, id ] = [Suit.Hearts, 10, 1];
        const card = new FrenchCard(suit, value, id);
        expect(card.suit).toBe(suit);
        expect(card.value).toBe(value);
        expect(card.id).toBe(id);
    });
}); 