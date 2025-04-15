const Product = require('../models/Product');
const STATUS_CODE = require('../constants/statusCode');
const { MENU_LINKS } = require('../constants/navigation');

const getProductsView = (req, res) => {
    const products = Product.getAll();
    res.render('products', {
        headTitle: 'Products',
        menuLinks: MENU_LINKS,
        activeLinkPath: '/products',
        products
    });
};

const getAddProductView = (req, res) => {
    res.render('add-product', {
        headTitle: 'Add Product',
        menuLinks: MENU_LINKS,
        activeLinkPath: '/products/add'
    });
};

const addNewProduct = (req, res) => {
    const { name, description } = req.body;
    const newProduct = new Product(name, description);
    Product.add(newProduct);
    res.redirect('/products/new');
};

const getNewProductView = (req, res) => {
    const product = Product.getLast();
    res.render('new-product', {
        headTitle: 'Last Added Product',
        menuLinks: MENU_LINKS,
        activeLinkPath: '/products/new',
        product
    });
};

const getProductView = (req, res) => {
    const name = req.params.name;
    const product = Product.findByName(name);
    if (!product) {
        return res.status(STATUS_CODE.NOT_FOUND).render('404', {
            headTitle: 'Product Not Found',
            menuLinks: MENU_LINKS,
            activeLinkPath: ''
        });
    }
    res.render('product', {
        headTitle: product.name,
        menuLinks: MENU_LINKS,
        activeLinkPath: '/products',
        product
    });
};

const deleteProduct = (req, res) => {
    const name = req.params.name;
    Product.deleteByName(name);
    res.status(STATUS_CODE.OK).json({ success: true });
};

module.exports = {
    getProductsView,
    getAddProductView,
    addNewProduct,
    getNewProductView,
    getProductView,
    deleteProduct
};
