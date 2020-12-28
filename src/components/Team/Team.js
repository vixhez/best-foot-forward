const Team = ({ teamName, team }) => (
    team.map((player, index) => {
            return (
                <div>
                    <ul>
                        <li
                            key={index}>
                            {team[index]}
                        </li>
                    </ul>
                </div>
            )
    })
);
    
    
export default Team;