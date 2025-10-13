const EMPLOYEES_ID = [];
const ITEMS_ORDERED = [];
const items = Deno.args;
const NO_OF_EMP = prompt(`\nhow many employees do you allow to order`);

function isEmpFound(itemsYouWant, employessFound) {
  for (let index = 0; index < ITEMS_ORDERED.length; index++) {
    if (itemsYouWant === ITEMS_ORDERED[index]) {
      console.log(EMPLOYEES_ID[index], "\n");
      employessFound = true;
    }
  }
  return employessFound;
}

function wantToKnowOrders() {
  const itemsYouWant = prompt(`\nwhich item do you want to know:`);
  let employessFound = false;
  employessFound = isEmpFound(itemsYouWant, employessFound);

  if (!employessFound) {
    console.log(`\nThere no one ordered it`);
  }

  return;
}

function getItemList(items) {
  for (let item = 1; item <= items.length; item++) {
    console.log(`\n${item}. ${items[item - 1]}`);
  }
  return;
}

function orderItems(items) {
  const employeeId = prompt(`\nenter your employee id:`);
  EMPLOYEES_ID.push(employeeId);
  getItemList(items);
  const itemWant = prompt('\nenter the item no you want:');
  console.clear();
  ITEMS_ORDERED.push(items[itemWant - 1]);
  console.log('\nitem you choose:', items[+itemWant - 1]);
}

function takeOrder(NO_OF_EMP, items) {
  for (let count = 1; count <= NO_OF_EMP; count++) {
    orderItems(items);
  }
}

function getDetails(items, NO_OF_EMP) {
  takeOrder(NO_OF_EMP, items);
  const willKnowOrders = confirm(`\ndo you want to know detail of each order:`);

  if (willKnowOrders) {
    return wantToKnowOrders();
  }
  return;
}

function cafeteriaApp() {
  console.log(`\nwelcome to the dilli's cafe ☕️`);
  getDetails(items, NO_OF_EMP);
}

cafeteriaApp();

