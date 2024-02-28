const Package = require('../models/package.model');

const getPackages = async (req, res) => {
    try {
        const packages = await Package.find({});
        res.status(200).json(packages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getPackageById = async (req, res) => {
    try {
        const { id } = req.params;
        const package = await Package.findById(id);
        if (!package) {
            return res.status(404).json({ message: "Package not found" });
        }
        res.status(200).json(package);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createPackage = async (req, res) => {
    try {
        const package = await Package.create(req.body);
        res.status(200).json(package);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updatePackage = async (req, res) => {
    try {
        const { id } = req.params;
        const package = await Package.findByIdAndUpdate(id, req.body);

        if (!package) {
            return res.status(404).json({ message: "Package not found" });
        }
        const updatedPackage = await Package.findById(id);
        res.status(200).json(updatedPackage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deletePackage = async (req, res) => {
    try {
        const { id } = req.params;
        const package = await Package.findByIdAndDelete(id);

        if (!package) {
            return res.status(404).json({ message: "Package not found" });
        }
        res.status(200).json({ message: "Package deleted succesfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getPackages,
    getPackageById,
    createPackage,
    updatePackage,
    deletePackage
};