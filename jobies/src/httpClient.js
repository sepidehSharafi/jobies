
const BASE_URL = 'http://localhost:3000'

export async function post(path, body) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(body);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

const data = fetch(`${BASE_URL}${path}`, requestOptions)
  .then(response => response.json())
  .catch(error => console.log('error', error));
  return data
} 

export async function get(path) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const data = await fetch(`${BASE_URL}${path}`, requestOptions)
      .then(response => response.json())
      .catch(error => console.log('error', error));

  return data
} 
export async function getComment(path, params) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const data = await fetch(`${BASE_URL}${path}`, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));

return data
} 

export async function DELETE(path, body) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify(body);

var requestOptions = {
method: 'DELETE',
headers: myHeaders,
body: raw,
redirect: 'follow'
};

const data = fetch(`${BASE_URL}${path}`, requestOptions)
.then(response => response.json())
.catch(error => console.log('error', error));
return data
} 

export async function put(path, body) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify(body);

var requestOptions = {
method: 'PUT',
headers: myHeaders,
body: raw,
redirect: 'follow'
};

const data = fetch(`${BASE_URL}${path}`, requestOptions)
.then(response => response.json())
.catch(error => console.log('error', error));
return data
} 
