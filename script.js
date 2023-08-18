/*
  # JavaScript - Exercício 01

  Bora praticar e rever tudo o que foi ensinado na aula? **💜**
  Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

  - [x]  A soma dos dois números;
  - [x]  A subtração dos dois números;
  - [x]  A multiplicação dos dois números;
  - [x]  A divisão dos dois números;
  - [x]  O resto da divisão dos dois números;

  Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

  - [x]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
  - [x]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

  Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
*/

/**
 * Display prompt to get an input number.
 * @param {string} message - Message to be displayed at the prompt
 * @returns {number}
 */
function questionNumber(message) {
  let response
  let isValidNumber
  let isEmptyResponse

  while(!isValidNumber || isEmptyResponse) {
    response = prompt(message)

    const shouldCancel = response === null

    if (shouldCancel) {
      return null
    }

    isEmptyResponse = response === ''

    response = Number(response)
    isValidNumber = !isNaN(response)

    if (!isValidNumber || isEmptyResponse) {
      alert('Número inválido. Tente novamente!')
    }
  }

  return response
}

/**
 * Gets user input numbers
 * @returns {{ firstNumber: number, secondNumber: number }}
 */
function questionUserInputNumbers() {
  const firstNumber = questionNumber('Digite o primeiro número:')

  if (firstNumber === null) {
    return
  }

  const secondNumber = questionNumber('Digite o segundo número:')

  if (secondNumber === null) {
    return
  }

  return {
    firstNumber,
    secondNumber,
  }
}

function run() {
  const messages = {
    /**
     * Returns a message with the sum of numbers.
     * @param {number} firstNumber
     * @param {number} secondNumber
     */
    getSumMessage: (firstNumber, secondNumber) => {
      const result = firstNumber + secondNumber
      return `A soma dos dois números é: ${result}`
    },
    /**
     * Returns a message with the subtraction of numbers.
     * @param {number} firstNumber
     * @param {number} secondNumber
     */
    getSubtractMessage: (firstNumber, secondNumber) => {
      const result = firstNumber - secondNumber
      return `A subtração dos dois números é: ${result}`
    },
    /**
     * Returns a message with the multiplication of numbers.
     * @param {number} firstNumber
     * @param {number} secondNumber
     */
    getMultiplyMessage: (firstNumber, secondNumber) => {
      const result = firstNumber * secondNumber
      return `A multiplicação dos dois números é: ${result}`
    },
    /**
     * Returns a message with the division of numbers.
     * @param {number} firstNumber
     * @param {number} secondNumber
     */
    getDivideMessage: (firstNumber, secondNumber) => {
      const result = firstNumber / secondNumber
      return `A divisão dos dois números é: ${result}`
    },
    /**
     * Returns a message with the remainder of the division of numbers.
     * @param {number} firstNumber
     * @param {number} secondNumber
     */
    getRemainderMessage: (firstNumber, secondNumber) => {
      const result = firstNumber % secondNumber
      return `O resto da divisão dos dois números é: ${result}`
    },
    /**
     * Returns whether the sum of numbers is even or odd.
     * @param {number} firstNumber
     * @param {number} secondNumber
     */
    getIsEvenMessage: (firstNumber, secondNumber) => {
      const sum = firstNumber + secondNumber
      const isEven = sum % 2 === 0
      const oddOrEven = isEven ? 'par' : 'ímpar'

      return `A soma dos dois números é ${oddOrEven}: ${sum}`
    },
    /**
     * Returns whether the entered numbers are equal.
     * @param {number} firstNumber
     * @param {number} secondNumber
     */
    getIsSameNumbersMessage: (firstNumber, secondNumber) => {
      const isSameNumbers = firstNumber === secondNumber
      return isSameNumbers
        ? 'Os números inseridos são iguais'
        : 'Os números inseridos são diferentes'
    },
  }

  const response = questionUserInputNumbers()

  if (!response) {
    return
  }

  const { firstNumber, secondNumber } = response

  for (let key in messages) {
    const getMessage = messages[key]
    const message = getMessage(firstNumber, secondNumber)

    alert(message)
  }
}

run()
