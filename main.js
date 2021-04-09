var app = new Vue ({
  el: '#root',
  data: {
    mail: [],
    prova: 'test',
  },
  mounted () {
    for (var i = 0; i < 10; i++) {
      let origine = this
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function (response) {
      let result = response.data.response;
      origine.mail.push(result);
      })
    }
  },
})
