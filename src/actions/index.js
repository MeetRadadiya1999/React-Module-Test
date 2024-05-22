// actions/index.js

export const addGroup = group => {
  return (dispatch, getState) => {
    dispatch({
      type: 'ADD_GROUP',
      payload: group
    });

    const { groups } = getState();
    
    localStorage.setItem('groups', JSON.stringify(groups));
  };
};


export const selectGroup = (group) => ({
  type: 'SELECT_GROUP',
  payload: group
});

export const backToHome = () => ({
      type: 'BACK_HOME',
})
export const resetBackToHome = () => ({
      type: 'RESET_BACK_HOME',
})