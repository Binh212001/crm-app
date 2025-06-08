module.exports = {
  apps: [
    {
      name: "sass_vmaster", // Tên ứng dụng
      script: "dist/src/main.js", // Đường dẫn tới file entry của ứng dụng sau khi build
      instances: "max", // Số lượng instances, "max" sẽ sử dụng tối đa CPU
      exec_mode: "cluster", // Chế độ cluster cho load balancing
      watch: false, // Tắt chế độ watch, chỉ nên bật trong môi trường dev
      env_development: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
