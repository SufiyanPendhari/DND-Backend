const express = require('express')
const axios = require('axios')
const router = express.Router()

// technology
router.get('/technology',async(req,res)=>{
    await request('Technology',8)
    .then((data)=>res.json(data))
  })
// science
router.get('/science',async(req,res)=>{
    await request('Science',9)
    .then((data)=>res.json(data))
  })
//  fashion
  router.get('/fashion',async(req,res)=>{
    await request('Fashion',12)
    .then((data)=>res.json(data))
  })
//  architecture
  router.get('/architecture',async(req,res)=>{
    await request('Architecture',11)
    .then((data)=>res.json(data))
  })
//   beach
  router.get('/beach',async(req,res)=>{
    await request('Beach',9)
    .then((data)=>res.json(data))
  })

//   phones
  router.get('/phones',async(req,res)=>{
    await request('Phones',16)
    .then((data)=>res.json(data))
  })

//   landscape
  router.get('/landscape',async(req,res)=>{
    await request('Landscape',10)
    .then((data)=>res.json(data))
  })

// People
  router.get('/people',async(req,res)=>{
    await request('People',12)
    .then((data)=>res.json(data))
  })

//  nature
  router.get('/nature',async(req,res)=>{
    await request('Nature',13)
    .then((data)=>res.json(data))
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