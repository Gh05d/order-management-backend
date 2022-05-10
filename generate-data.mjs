import Faker from '@faker-js/faker';

const { address, name, finance, commerce, image, internet } = Faker;

/***********************************************
 * Helper functions
 ***********************************************/

const generateID = () => finance.bitcoinAddress();
const coinflip = (cb) => (Math.floor(Math.random() * 10 + 1) > 5 ? cb() : null);

function generateProductOrders(items, total) {
  if (items.length == 0 || Math.random() > 0.1) {
    const product = products[Math.floor(Math.random() * products.length)];
    items.push({
      quantity: Math.floor(Math.random() * 25 + 1),
      product: product.ean,
    });

    return generateProductOrders(items, total + product.price);
  }

  return { items, totalPrice: total };
}

function generateAddresses(addresses) {
  if (Math.random() > 0.6) {
    const address = generateAddress();
    addresses.push(address);

    return generateAddresses(addresses);
  }

  return addresses;
}

/***********************************************
 * Object creators
 ***********************************************/

function generateAddress() {
  return {
    street: address.streetName(),
    zip: address.zipCode('######'),
    city: address.cityName(),
    country: address.countryCode('alpha-2'),
    misc: coinflip(address.streetSuffix),
  };
}

function generatePerson() {
  return {
    id: generateID(),
    firstName: name.firstName(),
    lastName: name.lastName(),
  };
}

function generateCustomer() {
  const addresses = generateAddresses([]);

  return {
    ...generatePerson(),
    firstOrder: coinflip(Date.now),
    addresses,
  };
}

function generateEmployee() {
  const person = generatePerson();

  return {
    ...person,
    email: internet.email(person.firstName, person.lastName, 'mm-saturn.de'),
    employeeNumber: employeeNumber++,
  };
}

function generateProduct() {
  return {
    ean: generateID(),
    name: commerce.productName(),
    price: +finance.amount(0, 8000),
    description: commerce.productDescription(),
    image: image.technics(680, 480, true),
  };
}

function generateOrder() {
  const { items, totalPrice } = generateProductOrders([], 0);
  const employee = employees[Math.floor(Math.random() * employees.length)];
  const customer = customers[Math.floor(Math.random() * customers.length)];

  return {
    id: generateID(),
    state: 'OPEN',
    address: generateAddress(),
    updated: null,
    created: Date.now(),
    items,
    totalPrice,
    customer: {
      id: customer.id,
      firstName: customer.firstName,
      lastName: customer.lastName,
    },
    employee: {
      id: employee.id,
      firstName: employee.firstName,
      lastName: employee.lastName,
    },
  };
}

/***********************************************
 * Variables
 ***********************************************/

let employeeNumber = 0;
const products = [];
const employees = [];
const customers = [];
const orders = [];

/***********************************************
 * Loops to fill database
 ***********************************************/

for (let i = 0; i < 10; i++) {
  const employee = generateEmployee();
  employees.push(employee);
}

for (let i = 0; i < 1000; i++) {
  const customer = generateCustomer();
  customers.push(customer);
}

for (let i = 0; i < 5000; i++) {
  const product = generateProduct();
  products.push(product);
}

for (let i = 0; i < 10000; i++) {
  const order = generateOrder();
  orders.push(order);
}

console.log(orders);
