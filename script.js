const addBtn = document.querySelector("#add-btn");
const expenseInput = document.querySelector("#expense");
const priceInput = document.querySelector("#price");
const stateInput = document.querySelector("#state");
const list = document.querySelector(".list");
const totalSpan = document.querySelector("#total");



addBtn.addEventListener("click", addExpense);
list.addEventListener("click", handleClick);

let total = 0

function addExpense(event) {
    event.preventDefault();

    if (!expenseInput.value || !priceInput.value) {
        alert("Please fill the boxs!")
        return;
    }

    const listItem = document.createElement("div");

    listItem.classList.add("list-item");

    if (stateInput.checked) {
        listItem.classList.add("paid");
    }





    listItem.innerHTML = `
    <h1>${expenseInput.value}</h1>
    <h2> <span> ${priceInput.value} </span> $ </h2>

    <div class="buttons">
        <img id="delete" src="images/delete.png" alt="">
        <img id="payment" src="images/payment.png" alt="">
    </div>
    `;

    list.appendChild(listItem);

    total += parseInt(priceInput.value);
    totalSpan.innerText = total;

    expenseInput.value = "";
    priceInput.value = "";

}


function handleClick(e) {
    const item = e.target;
    if (item.id === "delete") {

        const expenseDiv = item.parentElement.parentElement


        var deletedPrice = expenseDiv.querySelector("span").innerText;
        total -= parseInt(deletedPrice);

        totalSpan.innerText = total;

        expenseDiv.classList.add("fall");

        expenseDiv.addEventListener("transitionend", () => {
            expenseDiv.remove();
        });
    }
}