const postData = (dataObj) => {
  const url = 'http://localhost:3004/callback';
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(dataObj),
  };
  return fetch(url, options).then(res => res);
};

export default postData;