// Створити програму для відображення результатів голосування.

// З наступними умовами:

// Як варіанти відповіді - смайлики. За замовчуванням, 5шт.

// Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.

// При натисканні на смайл - під ним змінюється значення лічильника.

// Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.




const reactions = ["👍", "👎", "💚", "💩", "🤣"];

const container = document.querySelector(".container");

const reactionElements = reactions.map((reaction) => {
  const wrapper = document.createElement("div");
  const button = document.createElement("button");
  button.innerText = reaction;
  const counter = document.createElement("div");
  counter.classList.add("counter");
  counter.innerText = 0;
  wrapper.append(button, counter);

  return wrapper;
});

reactionElements.forEach((elem) => container.appendChild(elem));




container.addEventListener('click', getVote);


function getVote(event) {

    let targetItem = event.target.closest('button');

    if (targetItem) {
        let count = targetItem.nextElementSibling;
        count.innerText++;
    }

}





