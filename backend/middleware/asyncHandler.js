const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
export default asyncHandler;
// This middleware is used to handle async errors in Express routes.
