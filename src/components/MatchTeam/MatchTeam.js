const MatchTeam = ({ teamName, team }) => (
    team.map((player, index) => {
            return (
                <div>
                    <ul>
                        <li
                            class={index}
                            key={index}>
                            {team[index]}
                        </li>
                    </ul>
                </div>
            )
    })
);
    
    
export default MatchTeam;