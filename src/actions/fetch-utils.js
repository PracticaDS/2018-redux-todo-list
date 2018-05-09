import _isoFetch from 'isomorphic-fetch'

export const TEST_URL = "http://localhost:80"

const isBrowser = () => typeof window !== 'undefined'
const getBrowserUrl = url => `${location.protocol}//${location.host}${url}`
const pathToURL = url => isBrowser() ? getBrowserUrl(url) : `${TEST_URL}${url}`;

export const isoFetch = (path, options) => _isoFetch(pathToURL(path), options)

const jsonBody = body => ({
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
})

export const postWithJSONBody = body => ({
  method: 'POST',
  ...jsonBody(body)
})

export const deleteRequest = () => ({
  method: 'DELETE'
})

export const putRequestWithJSONBody = body => ({
  method: 'PUT',
  ...jsonBody(body)
})