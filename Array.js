// davaleba 1 - gaming platform

const players = [
    { name: "Nika", score: 850, level: 15, online: true },
    { name: "Ana", score: 1200, level: 20, online: true },
    { name: "Gio", score: 450, level: 8, online: false },
    { name: "Mariam", score: 1500, level: 25, online: true },
    { name: "Luka", score: 700, level: 12, online: false }
];


players.forEach(function(player) {
    console.log(player.name, player.score);
});


const highScore = players.filter(function(player) {
    return player.score > 800;
});

console.log(highScore);



const playerNames = players.map(function(player) {
    return player.name;
});

console.log(playerNames);


// ყველა არის თუ არა level 5-ზე მეტი
const allLevel5 = players.every(function(player) {
    return player.level > 5;
});

console.log(allLevel5);


// ვინმეს აქვს თუ არა 1500 ან მეტი
const has1500 = players.some(function(player) {
    return player.score >= 1500;
});

console.log(has1500);


// callback-ით გაფილტვრა
function filterPlayers(arr, condition) {
    return arr.filter(condition);
}

const onlinePlayers = filterPlayers(players, function(player) {
    return player.online === true;
});

console.log(onlinePlayers);


// game started
(function() {
    console.log("Game Started!");
})();


// countdown
function countdown(number) {

    if (number === 0) {
        console.log("GO!");
        return;
    }

    console.log(number);
    countdown(number - 1);
}

countdown(5);





// davaleba 2 - online shop

const products = [
    { name: "Laptop", price: 2500, stock: 5 },
    { name: "Phone", price: 1200, stock: 0 },
    { name: "Headphones", price: 250, stock: 15 },
    { name: "Monitor", price: 800, stock: 7 },
    { name: "Keyboard", price: 150, stock: 20 }
];


// პროდუქტის სახელი და ფასი
products.forEach(function(product) {
    console.log(product.name, product.price);
});


// 500-ზე ძვირი
const expensiveProducts = products.filter(function(product) {
    return product.price > 500;
});

console.log(expensiveProducts);


// რაც მარაგშია
const inStock = products.filter(function(product) {
    return product.stock > 0;
});

console.log(inStock);


// პროდუქტების სახელები
const productNames = products.map(function(product) {
    return product.name;
});

console.log(productNames);


// ყველა 100-ზე ძვირია?
const allAbove100 = products.every(function(product) {
    return product.price > 100;
});

console.log(allAbove100);


// რომელიმე არის 0 მარაგში?
const zeroStock = products.some(function(product) {
    return product.stock === 0;
});

console.log(zeroStock);


// callback function
function filterProducts(arr, condition) {
    return arr.filter(condition);
}

const cheapProducts = filterProducts(products, function(product) {
    return product.price < 500;
});

console.log(cheapProducts);


// iife
(function() {
    console.log("Welcome to Online Shop!");
})();





// davaleba 3 - movie rating analyzer

const movies = [
    { title: "Inception", rating: 9.2, year: 2010 },
    { title: "Avatar", rating: 7.8, year: 2009 },
    { title: "Interstellar", rating: 8.7, year: 2014 },
    { title: "Joker", rating: 8.4, year: 2019 },
    { title: "Titanic", rating: 7.9, year: 1997 }
];


// ფილმის სახელი და rating
movies.forEach(function(movie) {
    console.log(movie.title, movie.rating);
});


// rating 8-ზე მეტი
const goodMovies = movies.filter(function(movie) {
    return movie.rating > 8;
});

console.log(goodMovies);


// 2010 წლის შემდეგ
const newMovies = movies.filter(function(movie) {
    return movie.year > 2010;
});

console.log(newMovies);


// მარტო ფილმების სახელები
const movieNames = movies.map(function(movie) {
    return movie.title;
});

console.log(movieNames);


// ყველას აქვს 7-ზე მეტი rating?
const allAbove7 = movies.every(function(movie) {
    return movie.rating > 7;
});

console.log(allAbove7);


// არის 9-ზე მაღალი rating?
const above9 = movies.some(function(movie) {
    return movie.rating > 9;
});

console.log(above9);


// callback-ით ძებნა
function findMovies(arr, condition) {
    return arr.filter(condition);
}

const oldMovies = findMovies(movies, function(movie) {
    return movie.year < 2010;
});

console.log(oldMovies);


// iife
(function() {
    console.log("🎬 Movie Analyzer Started!");
})();


// countdown
function movieCountdown(number) {

    if (number === 0) {
        console.log("Start Watching!");
        return;
    }

    console.log(number);
    movieCountdown(number - 1);
}

movieCountdown(5);