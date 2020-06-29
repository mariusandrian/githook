const usersRepository = require('../repositories/usersRepository');
const bcrypt = require('bcrypt');

module.exports = {
    newForm (req, res) {
        res.render('sessions/new');
    },
    async create(req, res) {
        try {
            const user = await usersRepository.find(req.body.username);
            if (bcrypt.compareSync(req.body.password, user.password)) {
                // Create session
                req.session.currentUser = user;
                res.redirect('/');
            } else {
                throw new Error()
            }
        } catch (err) {
            console.log(`Error message is ` + err);
            return res.send('<a href="/sessions/new">Username and password are wrong</a>')
        }
    },

    destroy(req, res) {
        return req.session.destroy(() => {
            res.redirect('/');
        })
    }
};