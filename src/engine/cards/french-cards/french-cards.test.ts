import { FrenchCard, Suit, valueToLabel } from './french-card';
import { frenchCards } from './french-cards';

describe ('Test card game generation', () => {
    it('should generate 52 elements', () => {
        expect(frenchCards.length).toBe(52);
    });
    it('should only generate french cards', () => {
        for (const frenchCard of frenchCards) {
            expect(frenchCard).toBeInstanceOf(FrenchCard);
        }
    });
    it('should generate cards with distinct ids', () => {
        const encounteredIds = [];
        for (const frenchCard of frenchCards) {
            expect(encounteredIds).not.toContain(frenchCard.id);
            encounteredIds.push(frenchCard.id);
        }
    });
    it('should generate 13 cards of each suit', () => {
        for (const suit in Suit) {
            expect (frenchCards.filter(card =>card.suit === Suit[suit]).length).toBe(13);
        }
    });
    it('should generate 4 cards of each value', () => {
        for (let value = 0; value < valueToLabel.length; value++) {
            expect (frenchCards.filter(card => card.value === value).length).toBe(4);
        }
    });
        
    it ('should generate distinct cards', () => {
        const encounteredCardsAsString = [];
        for (const card of frenchCards) {
            expect(encounteredCardsAsString).not.toContain(card.value + card.suit);
        }
    });
}); 