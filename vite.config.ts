import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'modules',
    minify: true, // 开启代码压缩
    rollupOptions: {
      input: ['src/main.ts'], // 打包的入口文件
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true, // 该选项将使用原始模块名作为文件名
          dir: 'es', // 输出的目录
          preserveModulesRoot: 'src' // 确保输出的目录和输入时的一致
        },
        {
          format: 'cjs', // 指定模块化类型
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: 'lib',
          preserveModulesRoot: 'src'
        }
      ]
    },
    lib:{
      entry:'./main.js', // 定义作为库的入口是哪个
    }
  }
});
