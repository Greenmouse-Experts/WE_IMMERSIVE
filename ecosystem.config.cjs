module.exports = {
  apps: [
    {
      name: `web`,
      script: 'npm',
      args: 'run preview',
      env: {
        PM2_SERVE_PATH: './dist',
        PM2_SERVE_PORT: 4173,
        PM2_SERVE_SPA: 'true',
        NODE_ENV: 'production',
      },
    },
  ],
};
