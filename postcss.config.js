module.exports = {
    plugins: {
        'autoprefixer': {},
        'postcss-nested': {},
        'postcss-uncss': {
            html: ['./src/index.html']
        }
    }
}