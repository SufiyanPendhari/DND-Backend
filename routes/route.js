const express = require('express')
const axios = require('axios')
const router = express.Router()
const CategorySchema = require('../model/categorySchema')

// technology
router.get('/category',async(req,res)=>{
   await CategorySchema.find()
    .then((data)=>res.json(data))
})

router.get('/:categoryId',async(req,res)=>{
  if(req.params.categoryId=='wait'){
  }else{
    const data = await CategorySchema.findById(req.params.categoryId);
    await request(data.categoryName,data.categorySize)
      .then((data)=>res.json(data))
  }
})



module.exports = router

// function to get list of object with name and url 
function request(query,page) {
    // fetch from unsplash api 
     return  axios({
              method: 'get',
              response:'json',
              url: `https://api.unsplash.com/search/photos/?query=${query}&page=1&&per_page=${page}&client_id=_52x5J-A8YXGpmqKr75iv60WbjQeV-3LHRceYZ-6dYo`,
          })
          .then(function (response) {
              return response.data.results
          }) .then(data=>{
            let finalData=[]
            data.map((d,i)=>{
              finalData.push({
                name:`${query}-img-${i+1}`,
                url: d.urls.regular
              })
            })
//  return array of object containing object with name & url
            return finalData
          })
      }