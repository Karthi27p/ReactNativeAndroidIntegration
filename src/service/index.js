export async function callApi(data, methodType, url) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: methodType,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.errors) {
          reject(response);
        } else {
          resolve(response);
        }
      })
      .catch((error) => reject(error));
  });
}
