const config = {
  mongoURI: "mongodb://mongo:27017/dev",
  google: {
    web: {
      project_id: "prime-haven-342115",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      redirect_uris: ["http://localhost:8000/auth/google/callback"],
      javascript_origins: ["http://localhost:8000"],
    },
  },
  JWT_SECRET_TOKEN:
    process.env.JWT_SECRET_TOKEN ||
    "c21605c9d4dbfa00fd327f86a23bc37b07440ff7bcc7be6932aaa9e99f8601b45ec50b8da725cf3a8d7f49dd76f6556526ab625e9f671e65b6257996707d8a69",
  JWT_EXPIRES_IN: 90,
};

export default config;
