function playingCards(face, suit){
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'L', 'M', 'Q', 'K', 'A'];
    const suits = {
        S : '♠',
        H : '♥',
        D : '♦',
        C : '♣',
    };
    if(!(faces.includes(face) && suits[suit])){
        throw new Error('Invalid face or suit')
    }
    // if(face !== face.toUpperCase()){
         
    // }
    let cardObj = {
        face,
        suit,
        toString(){
            console.log(this.face + suits[this.suit])
        }
    };
    return cardObj;
}
let card = playingCards('A','S');
card.toString();