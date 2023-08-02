const endpoints = {
  // Common
  getConstants: "GET /api/v1/common/constants",

  // Auth
  registerEmail: "POST /api/v1/register_by_email",
  loginEmail: "POST /api/v1/login_by_email",
  verifyEmailOTP: "POST /api/v1/verify_email_otp",
  sendEmailOTP: "POST /api/v1/send_email_otp",
  forgotPassword: "POST /api/v1/forgot_password",

  // Me
  getMe: "GET /api/v1/me",
  updateMe: "PUT /api/v1/me",
};

export default endpoints;
