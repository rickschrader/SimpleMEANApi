var Album = require('../models/album');

exports.getAll = function(req, res) {
    console.log('Entered server get');
    Album.find(function(err, albums) {
        if (err) {
            console.log(err);
            return res.send(err);
        }

        console.log('No error');

        console.log('Results:' + albums.toString());
        res.json(albums);
        console.log('Returning');
    });
};

exports.getById = function(req, res, next) {
    Album.findOne({ _id: req.params.id}, function(err, album) {
        if (err) {
            return res.send(err);
        }

        res.json(album);
    });
};

exports.create = function(req, res) {
    var album = new Album(req.body);

    album.save(function(err) {
        if (err) {
            console.log(err);
            return res.send(err);
        }

        res.json(album);
    });
};

exports.update = function(req,res){
    Album.findOne({ _id: req.params.id }, function(err, album) {
        if (err) {
            return res.send(err);
        }

        //angular.extend can do this, but don't want to use that in the backend
        for (prop in req.body) {
            album[prop] = req.body[prop];
        }

        // save the movie
        album.save(function(err) {
            if (err) {
                console.log(err);
                return res.send(err);
            }

            res.json(album);
        });
    });
};

exports.delete = function(req, res) {
    Album.remove({
        _id: req.params.id
    }, function(err, album) {
        if (err) {
            console.log(err);
            return res.send(err);
        }

        res.json({ message: 'Successfully deleted' });
    });
};

