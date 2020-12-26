const settingsReducer = (state, action) => ({
  ...state,
  info: true,
  team1Name: action.data.team1Name,
  team2Name: action.data.team2Name,
});

const reducer = (state, action) => {
    switch (action.type) {
      case "SETTINGS_COMPLETED": return settingsReducer(state, action);

      default: return state;
    }
  
  };
  
  export default reducer;