export const markDone = (taskId) => {
  return {
    type: 'MARK_DONE',
    payload: taskId
  }
}