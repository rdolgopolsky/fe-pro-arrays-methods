import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */

const brandFilter = (brand) => {
  return goods.filter((product) => product.brand === brand);
};

/**
 * @param {string} color
 * @returns {*}
 */

const colorFilter = (color) => {
  return goods.filter((product) => product.color === color);
};

/**
 * @param {string} model
 * @returns {*}
 */

const modelFilter = (model) => {
  return goods.filter((product) => product.model === model);
};

/**
 * @param {number} memory
 * @returns {*}
 */

const memoryFilter = (memory) => {
  return goods.filter((product) => product.memory === memory);
};

/**
 * @param {number} price
 * @returns {*}
 */

const priceFilter = (price) => {
  return goods.filter((product) => product.price === price);
};

/**
 * @param {string} country
 * @returns {*}
 */

const countryFilter = (country) => {
  return goods.filter((product) => product.country === country);
};

/**
 * @param {string} os
 * @returns {*}
 */

const osFilter = (os) => {
  return goods.filter((product) => product.os === os);
};

/**
 * @param {number} from
 * @param {number} to
 */

const rangeFilter = (from, to) => {
  return goods.filter((item) => item.price >= from && item.price <= to);
};

const minPriceReducer = () => {
  return goods.reduce((prev, curr) => prev = Math.min(prev, curr.price), goods[0].price)
};

const maxPriceReducer = () => {
  return goods.reduce((prev, curr) => prev = Math.max(prev, curr.price), goods[0].price)
};

const toMaxSorter = () => {
  return goods.sort((prev, next) => {
    if (prev.price < next.price) return 1;
    if (prev.price > next.price) return -1;
    return 0;
  });
};

const toMinSorter = () => {
  return goods.sort((prev, next) => {
    if (prev.price > next.price) return 1;
    if (prev.price < next.price) return -1;
    return 0;
  });
};

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};
