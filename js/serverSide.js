var serverSide = (function() {

  async function api() {

    var dataAPI;

    await axios.post('...?/games/public/oauth/token', {
      client_id: 3,
      client_secret: '...',
      grant_type: 'password',
      username: '...',
      password: '...'
    })
    .then(({data}) => {
      axios.defaults.headers.common['Authorization'] = data.token_type + data.access_token;
      dataAPI = 1;
    })
    .catch(error => {
      console.log(error);
    })


    return dataAPI;

  }

  async function getData() {

    var getRanking;

    await axios.get('...?/games/public/api/games/1')
    .then(({data}) => {
      getRanking = data.data;
    })
    .catch(error => {
      console.log(error);
    })

    return getRanking;
  }

  async function postData(playerName, sumPoints) {
    await axios.post('...?/games/public/api/players', {
      name: playerName,
      points: sumPoints,
      game_id: 1,
    })
    .then(({data}) => {
    })
    .catch(error => {
      console.log(error);
    })
  }


  return {
    api: function() {
      return api();
    },
    getData: function() {
      return getData();
    },
    postData: function(playerName, points) {
      return postData(playerName, points);
    }
  }
})();


export {
  serverSide
};
