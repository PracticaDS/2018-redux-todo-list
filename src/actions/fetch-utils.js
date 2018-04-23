import uuid from 'uuid/v4'

export const id = uuid()

const jsonBody = body => ({
  headers: {
    UserId: id,
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
  method: 'DELETE',
  headers: {
    UserId: id,
  }
})

export const putRequestWithJSONBody = body => ({
  method: 'PUT',
  ...jsonBody(body)
})