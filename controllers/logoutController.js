const getLogoutView = (req, res) => {
    res.render('logout', {
        headTitle: 'Logout',
        menuLinks: MENU_LINKS,
        activeLinkPath: '/logout'
    });
};

const logoutUser = (req, res) => {

    res.redirect('/');
};

module.exports = {
    getLogoutView,
    logoutUser
};
