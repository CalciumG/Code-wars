const peopleWithAgeDrink = (age) => {
    if(age < 14)
      drink = 'toddy';
    else if(age < 18)
      drink = 'coke'
    else if(age < 21)
      drink = 'beer';
    else
      drink = 'whisky';
    return 'drink ' + drink;
}

// could be also
// const peopleWithAgeDrink = (age) =>
//   age < 14 ? "drink toddy" :
//   age < 18 ? "drink coke" :
//   age < 21 ? "drink beer" : "drink whisky"