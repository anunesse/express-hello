const _ = require('lodash');

let categories = [{
    id: 0,
    name: 'cat zero',
}];

let products = [{
    id: 0,
    barCode: '',
    name: 'prod zero',
    description: 'prod zero desc',
    categories: [0],
}];

module.exports =  {
    readCategories() {
        return categories;
    },
    readCategories(id) {
        return _.find(categories, {id});
    },


    readProducts() {
        return products;
    },
    readProducts(id) {
        return _.find(products, {id: id});
    }
};