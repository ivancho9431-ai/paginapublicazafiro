class HttpExceptionFilter {
  catch(error, req, res) {
    const status = error.status || 500;

    res.status(status).json({
      ok: false,
      error: error.message || 'Internal server error',
      path: req.originalUrl,
    });
  }
}

module.exports = { HttpExceptionFilter };
