
export const ServerActionTypes = {
  UPDATED: 'UPDATED',
  DELETED: 'DELETED'
}

export const onData = data => dispatch => {
  dispatch(data)
}
