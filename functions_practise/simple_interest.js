function simpleInterest(principle,time,rateOfInterest){
  return (principle * time * rateOfInterest) / 100;
}

const interest = simpleInterest(1000,5,20)
console.log(interest);
