import { Application } from "../../types";

const URL = process.env.REACT_APP_SERVER;
console.log(URL)
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
    return Promise.reject(err)
  }
}

export function getData(): Promise<Application[]> {
  return fetchRequest('/data');
}

