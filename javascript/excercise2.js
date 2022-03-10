function lifeInWeeks(age) {
  /************Don't change the code above************/

  //Write your code here.
  const yearsRemaining = 90 - age;
  const daysRemaining = yearsRemaining * 365;
  const weeksRemaining = yearsRemaining * 52;
  const monthsRemaining = yearsRemaining * 12;
  console.log(
    `You have ${daysRemaining} days, ${weeksRemaining} weeks, ${monthsRemaining} months, and ${yearsRemaining} years remaining.`
  );

  /*************Don't change the code below**********/
}

lifeInWeeks(23);
