export const handleError = (req, res, next) => {
  try {
    console.log("no error, you can proceed");
    next();
  } catch (error) {
    res.status(401).json({
      error: {
        errorMessage: error,
      },
    });
  }
};
