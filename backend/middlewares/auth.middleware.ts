export const isAdmin = (req, res, next) => {
  console.log(req.user);
  if (!req.user.superAdmin) {
    const err: any = new Error("Forbidden");
    err.status = 403;
    next(err);
  } else next(); // is superAdmin
};
