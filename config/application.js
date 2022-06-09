module.exports = {
  MORGAN_FORMAT: ':method :url :status :res[content-length] - :response-time ms',
  // eslint-disable-next-line no-undef
  JWT_SIGNATURE_KEY: process.env.JWT_SIGNATURE_KEY || "Rahasia",
}
