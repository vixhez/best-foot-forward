const ResetButton = ({ playersReset }) => (
    <button
        onClick={ playersReset }
        type="submit"
        className="btn btn-primary">
        Reset Players
    </button>
);

export default ResetButton;