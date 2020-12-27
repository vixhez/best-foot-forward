export const settingsCompleted = (data) => {
    return {
        type: "SETTINGS_COMPLETED",
        data: data,
    }
}

export const playerDetailsCompleted = (data) => {
    return {
        type: "PLAYER_DETAILS_COMPLETED",
        data: data,
    }
}

export const playersReset = () => {
    return {
        type: "PLAYERS_RESET",
    }
}

export const playerAdded = (data) => {
    return {
        type: "PLAYER_ADDED",
        data: data,
    }
}