import { createStore } from "redux";

const add = document.getElementById("add");
const MINUS = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const countModifier = (count = 0, action) => {
    if (action.type === "ADD") {
        return count + 1;
    } else if (action.type === "MINUS") {
        return count - 1;
    } else {
        return count;
    }
};

const countStore = createStore(countModifier);

const onChange = () => {
    number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
    countStore.dispatch({ type: "ADD" });
};
const handleMinus = () => {
    countStore.dispatch({ type: "MINUS" });
};

add.addEventListener("click", handleAdd);
MINUS.addEventListener("click", handleMinus);
