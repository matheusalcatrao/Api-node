const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    // async para esperar o proximo registro
    async index(req, res) {
        //retorna todos registros do banco
        // Sem o mongoose-paginate
        //const products = await Product.find();

        //query são parametros do tipo GET(url)
        const { page = 1 } = req.query;
        // Com o mongoose-paginate
        const products = await Product.paginate({}, {page, limit: 10});
        
        //retorna em json
        return res.json(products);
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id);


        return res.json(product);
    },

    async store(req, res) {
       const product = await Product.create(req.body);

       return res.json(product);
    },

    async update(req, res) {
        const product_u = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        return res.json(product_u);
    },

    async destroy(req, res) {
        const product = await Product.findByIdAndDelete(req.params.id);
        
        return res.send();
    }
};