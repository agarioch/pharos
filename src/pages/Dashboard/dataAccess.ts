const URL = String(process.env.REACT_APP_SERVER_URL);

type options = {};

async function fetchRequest(path: string, options?: options) {
  try {
    const res = await fetch(URL + path, options);
    if (res.ok) {
      return res.status === 204 ? res : res.json();
    } else {
      return Promise.reject(res)
    }
  } catch (err) {
    //! send error message to logging platform
    console.log(err);
  }
}

export function getData() {
  return fetchRequest('/data');
}

