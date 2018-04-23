
export const ServerActionTypes = {
  UPDATED: 'UPDATED',
  DELETED: 'DELETED',
  ADDED: 'ADDED'
}

export const onData = data => dispatch => {
  dispatch(data)
}
