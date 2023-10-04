const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
<<<<<<< HEAD
  module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: 'html-loader'
                }
            ]
        }
        ]
  },
  plugins: [
    new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html'
    })
  ]
};
=======
	entry: './src/index.js',
	// definiuje plik wejściowy
	output: {
		path: path.resolve(__dirname, 'build'),
		// definiuje ścieżką wyjściową
		filename: 'index.min.js',
		// definiuję nazwę pliku wyjściowego
	},
	module: {
		rules: [
			{
				test: /\.js$/,

				// określam jakie pliki
				// będą brane pod uwagę
				exclude: /node_modules/,
				// określam wykluczenia
				use: 'babel-loader',
				// określam jaki [loader]
				// ma być wykorzystany
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'assets/images/',
						},
					},
				],
			},
		],
		// obecnie brak dodatkowych ustawień
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			// wskazuje plik źródłowy
			filename: 'index.html',
			// określan nazwę dla pliku
		}),
	],
};
// eksportuję ustawienia dla webpacka
>>>>>>> 66635f4 (Refubrished)
