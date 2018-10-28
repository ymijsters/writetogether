const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PitchSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref:'users'
    },
    pitch: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('pitch', PitchSchema);