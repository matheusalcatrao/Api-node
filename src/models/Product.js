const mongoose = require('mongoose');
// para retornar os registros por pagina
const mongoosePaginate = require('mongoose-paginate');

const ProductShema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
//Aplicando mongoose-paginate
ProductShema.plugin(mongoosePaginate);

mongoose.model('Product', ProductShema);