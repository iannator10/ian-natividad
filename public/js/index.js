var mainDom = new Vue({
    el: '#mainDom',
    name: "Main Dom",
    data: {
        message: 'Hello Vue!',
        isContent: true,
        isAbout: false,
        isPortfolio: false,
        isContact: false
    },
    methods: {
        switchLink: function (link) {
            var self = this;
            switch (link) {
                case 'home':
                    self.isContent = true;
                    self.isAbout = false;
                    self.isPortfolio = false;
                    self.isContact = false;
                    break;
                case 'about':
                    self.isContent = false;
                    self.isAbout = true;
                    self.isPortfolio = false;
                    self.isContact = false;
                    break;
                case 'projects':
                    self.isContent = false;
                    self.isAbout = false;
                    self.isPortfolio = true;
                    self.isContact = false;
                    break;
                default:
                    self.isContent = true;
                    self.isAbout = false;
                    self.isPortfolio = false;
                    self.isContact = false;
            }
        }
    }
})