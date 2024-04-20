// console.log("Hiee There!");

const jokeContainer = document.querySelector('#joke');
const btn = document.querySelector('#btn');
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

// let getJoke = () => {
//     fetch(url)
//         .then(data => data.json())
//         .then(item => console.log(item));
// }
// getJoke();

let getJoke = () => {
    fetch(url)
        .then(data => data.json())
        .then(item => {
            jokeContainer.textContent = `${item.joke}`;
        });
}
btn.addEventListener('click', getJoke);
getJoke();