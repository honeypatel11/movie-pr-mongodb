const express = require("express");
const { getDashboard, addmovie,viewMovie, showMovie, deleteMovie, editMovie, updateMovie } = require("../controller/movieController.js");
const upload = require("../middlewares/multer.js");
const router = express.Router();

router.get("/", getDashboard);
router.get("/addmovie" , addmovie );
router.post("/addmovie", upload.single("photo") ,viewMovie);
router.get("/view-movie", showMovie)
router.get("/delete-movie/:id", deleteMovie)
router.get("/edit-movie/:id", editMovie);  
router.post("/edit-movie/:id", upload.single("photo"), updateMovie);

module.exports = router;