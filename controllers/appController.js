const starredRepository = require('../repositories/starredRepository');


module.exports = {
    async getAll (req, res) {
        const repos = await starredRepository.getAll();
        // const notes = await notesRepository.getAll();
        // console.log(repos[0]);
        res.render('index', { currentUser: req.session.currentUser, data: repos});
    },
    app (req, res) {
        if(req.session.currentUser) {
            res.render('app/index');
        } else {
            res.redirect('/');
        }
    }
};