import { create, all } from 'mathjs';

const config = {
  notation: 'fixed',
  precision: 20, // Set the desired precision
};

const math = create(all, config);

math.config({ number: 'BigNumber' });

const bigNumberString = '8.112963841460666720150565839660609230877791954447042e+41';
const formattedNumber = math.format(math.evaluate(bigNumberString), config);

console.log(formattedNumber);
