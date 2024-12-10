export const MediumButton = (props) => {
    const buttonClass = `button ${props.buttonColor} ${props.buttonSize} ${props.design}`
    return (
        <button style={{ marginRight: 5, marginLeft: 5, width: 120, marginTop: props.marginTop || 0}} onClick={() => props.eventClick(props.wlId)} className={buttonClass}>{props.text}</button>
    )
}