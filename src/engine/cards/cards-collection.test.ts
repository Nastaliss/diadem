import { Card } from './card';
import { CardsCollection } from './cards-collection';

describe('Test collection creation', () => {
    it('should create a creation with no card by default', () => {
        expect(new CardsCollection().cards).toMatchObject([]);
    });
});

describe('Test setting card', () => {
    it('should set cards correctly', () => {
        const cards = [new Card(0), new Card(1), new Card(2)];
        const collection = new CardsCollection();
        collection.cards = cards;
        expect(collection.cards).toMatchObject(cards);
    });
    it('should set cards correctly via chaining operator', () => {
        const cards = [new Card(0), new Card(1), new Card(2)];
        expect(new CardsCollection().setCards(cards).cards).toMatchObject(cards);
    });
});

describe('Test adding cards', () => {
    it('should correctly add a card', () => {
        const collection = new CardsCollection();
        const card = new Card(0);
        collection.addCard(card);
        expect(collection.cards[0]).toMatchObject(card);
    }); 
});

describe('Test shuffling cards', () => {
    let collection: CardsCollection;
    beforeEach(() => {
        collection = new CardsCollection();
        collection.cards = [new Card(0), new Card(1), new Card(2), new Card(3)];
    });
    it('should not modify collection size', () => {
        const originalCollectionSize = collection.cards.length;
        collection.shuffle();
        expect(collection.cards.length).toBe(originalCollectionSize);
    });
    it('should only modify cards order', () => {
        // Deep copy the array
        const originalCards = [...collection.cards];
        collection.shuffle();
        for (const card of collection.cards) {
            expect(originalCards).toContain(card);
        }
    });
});



describe('Test card operations', () => {
    let collection: CardsCollection;
    beforeEach(() => {
        collection = new CardsCollection();
        collection.cards = [new Card(0), new Card(1), new Card(2), new Card(3)];
    });
    describe('Test shuffling cards', () => {
        it('should not modify collection size', () => {
            const originalCollectionSize = collection.cards.length;
            collection.shuffle();
            expect(collection.cards.length).toBe(originalCollectionSize);
        });
        it('should only modify cards order', () => {
            const originalCards = [...collection.cards];
            collection.shuffle();
            for (const card of collection.cards) {
                expect(originalCards).toContain(card);
            }
        });
    });
    describe('Test cutting cards', () => {
        it('should not modify collection size', () => {
            const originalCollectionSize = collection.cards.length;
            collection.cut(1);
            expect(collection.cards.length).toBe(originalCollectionSize);
        });
        it('should return original collection if atIndex is ouside of bounds', () => {
            const originalCollection = [...collection.cards];
            collection.cut(collection.cards.length);
            expect(collection.cards).toMatchObject(originalCollection);
        });
        it('should cut correctly if index is inside bounds', () => {
            collection.cut(1);
            expect(collection.cards).toMatchObject([new Card(1), new Card(2), new Card(3), new Card(0)]);
        });
    });
    describe('Test single card drawing', () => {
        it('should decrease collection size by one', () => {
            const originalCollectionSize = collection.cards.length;
            collection.drawOne();
            expect(collection.cards.length).toEqual(originalCollectionSize - 1);
        });
        it('should draw the first card', () => {
            const firstCard = collection.cards[0];
            expect(collection.drawOne()).toMatchObject(firstCard);
        });
        it('should return null if no card are available', () => {
            const emptyCollection = new CardsCollection();
            expect(emptyCollection.drawOne()).toBeNull();
        });
    });

    describe('Test many card drawing', () => {
        it('should decrease collection size by two when drawing two cards', () => {
            const originalCollectionSize = collection.cards.length;
            collection.draw(2);
            expect(collection.cards.length).toEqual(originalCollectionSize - 2);
        });
        it('should not decrease collection size when drawing zero cards', () => {
            const originalCollectionSize = collection.cards.length;
            collection.draw(0);
            expect(collection.cards.length).toEqual(originalCollectionSize);
        });
        it('should only draw available cards if cardCount is more than collection\'s card count', () => {
            const attemptedDrawnCardSize = collection.cards.length + 1;
            const drawnCards = collection.draw(attemptedDrawnCardSize);
            expect(drawnCards.length).not.toEqual(attemptedDrawnCardSize);
        });
        it('should empty collection when attempting to draw more cards than available', () => {
            collection.draw(collection.cards.length);
            expect(collection.cards).toMatchObject([]);
        });
        // it('should draw the first card without argument', () => {
        //     const firstCard = collection.cards[0]
        //     expect(collection.drawOne()).toMatchObject(firstCard);
        // });
        // it('should return null if no card are available', () => {
        //     const emptyCollection = new CardsCollection()
        //     expect(emptyCollection.drawOne()).toBeNull();
        // });
    });
});