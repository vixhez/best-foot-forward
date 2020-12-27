const PlayerList = ({ playersArray, players }) => (
    playersArray.map((player, index) => {
        return (
            <ul>
                <li
                    key={index}>
                        Player: {player.playerName}, skill level: {player.playerSkills}
                    </li>
            </ul>
        );
    })
);

export default PlayerList;