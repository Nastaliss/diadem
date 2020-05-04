import { Card } from '../card';


export enum Suit {
    Clubs = 'Clubs',
    Diamonds = 'Diamonds',
    Hearts = 'Hearts',
    Spades = 'Spades',
}

export const valueToLabel = [
    'Ace', 
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Jack',
    'Queen',
    'King',
]; 

export class FrenchCard extends Card {
    suit: Suit;
    value: number;
    valueLabel: string

    constructor(suit: Suit, value: number, id: number) {
        super(id);
        this.suit = suit;
        this.value = value;
        this.valueLabel = valueToLabel[value];
    }
}

