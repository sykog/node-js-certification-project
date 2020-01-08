const express = require('express')
const router = express.Router();
const News = require('../News')

router.post('/',async (req,res) => {
    console.log("here")
    const { title, description, Url, UrlToImage} = req.body;
    console.log(Url)
    console.log(UrlToImage)
    try {

        let news = await News.findOne({title})
        if(news){
            return res.status(401).json('News already exists')
        }

        news = new News({
            title,
            description,
            Url,
            UrlToImage
        })

        await news.save()
        console.log(news)
        res.json(news)

    } catch(err){
        console.error(err);
        res.status(500).json(err);
    }
})

router.get('/',async(req,res) => {
    try {
        const news = await News.find()
        res.json(news);
    }catch(err){
        console.error(err);
        res.status(500).json(err);
    }
})

router.put('/:id',async(req,res) => {
    try {
        const { title,description,Url,UrlToImage } = req.body;
        let news = await News.findOne({_id:req.params.id})
        if(!news){
            return req.status(401).json('News does not exists')
        } else {
            news.title = title;
            news.description = description;
            news.Url = Url;
            news.UrlToImage = UrlToImage;
    
            await news.save()
            res.json(news)
        }
    }catch(err){
        console.error(err);
        res.status(500).json(err);
    }
})

router.delete('/:id',async(req,res) => {
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