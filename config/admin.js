module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '929e3e94b22879dccf77abcb9f6135bf'),
  },
});
