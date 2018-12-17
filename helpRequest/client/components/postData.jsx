const postData = (dataObj) => {
  const url = 'http://ec2-18-191-92-21.us-east-2.compute.amazonaws.com/callback';
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