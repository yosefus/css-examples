const fs = require('fs')
const basePath = 'root'

// fs.existsSync()
// fs.rmdirSync()
// fs.mkdirSync()
// fs.renameSync()
// fs.readdirSync()

// check exict
// if (!fs.existsSync(basePath))
// fs.mkdirSync(basePath)

// read files in folder
// fs.readdirSync('files')

// edit name or change location
// fs.renameSync('files/root', 'root')

// remove folder // trow error if not empty
// fs.rmdirSync('root')


// fs.existsSync()
// fs.renameSync()
// fs.readFileSync()
// fs.writeFileSync()
// fs.appendFileSync()

// files
// console.log(fs.existsSync('root/r.txt'))
// fs.renameSync('root/y.txt', 'root/x.txt')


// fs.readFileSync('root/y.txt', { encoding: 'utf-8' })
// fs.readFile('root/y.txt', { encoding: 'utf-8' }, (error, data) => {
//    if (error) return;
//    console.log(data);
// })
// console.log('1');

// const json = require('root/k.json')

// write a new file
// fs.writeFileSync(`${basePath}/text.txt`, 'hello world! 2')
// const obj = { a: 'h' }
// fs.writeFileSync(`${basePath}/json.json`, JSON.stringify(obj))

// fs.appendFileSync(`${basePath}/text.txt`, '\nwe are sooo board')

// function readFiles(path) {
//    const fullPath = `${basePath}/${path}`
//    if (!fs.existsSync(fullPath))
//       throw { myStatus: 403, message: 'not exict' }

//    const files = fs.readdirSync(fullPath)
//    console.log(files);
//    return (files.map(fileName => ({ name: fileName, isFolder: fs.statSync(`${fullPath}/${fileName}`).isDirectory() })));

// }

// readFiles('e')

// const router = {}

// router.get('/readfiles/:path', async (req, res) => {
//    try {
//       const result = await readFiles(req.params.path)
//       res.send(result)
//    } catch (error) {
//       if (error.myStatus) res.send(error.message)
//       else res.send('smething went wrong...')
//    }
// })