import { Card } from './card';

export class CardsCollection {
    
    public cards: Array<Card> = [];

    public setCards(cards: Array<Card>): CardsCollection {
        this.cards = cards;
        return this;
    }

    public addCard(card: Card): Card {
        this.cards.push(card);
        return card;
    } 

    public shuffle(): void {
        const originalCollection = [...this.cards];
        const shuffledCollection = [];
        while(originalCollection.length > 0) {
            const randomCard = originalCollection.splice(Math.floor(Math.random() * originalCollection.length), 1)[0];
            shuffledCollection.push(randomCard);
        } 
        this.setCards(shuffledCollection);
    }

    public cut(atIndex: number): void {
        this.setCards([...this.cards.slice(atIndex), ...this.cards.slice(0, atIndex)]);
    }

    public drawOne(): Card {
        if (this.cards.length === 0) {
            return null;
        }
        return this.cards.shift();
    }

    public draw(cardCount: number): Array<Card> {
        const drawnCards: Array<Card> = [];
        for (let i = 0; i < cardCount; i++) {
            const drawnCard = this.drawOne();
            if (drawnCard === null) {
                break;
            }
            drawnCards.push(drawnCard);
        }
        return drawnCards;
    }
}