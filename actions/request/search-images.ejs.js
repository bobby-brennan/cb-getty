<%
  var pathSuffix = '';
  var type = Lucy.answer('creativeOrEditorial');
  if (type !== 'both') {
    pathSuffix = '/' + type;
  }
-%>
<%-
  Lucy.request({
    method: 'get',
    returns: 'json',
    protocol: 'https',
    domain: 'api.gettyimages.com',
    path: 'v3/search/images' + pathSuffix,
    headers: {
      'Api-Key': Lucy.answer('apiKey'),
    },
    query: {
      'phrase': {answer: 'query'},
      'page_size': 10
    }
  })
%>
