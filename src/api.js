const domain = process.env.REACT_APP_API_URL || 'https://api.github.com/';
const user = process.env.REACT_APP_API_USER;
const token = process.env.REACT_APP_API_TOKEN;

function genAuth() {
  return "Basic " + new Buffer(user + ":" + token).toString("base64");
}

function genUrl(path, params = []) {
  const paramString = Object.keys(params).reduce((acc, val) => {
    if (params[val]) {
      if (acc.length === 0) {
        return `?${val}=${params[val]}`;
      }
      return `${acc}&${val}=${params[val]}`;
    }
    return acc;
  }, '');
  return domain + path + paramString;
}

function genQuery (query) {
  const queryString = query.replace(/\s+/g, '+');
  return `${queryString}+is:issue+repo:facebook/react`;
}

export default async function fetchIssues(search) {
  let headers = {};
  if( user && token) {
    const auth = genAuth();
    headers = {Authorization: auth};
  }
  const url = genUrl('search/issues', {q: genQuery(search), per_page: 10});
  const req = new Request(url, {headers});
  const response = await fetch(req);
  return response.json();
};
