const mongoose = require('mongoose');

const UrlSchema = mongoose.Schema({
    url_download: {
        type: String,
        required: [true, "Please enter a download URL"],
    },
    server_name: {
        type: String,
        required: [true, "Please enter a server name"],
    }
});

const PackageSchema = mongoose.Schema({
    package_name: {
        type: String,
        required: [true, "Please enter a package name"],
    },
    package_img: {
        type: String,
        required: false,
    },
    package_description: {
        type: String,
        required: [true, "Please enter a package description"],
    },
    urls: [UrlSchema], // Subesquema para representar las URLs dentro del paquete

}, {
    timestamps: true
});

const Package = mongoose.model('Package', PackageSchema);

module.exports = Package;