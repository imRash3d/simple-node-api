
const Product = require('../schemas/product')

const getProducts = async (req, res, next) => {



    try {
        const products = await Product.find({});
        res.json({
            Data: products
        })
    }
    catch (er) {
        res.json({
            error: er
        })
    }

};
const getProduct = async (req, res, next) => {



    try {
        const products = await Product.find({ _id: req.params.id });
        console.log(products)
        if (!products || !products.length) {
            res.status(404).json({
                message: 'Product Not Found'
            })
        } else {
            res.json({
                Data: products
            })
        }

    }
    catch (er) {
        res.status(500).json({
            error: 'Bad Request'
        })
    }

};

const addProduct = (req, res, next) => {

    const product = new Product(req.body)

    try {
        product.save().then(_product => {
            //  console.log(res)
            res.status(201).json({
                Data: _product,
                message: 'Item added successfully'
            })
        })
            .catch(er => {
                res.json({
                    Data: er
                })
            })



    }
    catch (er) {
        res.json({
            Data: er
        })
    }






}
const deleteProduct = async (req, res, next) => {

    try {

        await Product.findByIdAndDelete(req.params.id);

        res.json({
            message: 'Item Deleted successfully'
        })

    }
    catch (er) {
        res.status(500).json({
            error: 'Bad Request'
        })
    }
}
const editProduct = async (req, res, next) => {

    try {

        const product = await Product.findByIdAndUpdate(req.params.id, req.body);
        console.log(product)
        if (!product) {
            res.status(404).json({
                message: 'Product Not Found'
            })
        }

        // await Product.save();


        res.status(200).json({
            message: 'Item saved successfully'
        })

    }
    catch (er) {
        res.status(500).json({
            error: 'Bad Request'
        })
    }
}

module.exports = {
    getProducts,
    addProduct,
    editProduct,
    deleteProduct,
    getProduct
}