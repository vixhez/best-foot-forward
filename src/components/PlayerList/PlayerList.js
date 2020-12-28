const PlayerList = ({ playersArray, players }) => (
    playersArray.map((player, index) => {
        return (
            <div className="team1 col-md-6 mt-4">
                <ul>
                    <li
                        key={index}>
                            Player: {player.playerName}, skill level: {player.playerSkills}
                    </li>
                </ul>
            </div>
        );
    })
);

export default PlayerList;