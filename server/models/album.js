var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var albumSchema = new Schema({
    title: String,
    artist: String
});

module.exports = mongoose.model('Album', albumSchema);
