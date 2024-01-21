const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Use the correct path to the 'uploads' folder
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const originalname = file.originalname;
        const fileExtension = originalname.slice(((originalname.lastIndexOf(".") - 1) >>> 0) + 2);
        const newFilename = file.fieldname + '-' + uniqueSuffix + '.' + fileExtension;
        cb(null, newFilename);
    }
});

const upload = multer({ storage: storage });

const uploadFile = (req, res, next) => {
    const singleUpload = upload.single('image');
  
    singleUpload(req, res, (err) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        next();
    });
};

module.exports = uploadFile;
