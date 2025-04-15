const { MENU_LINKS } = require('../constants/navigation');

const getHomeView = (req, res) => {
    res.render('home', {
        headTitle: 'Home',
        menuLinks: MENU_LINKS,
        activeLinkPath: '/'
    });
};

module.exports = {
    getHomeView
};
