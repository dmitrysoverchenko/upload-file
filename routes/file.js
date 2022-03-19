const Router = require("express");

const router = new Router();

const FileController = require("../controllers/file");

router.post("/file", FileController.createFile);
router.get("/file", FileController.getFiles);
router.delete("/file/:id", FileController.deleteFile)

module.exports = router;
