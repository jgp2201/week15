const car = {
    make: "Tata",
    model: "Harrier",
    year: 2021
  };
  function display(car) {
    for (const item in car) {
      console.log(`${item}: ${car[item]}`);
    }
  }
  display(car);
  