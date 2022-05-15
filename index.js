console.log("hello");

const divRoot = document.getElementById("root");
console.log(divRoot);

function renderBanks() {}

function createForm() {
  const formCap = `<form id="createBank" class="form">
        <label>
            Назва банку
            <input name="name"/>
        </label>
        <label>
            Річна відсоткова ставка по іпотеці
            <input name="interestRate" type="counter"/>
        </label>
        <label>
            Максимальна сума кредиту, яку надає банк
            <input name="maxLoan" type="counter"/>
        </label>
        <label>
            Мінімальний платіж
            <input name="minPayment" type="counter"/>
        </label>
        <label>
            Термін кредиту
            <input name="loanTerm" type="counter"/>
        </label>
        <button type="submit" class="btn-createBank">submit</button>
    </form>`;

  divRoot.insertAdjacentHTML("afterbegin", formCap);
}

// createForm();

function init() {}

function createFirstMarkup() {
  const createBankMarkup = `<h2 class = "title_markup">Добав свій перший банк</h2>
	<button type="button" class="btn-createBank">Додай банк</button
  >`;

  divRoot.insertAdjacentHTML("afterbegin", createBankMarkup);
}

createFirstMarkup();
