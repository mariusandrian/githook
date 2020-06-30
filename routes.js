// const shopController = require('./controllers/shopController');
const usersController = require('./controllers/usersController');
const sessionsController = require('./controllers/sessionsController');
const appController = require('./controllers/appController');

module.exports = app => {
    app.get('/', appController.getAll);

    app.get('/sessions/new', sessionsController.newForm);
    app.post('/sessions', sessionsController.create);

    app.get('/users/new', usersController.newForm);
    app.post('/users', usersController.create);

    // app.post('/notes', notesController.create);
    // app.get('/app', appController.app);
    app.delete('/sessions', sessionsController.destroy);

    // update route
    app.put('/notes/:id', appController.update);
};