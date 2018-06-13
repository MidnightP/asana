module.exports = {
  apps: [
    {
      script: "./app.js",
      name: "asana",
      instances: 1,
      exec_mode: "fork",
      env: {
        PORT: 5000,
        NODE_ENV: "production"
      }
    }
  ]
};
