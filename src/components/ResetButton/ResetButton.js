const ResetButton = ({ playersReset }) => (
    <button
        onClick={ playersReset }
        className="btn resetButton">
        Restart
    </button>
);

export default ResetButton;