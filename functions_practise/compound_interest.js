function calculateCI(principle,time,rateOfInterest,compoundingPeriod){
  let amount = principle;
  for(let compounding = 1; compounding <= compoundingPeriod * time ; compounding++){
      let interest = (amount * (rateOfInterest/compoundingPeriod))/100;
      amount = amount + interest;
  }
  let actualInterest = amount - principle;
  return actualInterest;
}

console.log(calculateCI(1000,1,20,2))
