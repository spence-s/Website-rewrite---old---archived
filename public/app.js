import './main.scss';
import _ from 'lodash';

const array = [1, 2, 3, 4, 5];

const plusOne = _.map(array, el => el + 1);

console.log(plusOne);
console.log('hello');
