/*
 * @Author: 471826078@qq.com
 * @Date: 2020-05-26 12:13:06
 * @LastEditors: 471826078@qq.com
 * @LastEditTime: 2020-05-26 14:37:43
 */ 
const express = require('express')
const router = express.Router()
const Articles = require('./../model/article')
const tokenConfig = require('./../utils/tokens')

/**
 * @name: 写文章
 * @param {type} 
 * @Author: 471826078@qq.com
 */

 router.post('/addArticle',(req,res,next)=>{
    
 })
 /**
  * @name: 查询文章
  * @param {type} 
  * @Author: 471826078@qq.com
  */
 router.post('/query',(req,res,next)=>{

})
 module.exports = router
