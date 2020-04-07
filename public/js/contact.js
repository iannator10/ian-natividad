var contactDom = new Vue({
    el: '#contactDom',
    name: 'Contact',
    data: {
        title: 'Contact Me',
        email: null,
        subject: null,
        message: null,
        isSuccess: null,
        submitMessage: null,
        isSubtMessage: false
    },
    methods: {
        submit: function () {
            var self = this;

            self.initSubmit(self.email, self.subject, self.message)
            self.submitSuccess();
        },
        initSubmit: function (email, subject, message) {
            var self = this;

            axios.post('/api/contact', {
                email: email,
                subject: subject,
                message: message
            })
                .then(function (response) {
                    self.isSuccess = true;
                    self.submitMessage = response.data["msg"];
                })
                .catch(function (error) {
                    self.isSuccess = false
                    self.submitMessage = error.data["msg"];
                });
        },
        submitSuccess: function () {
            var self = this;

            self.isSubtMessage = true;

            if (!self.isSuccess) {
                self.submitMessage = self.error
            } else {
                self.submitMessage = self.success
            }

            setTimeout(() => {
                self.isSubtMessage = false;
            }, 3000)
        }
    }
})