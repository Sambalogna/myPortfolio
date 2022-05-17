const router = require('express').Router();
const Project = require('../models/Project');

router.get('/', async (req, res)=> {
    try{
        const projectData = await Project.findAll();
        const projects = projectData.map((project) => project.get({plain:true}));
        res.render('home', {projects})
    }
    catch(err) {
        res.status(500)
    }
})

module.exports = router;