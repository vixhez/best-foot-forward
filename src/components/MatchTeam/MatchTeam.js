const MatchTeam = ({ team, teamKit, teamDesign }) => (
    team.map((player, index) => {
        return (
            <div className='matchTeams'>
                <ul>
                    <li
                        class={index}
                        key={index}>
                        <div
                            className="matchDesigns"
                            style={{ backgroundImage: `url(${teamDesign})` }}
                            >
                            <img
                                className="matchKits"
                                src={`${teamKit}`} alt="Players with chosen kit" />
                        </div>

                        {team[index]}
                    </li>
                </ul>
            </div>
        )
    })
);


export default MatchTeam;