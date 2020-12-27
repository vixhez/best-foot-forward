import initial from "./initial";

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

        case "PLAYERS_RESET": return {
            ...initial,
            // team1Name: state.team1Name,
            // team2Name: state.team2Name,
            // amountPlayers: state.amountPlayers,
            // info: true,
        }

        default: return state;
    }
  
  };
  
  export default reducer;