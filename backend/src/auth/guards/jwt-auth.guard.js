class JwtAuthGuard {
  canActivate() {
    return true;
  }
}

module.exports = { JwtAuthGuard };
