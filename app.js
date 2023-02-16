const input = document.querySelector("#input")
const button = document.querySelector("#button")
const form = document.querySelector("#form")
const list = document.querySelector("#list")

let text = '';

const checkButton = () => {
    if(text == '') {
        button.disabled = true
    } else {
        button.disabled = false
    }
}

const addTask = () => {
    const newTask = `<li>${text}</li>`
    list.innerHTML = list.innerHTML + newTask;  
    input.value = '';
    text = ''; 
    checkButton();   
}

const markDoneUndone = (element) => {
    if(element.classList.contains("done")) {
        element.classList.remove("done")
    } else {
    element.classList.add("done")
    }
}

input.addEventListener("keyup", e => {
    text = e.target.value
    checkButton();
})

button.addEventListener("click" , () => {
    addTask();
})
button.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      // Tutaj umieść kod, który ma być wykonany po naciśnięciu klawisza Enter.
      addTask;
    }
  });

list.addEventListener("click", e => {
    markDoneUndone(e.target);
})
