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
    const justNames = [];

    state.playersArray.sort(function(a, b) {
        return 0.5 - Math.random();
    });

    state.playersArray.map(player => {
        return justNames.push(player.playerName);
    })

    const firstHalf = (justNames.splice(0, teamSplit));
    const secondHalf = justNames;

    return {
        ...state,
        team1: firstHalf,
        team2: secondHalf,
        teamsCreated: true,
    }
};

const sortBySkillsReducer = (state) => {
    const above5 = [];
    const below5 = [];
    const teamSplit = (state.playersArray.length) / 2;
    const alternatingLength = (state.playersArray.length - below5.length);
    let insertAt = 0;

    state.playersArray.map(player => {
        return player.playerSkills > 5 ? above5.push(player.playerName) : below5.push(player.playerName);
    })

    for (let i = 0; i <= (below5.length - 1); i++) {
        let currentBelow5 = below5[i];

        above5.splice(insertAt, 0, currentBelow5);

        insertAt += alternatingLength;
    }

    const firstHalf = (above5.splice(0, teamSplit));
    const secondHalf = above5;

    return {
        ...state,
        team1: firstHalf,
        team2: secondHalf,
        teamsCreated: true,
    }
}

const allPlayersConfirmed = (state) => {
    if (state.playersArray.length < state.amountPlayers * 2) {
        return {
            ...state,
            teamsCreated: false,
        }
    }
    return state;
}

const startMatchReducer = (state) => ({
    ...state,
    playersCreated: true,
})


const reducer = (state, action) => {
    switch (action.type) {
        case "SETTINGS_COMPLETED": return settingsReducer(state, action);
        
        // case "PLAYER_DETAILS_COMPLETED": return playerDetailsReducer(state, action);

        case "PLAYERS_RESET": return {
            ...initial,
            team1Name: state.team1Name,
            team2Name: state.team2Name,
            amountPlayers: state.amountPlayers,
        }

        case "PLAYER_ADDED": return playerAddedReducer(state, action);

        case "SORT_RANDOMLY": return allPlayersConfirmed(sortRandomReducer(state));

        case "SORT_BY_SKILLS": return allPlayersConfirmed(sortBySkillsReducer(state));

        case "START_MATCH": return startMatchReducer(state);

        default: return state;
    }
  
  };
  
  export default reducer;