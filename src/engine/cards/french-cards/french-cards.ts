import { FrenchCard, Suit, valueToLabel } from './french-card';



export const frenchCards: Array<FrenchCard> = [];

const TOTAL_CARDS_COUNT = 52;

for(let cardIndex = 0; cardIndex<TOTAL_CARDS_COUNT; cardIndex++) {

    frenchCards.push(generateFrenchCardAtIndex(cardIndex));
}

function generateFrenchCardAtIndex (index: number )  {
    const suit = Suit[Object.keys(Suit)[Math.floor(index / TOTAL_CARDS_COUNT * Object.keys(Suit).length)]];
    const value = index % valueToLabel.length;
    // console.log(Value) 
    return new FrenchCard (suit, value, index);
}