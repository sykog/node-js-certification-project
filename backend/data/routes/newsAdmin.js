const express = require('express')
const router = express.Router();
const News = require('../News');
const validator = require('../validator');

router.post('/add-news', /*validator.authenticate,*/ async (req,res) => {
    const { title, description, url, urlToImage} = req.body;
    try {
        let news = await News.findOne({title})
        if(news){
            return res.status(401).json('News already exists')
        }

        news = new News({
            title,
            description,
            url,
            urlToImage
        })

        await news.save()
        res.json(news)

    } catch(err){
        console.error(err);
        res.status(500).json(err);
    }
})

router.get('/get-news',/*validator.authenticate,*/ async(req,res) => {
    try {
        const news = await News.find()
        res.json(news);
    }catch(err){
        console.error(err);
        res.status(500).json(err);
    }
})

router.put('/update-news/:id',/*validator.authenticate,*/ async(req,res) => {
    try {
        const { title,description,url,urlToImage } = req.body;
        let news = await News.findOne({_id:req.params.id})
        if(!news){
            return req.status(401).json('News does not exists')
        } else {
            news.title = title;
            news.description = description;
            news.url = url;
            news.urlToImage = urlToImage;
    
            await news.save()
            res.json(news)
        }
    }catch(err){
        console.error(err);
        res.status(500).json(err);
    }
})

router.delete('/delete-news/:id',/*validator.authenticate,*/ async(req,res) => {
    try {
       const news = await News.findOneAndDelete({_id:req.params.id})
       if(!news){
           return res.status(401).json("Cannot delete news")
       }  else {
           res.status(200).json("Deleted Successfully")
       }
    }catch(err){
        console.error(err);
        res.status(500).json(err);
    }
})

module.exports = router;