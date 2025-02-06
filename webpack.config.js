const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js', // Входная точка
    output: {
        path: path.resolve(__dirname, 'dist'), // Выходная директория
        filename: 'bundle.js',  // Имя выходного файла
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Для JavaScript файлов
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/, // Для CSS файлов
                use: ['style-loader', 'css-loader'], // Лоадеры для обработки CSS
            },
            {
                test: /\.(png|jpe?g|gif)$/i, // Обработка изображений
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Шаблон HTML файла
        }),
    ],
    stats: {
        children: true, // Включает статистику компилируемых детей
    },
};