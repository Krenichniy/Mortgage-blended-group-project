const refs = {
  formLinks: null,
  divRoot: document.getElementById("root"),
  buttonCreateFormRefs: null,
};

const BANK_LIST = [];

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

  refs.divRoot.insertAdjacentHTML("afterbegin", formCap);
  refs.formLinks = document.querySelector("#createBank");
  refs.formLinks.addEventListener("submit", onSubmitForm);
}
function init() {}

function createFirstMarkup() {
  const createBankMarkup = `<h2 class = "title_markup">Добав свій перший банк</h2>
	<button type="button" class="btn-createBank">Додай банк</button
  >`;

  refs.divRoot.insertAdjacentHTML("afterbegin", createBankMarkup);
  refs.buttonCreateFormRefs = document.querySelector(".btn-createBank");
}

createFirstMarkup();

refs.buttonCreateFormRefs.addEventListener("click", openForm);

function openForm() {
  refs.divRoot.innerHTML = "";
  createForm();
}
document.querySelector(".btn-createBank");
function createBank(e) {
  const obj = {};
  console.log(e.currentTarget.value);
}

// {
//   id: 1,
//   name: "Mono",
//   interestRate: 5,
//   maxLoan: 500000,
//   minPayment: 1000,
//   loanTerm: 12,
// },

const onSubmitForm = (e) => {
  e.preventDefault();

  const { name, interestRate, maxLoan, minPayment, loanTerm } = e.target.elements;

  const newBank = {
    id: new Date(),
    name: name.value,
    interestRate: interestRate.value,
    maxLoan: maxLoan.value,
    minPayment: minPayment.value,
    loanTerm: loanTerm.value,
  };

  BANK_LIST.push(newBank);
};
