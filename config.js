const BUILD_ENV = (() => {
  const nodeEnv = process.env.NODE_ENV
  const buildEnv = process.env.BUILD_ENV
  const buildEnvArr = ['TEST', 'PRE']
  if (nodeEnv === 'production') {
    return buildEnvArr.includes(buildEnv) ? buildEnv : 'RELEASE'
  } else {
    return 'DEVELOPMENT'
  }
})()

module.exports = {
  CONSTANTS: {
    NAME: 'boilerplate',
    TITLE: '',
    POLYFILL: '//img.huijieapp.com/h5/libs/babel-polyfill/6.22.0/polyfill.min.js',
    BUILD_ENV,
  },
}
