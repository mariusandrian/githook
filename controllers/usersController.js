const usersRepository = require('../repositories/usersRepository.js');
const { validate } = require('../validators/usersValidator');

module.exports = {
    async create(req, res) {
        try {
            validate(req.body);
            await usersRepository.create(req.body);
            res.redirect('/')
        } catch (err) {
            res.render('errors/404', { err });
        }
    },
    newForm (req, res) {
        res.render('users/new');
    }
};