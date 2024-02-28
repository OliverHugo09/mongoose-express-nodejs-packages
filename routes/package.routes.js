const express = require("express");
const Package = require('../models/package.model');
const router = express.Router();
const { getPackages, getPackageById, createPackage, updatePackage, deletePackage } = require('../controllers/package.controller');

router.get('/', getPackages);
router.get('/:id', getPackageById);
router.post('/', createPackage);
router.put('/:id', updatePackage);
router.delete('/:id', deletePackage);

module.exports = router;