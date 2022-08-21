/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-08-21 16:42:50
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-08-21 20:30:20
 * @FilePath: \vue3-next-admin\vue.config.js
 */
const path = require('path')
const { resolve } = require('path')
const WebpackBar = require('webpackbar');

module.exports = {
	devServer: {
		hot: true,
		port: '8080',
		open: true,
		noInfo: false,
		overlay: {
			warnings: true,
			errors: true,
		},
	},
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'scss',
			patterns: [
				path.resolve(__dirname, 'src/styles/_variables.scss'),
				path.resolve(__dirname, 'src/styles/_mixins.scss'),
			]
		}
	},
	configureWebpack() {
		return {
      resolve: {
        alias: {
          "@": resolve("src"),
          "*": resolve(""),
          Assets: resolve("src/assets"),
        },
      },
      module: {
        rules: [
          {
            test: /\.(json5?|ya?ml)$/, // target json, json5, yaml and yml files
            loader: "@intlify/vue-i18n-loader",
            include: [
              // Use `Rule.include` to specify the files of locale messages to be pre-compiled
              path.resolve(__dirname, "src/lang"),
            ],
          },
        ],
      },
      plugins: [
        new WebpackBar({
          name: "vue3-next-admin",
        }),
      ],
    };
	},
}