define(function(require) {
    var $ = require('jquery');
    var React = require('react');
    var UserService = require('../service/user');
    var Nav = require('../templates/build/Nav');
    var Main = require('../templates/build/Main');
    var Router = require('parasites/Router');

    var SocketClient = UserService.socket;

    //function renderMain(user) {
        //React.render(React.createElement(Main, {user: user}), document.getElementById('content'));
    //}

    //function renderNav(user) {
        //React.render(React.createElement(Nav, {user: user}), document.getElementById('navigation'));
    //}

    //function render(user) {
        //renderNav(user);
        //renderMain(user);
    //}

    return {
        enter: function() {
            console.log('enter root');
            React.render(React.createElement(Nav), document.getElementById('navigation'));

            UserService.getUser().done(function() {
                Router.navigate('/list');
            }).fail(function() {
                Router.navigate('/login');
            });
        },
        leave: function() {
            console.log('leave root');
        }
    };
});
