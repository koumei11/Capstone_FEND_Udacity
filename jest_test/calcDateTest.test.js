import calcDate from '../src/client/js/calc/calculateDate';

const now = new Date();
const date = new Date('10/15/2019');
const days = Math.floor((date-now) / 1000 / 3600 / 24);

test('Calculating date', () => {
    expect(Math.floor(calcDate(date.getTime()/1000)['countDate'])).toBe(days);
});