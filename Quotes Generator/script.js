let button = document.getElementById('button');
let result = document.getElementById('quoteResult');

button.addEventListener('click', function () {
    let index = Math.floor(Math.random() * quotes.length);
    result.innerHTML = `<img src='${quotes[index].img}' /><br>${quotes[index].qoute}`;
    }
); 

let quotes = [
    {qoute: 'For my part, I travel not to go anywhere, but to go. I travel for travel’s sake. The great affair is to move', img: 'img/1.jpg'},
    {qoute: 'Adventure is worthwhile', img: 'img/2.jpg'},
    {qoute: 'Traveling – it leaves you speechless, then turns you into a storyteller', img: 'img/3.jpg'},
    {qoute: 'We travel, some of us forever, to seek other places, other lives, other souls', img: 'img/4.jpg'},
    {qoute: 'A journey is best measured in friends, rather than miles', img: 'img/5.jpg'},
    {qoute: 'The gladdest moment in human life, me thinks, is a departure into unknown lands', img: 'img/6.jpg'},
    {qoute: 'No place is ever as bad as they tell you it’s going to be', img: 'img/7.jpg'},
    {qoute: 'I am not the same, having seen the moon shine on the other side of the world', img: 'img/8.jpg'},
    {qoute: 'Travel makes one modest. You see what a tiny place you occupy in the world', img: 'img/9.jpg'},
    {qoute: 'We travel not to escape life, but for life not to escape us', img: 'img/10.jpg'},
    {qoute: 'The man who goes alone can start today; but he who travels with another must wait till that other is ready', img: 'img/11.jpg'},
    {qoute: 'To awaken alone in a strange town is one of the pleasantest sensations in the world', img: 'img/12.jpg'},
    {qoute: 'The life you have led doesn’t need to be the only life you have', img: 'img/13.jpg'},
    {qoute: 'Broad, wholesome, charitable views of men and things cannot be acquired by vegetating in one little corner of the earth all of one’s lifetime', img: 'img/14.jpg'},
    {qoute: 'Man cannot discover new oceans unless he has the courage to lose sight of the shore', img: 'img/15.jpg'},
    {qoute: 'The use of traveling is to regulate imagination with reality, and instead of thinking of how things may be, see them as they are', img: 'img/16.jpg'},
    {qoute: 'The world is a book, and those who do not travel read only one page', img: 'img/17.jpg'},
    {qoute: 'Travel and change of place impart new vigor to the mind', img: 'img/18.jpg'},
    {qoute: 'Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do', img: 'img/19.jpg'},
    {qoute: 'Once a year, go someplace you’ve never been before', img: 'img/20.jpg'},
    {qoute: 'Travel is the only thing you buy that makes you richer', img: 'img/21.jpg'},
    {qoute: 'To travel is to discover that everyone is wrong about other countries', img: 'img/22.jpg'},
    {qoute: 'See the world. It’s more fantastic than any dream made or paid for in factories', img: 'img/23.jpg'},
    {qoute: 'Traveling tends to magnify all human emotions', img: 'img/24.jpg'},
    {qoute: 'You don’t have to be rich to travel well', img: 'img/25.jpg'},
];



// button.addEventListener('click', function () {
//     result.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
//     }
// );

// let quotes = [
//     'For my part, I travel not to go anywhere, but to go. I travel for travel’s sake. The great affair is to move',
//     'Adventure is worthwhile',
//     'Traveling – it leaves you speechless, then turns you into a storyteller',
//     'We travel, some of us forever, to seek other places, other lives, other souls',
//     'A journey is best measured in friends, rather than miles',
//     'The gladdest moment in human life, me thinks, is a departure into unknown lands',
//     'No place is ever as bad as they tell you it’s going to be',
//     'I am not the same, having seen the moon shine on the other side of the world',
//     'Travel makes one modest. You see what a tiny place you occupy in the world',
//     'We travel not to escape life, but for life not to escape us',
//     'The man who goes alone can start today; but he who travels with another must wait till that other is ready',
//     'To awaken alone in a strange town is one of the pleasantest sensations in the world',
//     'The life you have led doesn’t need to be the only life you have',
//     'Broad, wholesome, charitable views of men and things cannot be acquired by vegetating in one little corner of the earth all of one’s lifetime',
//     'Man cannot discover new oceans unless he has the courage to lose sight of the shore',
//     'The use of traveling is to regulate imagination with reality, and instead of thinking of how things may be, see them as they are',
//     'The world is a book, and those who do not travel read only one page',
//     'Travel and change of place impart new vigor to the mind',
//     'Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do',
//     'Once a year, go someplace you’ve never been before',
//     'Travel is the only thing you buy that makes you richer',
//     'To travel is to discover that everyone is wrong about other countries',
//     'See the world. It’s more fantastic than any dream made or paid for in factories',
//     'Traveling tends to magnify all human emotions',
//     'You don’t have to be rich to travel well'
//   ];



