document.addEventListener('DOMContentLoaded', () => { 
    let cardArr = [
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-creame',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-creame',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        }
    ];

    cardArr.sort(() => 0.5 - Math.random());

    let grid = document.querySelector('.grid');
    let resultDisplay = document.querySelector('#result');
    let reset = document.querySelector('#reset');
    let cardChoosen = [];
    let cardChoosenId = [];
    let cardsWon = [];
    function createBoard() {
        for (let i = 0; i < cardArr.length; i++){
            let card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        const optionOneId = cardChoosenId[0];
        const optionTwoId = cardChoosenId[1];
        if (cardChoosen[0] === cardChoosen[1]) {
            alert('You Found A Match!');
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cards[optionOneId].style.visibility = 'hidden';
            cards[optionTwoId].style.visibility = 'hidden';
            cardsWon.push(cardChoosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            alert('Not Matched,Try Again!');
        }
        cardChoosen = [];
        cardChoosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArr.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!';
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        if (!cardChoosenId.includes(cardId)) {
            // console.log(cardChoosen, cardId);
        cardChoosen.push(cardArr[cardId].name);
        cardChoosenId.push(cardId);
        this.setAttribute('src', cardArr[cardId].img);
        if (cardChoosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
        }
    }

    
    reset.addEventListener('click', (e) => {
        console.log(e.target);
        cardChoosen = [];
        cardChoosenId = [];
        cardsWon = [];
        resultDisplay.textContent = '';
        location.reload();
    })

    createBoard();
});