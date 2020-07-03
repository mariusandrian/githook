const starredRepository = require('../repositories/starredRepository');
const notesRepository = require('../repositories/notesRepository');


module.exports = {
    async getAll (req, res) {
        const repos = await starredRepository.getAll();
        
        let notes = [];
        if(req.session.currentUser !== undefined) {
            notes = await notesRepository.getAll(req.session.currentUser.username);
        }
        // console.log(notes);
        res.render('index', { currentUser: req.session.currentUser, data: repos, notes: notes});
    },
    async update (req, res) {
        try {
            const item = {
                'content': req.body.content,
            };
            // console.log(req.body.content);
            await notesRepository.updateById(req.params.id, item);
            res.redirect('/');
        } catch (err) {
            return res.render('errors/404', { err });
        }  
    },
    async create (req, res) {
        try {
            const result = await notesRepository.createNew(req.session.currentUser.username);
            console.log('Controller create result = ' + result);
            res.redirect('/');
        } catch (err) {
            return res.render('errors/404', { err });
        }
    },
    app (req, res) {
        if(req.session.currentUser) {
            res.render('app/index');
        } else {
            res.redirect('/');
        }
    }
};