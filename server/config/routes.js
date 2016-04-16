var albums = require('../controllers/albumsController');
var express = require('express');
var router = express.Router();

router.route('/api/albums').get(albums.getAll);
router.route('/api/albums/:id').get(albums.getById);
router.route('/api/albums').post(albums.create);
router.route('/api/albums/:id').put(albums.update);
router.route('/api/albums/:id').delete(albums.delete);

module.exports = router;
