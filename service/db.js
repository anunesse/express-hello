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
    readCategory(id) {
        return _.find(categories, {id});
    },
    createCategory(category) {
        categories.push(category);
        return categories;
    },
    updateCategory(category) {
        let index = _.findIndex(categories, {id: category.id});
        categories.splice(index, 1, category);
        return category;
    },
    deleteCategory(id) {
        _.remove(categories, {id});
        return categories;
    },


    readProducts() {
        return products;
    },
    readProduct(id) {
        return _.find(products, {id});
    },
    createProduct(product) {
        products.push(product);
        return products;
    },
    updateProduct(product) {
        let index = _.findIndex(products, {id: product.id});
        products.splice(index, 1, product);
        return product;
    },
    deleteProduct(id) {
        _.remove(products, {id});
        return products;
    },
};