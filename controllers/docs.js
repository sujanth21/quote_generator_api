// @desc   Get document page
// @route  GET /api/v1/docs
// @access Public
exports.getDocs = (req, res, next) => {
  res.sendFile("qg.html", { root: "./public/views" });
};
