class AuthService {
  async login(payload) {
    return {
      ok: true,
      message: 'Login service ready',
      payload,
    };
  }

  async refreshToken() {
    return {
      ok: true,
      message: 'Refresh token service ready',
    };
  }
}

module.exports = { AuthService };
