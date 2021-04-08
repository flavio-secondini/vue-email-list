var app = new Vue ({
  el: '#root',
  data: {
    mail: [],
    prova: 'test',
  },
  methods: {
    generaMail: function () {
      let origine = this
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function (response) {
      let result = response.data.response;
      origine.mail.push(result);
      })
    }
  }
})
