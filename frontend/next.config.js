module.exports = {
    env:{
        URL:"http://localhost:5000"
    },
    async rewrites() {
        return [
            { source: '/api/:path*', destination: 'http://localhost:5000/:path*' }
        ]
      },
      
}