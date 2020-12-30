import initial from "./initial";

const settingsReducer = (state, action) => ({
    ...state,
    info: true,
    team1Name: action.data.team1Name,
    team2Name: action.data.team2Name,
    amountPlayers: action.data.amountPlayers,
    team1Kit: action.data.team1Kit,
    team2Kit: action.data.team2Kit,
    team1Design: action.data.team1Design,
    team2Design: action.data.team2Design,
    team1Banner: action.data.team1Banner,
    team2Banner: action.data.team2Banner
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
    const above6 = [];
    const below6 = [];
    const teamSplit = (state.playersArray.length) / 2;
    let insertAt = 0;

    state.playersArray.map(player => {
        return player.playerSkills > 6 ? above6.push(player.playerName) : below6.push(player.playerName);
    })

    let alternatingLength = Math.ceil((state.playersArray.length / below6.length));

    console.log(above6);
    console.log(below6);

    for (let i = 0; i <= (below6.length - 1); i++) {
        let currentBelow6 = below6[i];

        above6.splice(insertAt, 0, currentBelow6);

        insertAt += alternatingLength;
    }

    const firstHalf = (above6.splice(0, teamSplit));
    const secondHalf = above6;

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