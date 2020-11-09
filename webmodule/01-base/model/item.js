/*
 * @Author: your name
 * @Date: 2020-10-19 10:21:35
 * @LastEditTime: 2020-10-21 10:52:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01-base\static\model\item.js
 */
const fs = require('fs')
const path = require('path')
const util = require('util')
const dataPath = path.normalize(__dirname + "/../data/item.json")
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
async function get() {
    const data = await readFile(dataPath)
    const arr = JSON.parse(data)
    return arr
}
async function del(id) {
    const data = await readFile(dataPath)
    const arr = JSON.parse(data)
    const newArr = arr.filter((item) => {
        return item.id != id
    })
    await writeFile(dataPath, JSON.stringify(newArr))
}
async function add(task){
    const data = await readFile(dataPath)
    const arr = JSON.parse(data)
    const obj={
        id:Date.now().toString(),
        task:task
    }
    arr.push(obj)
    await writeFile(dataPath,JSON.stringify(arr))
    return obj
}
module.exports = {
    get,
    del,
    add
}