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