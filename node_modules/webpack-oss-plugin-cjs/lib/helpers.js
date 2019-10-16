const _ = require('lodash')
const path = require('path')
const readDir = require('recursive-readdir')

const UPLOAD_IGNORES = [
  '.DS_Store'
]

const REQUIRED_OSS_OPTS = ['region', 'accessKeyId', 'accessKeySecret', 'bucket']
const PATH_SEP = path.sep
const OSS_PATH_SEP = '/'
const DEFAULT_TRANSFORM = (item) => Promise.resolve(item)

const addTrailingOSSSep = fPath => {
  return fPath ? fPath.replace(/\/?(\?|#|$)/, '/$1') : fPath
}

const addSeperatorToPath = (fPath) => {
  if (!fPath) {
    return fPath
  }

  return _.endsWith(fPath, PATH_SEP) ? fPath : fPath + PATH_SEP
}

const translatePathFromFiles = (rootPath) => {
  return files => {
    return _.map(files, file => {
      return {
        path: file,
        name: file
          .replace(rootPath, '')
          .split(PATH_SEP)
          .join(OSS_PATH_SEP)
      }
    })
  }
}

const getDirectoryFilesRecursive = (dir, ignores = []) => {
  return new Promise((resolve, reject) => {
    readDir(dir, ignores, (err, files) => err ? reject(err) : resolve(files))
  })
    .then(translatePathFromFiles(dir))
}


module.exports = {
  UPLOAD_IGNORES: UPLOAD_IGNORES,
  REQUIRED_OSS_OPTS: REQUIRED_OSS_OPTS,
  PATH_SEP: PATH_SEP,
  OSS_PATH_SEP: OSS_PATH_SEP,
  DEFAULT_TRANSFORM: DEFAULT_TRANSFORM,
  addTrailingOSSSep: addTrailingOSSSep,
  addSeperatorToPath: addSeperatorToPath,
  translatePathFromFiles: translatePathFromFiles,
  getDirectoryFilesRecursive: getDirectoryFilesRecursive
}
