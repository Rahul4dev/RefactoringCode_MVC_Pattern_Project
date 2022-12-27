function protectRoutes(req, res, next) {
  if (!res.locals.isAuth) {
    return res.status(401).render("401");
  }

  next();
}

module.exports = protectRoutes;
