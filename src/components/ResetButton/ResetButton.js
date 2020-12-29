const ResetButton = ({ playersReset }) => (
    <button
        onClick={ playersReset }
        className="btn btn-danger">
        Go Back
    </button>
);

export default ResetButton;