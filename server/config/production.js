
module.exports = {
  host: "localhost",
  port: process.env.PORT,
  public: "../public/",
  paginate: {
    default: 10,
    max: 50
  },
  authentication: {
    secret: process.env.SECRET,
    strategies: ["jwt", "local"],
    path: "/authentication",
    service: "users",
    jwt: {
      header: {
        typ: "access"
      },
      audience: "https://yourdomain.com",
      subject: "anonymous",
      issuer: "feathers",
      algorithm: "HS256",
      expiresIn: "1d"
    },
    local: {
      entity: "user",
      usernameField: "email",
      passwordField: "password"
    }
  },
  mongodb: process.env.MONGO_URI
};
