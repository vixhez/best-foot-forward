const settingsReducer = (state, action) => ({
  ...state,
  info: true,
  team1Name: action.data.team1Name,
  team2Name: action.data.team2Name,
  amountPlayers: action.data.amountPlayers,
});

const playerDetailsReducer = (state, action) => ({
    ...state,
    playerNames: action.data.playerNames,
});

const reducer = (state, action) => {
    switch (action.type) {
        case "SETTINGS_COMPLETED": return settingsReducer(state, action);
        
        case "PLAYER_DETAILS_COMPLETED": return playerDetailsReducer(state, action);

        default: return state;
    }
  
  };
  
  export default reducer;