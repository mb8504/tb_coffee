const reviews = [
    {
        id: 1,
        img: 'images/quote 1.png',
    },
    {
        id: 2,
        img: 'images/quote 2.png',
    },
    {
        id: 3,
        img: 'images/quote 3.png',
    },
    {
        id: 4,
        img: 'images/quote 4.png',
    },
    {
        id: 5,
        img: 'images/quote 5.png',
    }
];
const time = 4000;
const img = document.getElementById('quote-img');


let i = 0;

function changeImg(){
    const item = reviews[i];
    img.src = item.img;

    if(i < reviews.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;


