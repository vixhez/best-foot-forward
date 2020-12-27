const ResetButton = ({ playersReset }) => (
    <button
        onClick={ playersReset }
        className="btn btn-danger">
        Reset Players
    </button>
);

export default ResetButton;