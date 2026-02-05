class Adapter {
  constructor(bank){
    this.bank = bank;
  }

  listQuestions(){
    return this.bank.question
  }
}
const createAdapter = (questionBank) => {
  return
}
