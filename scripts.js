const S = 103680 * Math.pow(10, 7); //нижня межа стійкості
const passwordAlphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=<>?/';

const lowerLimitElement = document.querySelector('.results__lower-limit');
const currentLimitElement = document.querySelector('.results__current-limit');
const passwordElement = document.querySelector('.results__password');

const submitButton = document.querySelector('.button__submit');
const resetBtn = document.querySelector('.button__reset');

function generatePassword(length) {
  console.log(length)
  let end = 36;
  let currentAlphabet = passwordAlphabet.slice(0, end);

  let P = Math.pow(currentAlphabet.length, length);

  while (P <= S) {
    end++;

    currentAlphabet += passwordAlphabet[end - 1];
    P = Math.pow(currentAlphabet.length, length);
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * currentAlphabet.length);
    password += currentAlphabet.charAt(randomIndex);
  }

  return [P, password];
}

function hanldeSubmitBtn() {
  const lengthValue = document.getElementById('length').value;
  const [currentLimit, password] = generatePassword(lengthValue);

  lowerLimitElement.innerHTML = `
    <p class="results__label">
      Lower Limit
    </p>
    
    <p class="results__value">
      ${S}
    </p>
  `;

  currentLimitElement.innerHTML = `
    <p class="results__label">
      Current Limit
    </p>
  
    <p class="results__value">
      ${currentLimit}
    </p>
  `;

  passwordElement.innerHTML = `
    <p class="results__label">
      Password
    </p>

    <p class="results__value">
      ${password}
    </p>
  `;

  resetBtn.classList.remove('button--inactive');
}

function reset() {
  lowerLimitElement.innerText = '';
  currentLimitElement.innerText = '';
  passwordElement.innerText = '';

  submitButton.classList.add('button--inactive');
  resetBtn.classList.add('button--inactive');
  document.getElementById('length').value = '';
}


function handleInput() {
  let lengthValue = document.getElementById('length').value;

  if (lengthValue !== "") {
    submitButton.classList.remove('button--inactive');
  } else {
    submitButton.classList.add('button--inactive');
  }
}


