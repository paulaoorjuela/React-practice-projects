export default function StepTitle({ step, children }) {
    return (
        <p className="message">
            Step {step}: {children}
        </p>
    );
}
