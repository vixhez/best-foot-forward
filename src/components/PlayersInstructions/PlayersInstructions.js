const PlayersInstructions = () => (
    <div className='sidebarPlayersInstructions'>
        <div className='sidebarSettings'>
            <h6>
                Guidance
            </h6>
            <p>
                Great designing!
                Now it's time to tell the app your player's names and skill levels.
                The number of player fields on your left is based on how many people you told us would be on each team.
                Fill out each field and then press 'Confirm Player'.
                You then have the choice to sort your teams randomly or, for fairer teams, based on their skills levels. If it's all gone horribly wrong, just press restart!
            </p>
        </div>

        <div className='sidebarAbout'>
        <h6>
                About
            </h6>
            <p>
                This app is the fruit of an assigned technical challenge as part of Develop Me's Coding Fellowship Bootcamp. You are very welcome to check out the code <a href='https://github.com/vixhez/best-foot-forward' target='_blank'
                rel='noreferrer'>here</a>.

            </p>
        </div>
    </div>
);

export default PlayersInstructions;