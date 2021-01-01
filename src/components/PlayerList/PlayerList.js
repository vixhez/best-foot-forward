const PlayerList = ({ playersArray, players }) => (
    playersArray.map((player, index) => {
        return (
            <div className="playerListParent">
                <ul className='playerListUl'>
                    <li
                        className='playerListLi'
                        key={index}>
                            <span>Player:</span> {player.playerName}<span>, skill level:</span> {player.playerSkills}
                    </li>
                </ul>
            </div>
        );
    })
);

export default PlayerList;