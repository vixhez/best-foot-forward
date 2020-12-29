const PlayButton = ({ startMatch }) => (
    <button
        onClick={ startMatch }
        class="btn btn-danger">
        Start Match!
    </button>
);

export default PlayButton;