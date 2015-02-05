<%
  var pathSuffix = '';
  var type = Lucy.answer('creativeOrEditorial');
  if (type && type !== 'both') {
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
      'page_size': 10,
      'number_of_people': {join: {answer: 'number_of_people'}, on: ','},
      'exclude_nudity': {answer: 'exclude_nudity'},
      'ethnicity': {join: {answer: 'ethnicity'}, on: ','},
      'age_of_people': {join: {answer: 'age_of_people'}, on: ','}
    }
  })
%>
