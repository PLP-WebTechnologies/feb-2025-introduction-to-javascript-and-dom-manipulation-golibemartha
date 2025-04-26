document.getElementById('buttonA').addEventListener('click', () => {
    const title = document.getElementById('welcome');
    title.textContent = 'Wow you clicked Button A 😎😁';
    title.classList.add('highlight');
  });
  
  document.getElementById('buttonB').addEventListener('click', () => {
    if (!container.querySelector('.buttonB-message')) {
        const newElement = document.createElement('p');
        newElement.textContent = 'You just clicked Button B 🎉🎊';
        newElement.classList.add('buttonB-message'); 
        container.appendChild(newElement);
    }
});

const fruits = ['Apple🍎', 'Banana🍌', 'Cherry🍒', 'Strawberries🍓', 'Mango🥭'];

document.getElementById('addFruit').addEventListener('click', () => {
    const fruitList = document.getElementById('fruits');
    fruitList.innerHTML = ''; 

    for (const fruit of fruits) {
        const listItem = document.createElement('li');
        listItem.textContent = fruit;
        fruitList.appendChild(listItem);
    }

    changeColor();
});

function changeColor(){
    const box = document.getElementById('fruits');
    if(box.style.background == 'lightcoral'){
        box.style.background = 'lightgreen';
    }else{
        box.style.background = 'lightcoral';

    }
}
