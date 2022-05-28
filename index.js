const refs = {
  formLinks: null,
  divRoot: document.getElementById("root"),
  buttonCreateFormRefs: null,
};

const BANK_LIST = [];

function renderBanks() {}

function createForm() {
  const formCap = `<form id="createBank" class="cardBank form">
        <label>
            Назва банку
            <input name="name" class="form-imput"/>
        </label>
        <label>
            Річна відсоткова ставка по іпотеці
            <input name="interestRate" type="counter"  class="form-imput"/>
        </label>
        <label>
            Максимальна сума кредиту, яку надає банк
            <input name="maxLoan" type="counter" class="form-imput"/>
        </label>
        <label>
            Мінімальний платіж
            <input name="minPayment" type="counter" class="form-imput"/>
        </label>
        <label>
            Термін кредиту
            <input name="loanTerm" type="counter" class="form-imput"/>
        </label>
        <button type="submit" class="btn-createBank">
         <svg class="icon icon-ok" width="20"; height="20";>
         <use href="./icomoon/icons.svg#icon-ok"></use>
         </svg>
         <span>Додати</span>
         </button>
    </form>`;

  refs.divRoot.insertAdjacentHTML("afterbegin", formCap);
  refs.formLinks = document.querySelector("#createBank");
  refs.formLinks.addEventListener("submit", onSubmitForm);
}

function init() {}

function createFirstMarkup() {
  const createBankMarkup = `<h2 class = "title_markup">Добав свій перший банк</h2>
	<button type="button" class="btn-createBank">
    <svg class="icon icon-plus" width="20"; height="20"><use href="./icomoon/icons.svg#icon-plus"></use></svg>
    <span>Додай банк</span>
    </button
  >`;

  refs.divRoot.insertAdjacentHTML("afterbegin", createBankMarkup);
  refs.buttonCreateFormRefs = document.querySelector(".btn-createBank");
  refs.buttonCreateFormRefs.addEventListener("click", openForm);
}

createFirstMarkup();

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
  const isValid = [...e.target.elements]
    .filter((elem) => elem.nodeName === "INPUT")
    .every((elem) => elem.value !== "");
  if (isValid) {
    const { name, interestRate, maxLoan, minPayment, loanTerm } =
      e.target.elements;

    const newBank = {
      id: BANK_LIST.length + 1,
      name: name.value,
      interestRate: interestRate.value,
      maxLoan: maxLoan.value,
      minPayment: minPayment.value,
      loanTerm: loanTerm.value,
    };
    BANK_LIST.push(newBank);
  }
  console.log(BANK_LIST);
  refs.divRoot.innerHTML = "";
  createFirstMarkup();
};
