import initial from "./initial";

const settingsReducer = (state, action) => ({
  ...state,
  info: true,
  team1Name: action.data.team1Name,
  team2Name: action.data.team2Name,
  amountPlayers: action.data.amountPlayers,
});

// const playerDetailsReducer = (state, action) => ({
//     ...state,
//     playerNames: action.data.playerNames,
// });

const playerAddedReducer = (state, action) => ({
    ...state,
    players: {
        playerName: action.data.players.playerName,
        playerSkills: action.data.players.playerSkills,
    },
    playersArray: (state.playersArray.concat(action.data.players)),
});

const sortRandomReducer = (state) => {   
    const teamSplit = (state.playersArray.length) / 2;

    state.playersArray.sort(function(a, b) {
        return 0.5 - Math.random();
    });

    const firstHalf = (state.playersArray.splice(0, teamSplit));
    const secondHalf = state.playersArray;

    return {
        ...state,
        team1: firstHalf,
        team2: secondHalf,
        teamsCreated: true,
    }
};


const reducer = (state, action) => {
    switch (action.type) {
        case "SETTINGS_COMPLETED": return settingsReducer(state, action);
        
        // case "PLAYER_DETAILS_COMPLETED": return playerDetailsReducer(state, action);

        case "PLAYERS_RESET": return {
            ...initial,
            // team1Name: state.team1Name,
            // team2Name: state.team2Name,
            // amountPlayers: state.amountPlayers,
            // info: true,
        }

        case "PLAYER_ADDED": return playerAddedReducer(state, action);

        case "SORT_RANDOMLY": return sortRandomReducer(state);

        // case "SORT_BY_SKILLS": return sortBySkillsReducer(state);

        default: return state;
    }
  
  };
  
  export default reducer;