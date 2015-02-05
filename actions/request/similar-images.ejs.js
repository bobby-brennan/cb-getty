<%-
  Lucy.request({
    method: 'get',
    returns: 'json',
    protocol: 'https',
    domain: 'api.gettyimages.com',
    path: {join: ['v3/images/', {answer: 'imageID'}, '/similar']},
    headers: {
      'Api-Key': Lucy.answer('apiKey'),
    },
    query: {
      'page_size': 10
    }
  })
%>
