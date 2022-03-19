const db = require("../db");

class FileController {
  async createFile(req, res) {
    const { filename, extension, upload_date } = req.body;
    const newFile = await db.query(
      `INSERT INTO file(filename, extension, upload_date) values ($1, $2, $3) RETURNING *`,
      [filename, extension, upload_date]
    );
    res.json(newFile.rows[0]);
  }
  async getFiles(req, res) {
    const files = await db.query("SELECT * FROM file");
    res.json(files.rows);
  }
  async deleteFile(req, res) {
    const id = req.params.id;
    const file = await db.query("DELETE FROM file where id=$1", [id]);
    res.json(file.rows[0]);
  }
}

module.exports = new FileController();
