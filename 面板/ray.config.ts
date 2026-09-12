import { RayConfig } from '@ray-js/types';

// eslint/tsconfig 中未引入 Node 类型（types: []），这里用最小声明避免 TS 报错
declare const require: any;
declare const process: any;
const path = require('path');

const config: RayConfig = {
  resolveAlias: {
    '@config': path.resolve(process.cwd(), './src/config'),
  },
  tailwindcss: true,
  esbuildConfig: function (config, _processName) {
    // 创建一个 esbuild 插件. 仅拦截 /Input/*.less 文件, 返回空
    const plugin = {
      name: 'less-plugin',
      setup(build: any) {
        build.onResolve({ filter: /\.less$/ }, async (args: any) => {
          const file = path.resolve(args.resolveDir, args.path);
          // 只拦截 node_modules/@ray-js/components/lib/Input 和 Textarea 下的所有 .less（含子目录）
          const isRayComponentsInputLikeLess =
            /[\\/]node_modules[\\/]@ray-js[\\/]components[\\/]lib[\\/](Input|Textarea)[\\/].*\.less$/.test(
              file
            );
          if (isRayComponentsInputLikeLess) {
            return {
              path: file,
              namespace: 'ignore-less',
            };
          }
        });
        build.onLoad({ filter: /\.less$/, namespace: 'ignore-less' }, async (_args: any) => {
          return {
            contents: '',
          };
        });
      },
    };
    config.plugins = config.plugins || [];
    config.plugins.unshift(plugin);

    config.jsxDev = true;
    config.jsx = 'automatic';
    config.jsxImportSource = 'react';
    config.define = {
      ...config.define,
      'process.env.NODE_ENV': '"development"',
      __DEV__: 'true',
    };

    return config;
  },
};

export default config;
