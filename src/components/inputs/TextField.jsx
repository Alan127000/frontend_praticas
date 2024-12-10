export const TextField = (props) => {
    const textFieldClass = `input ${props.inputColor} ${props.inputSize} ${props.design}`
    return (
        <input type={props.type ?? 'text'} style={{ marginTop: 15 }} className={textFieldClass} value={props.value} placeholder={props.placeholder} onChange={(e) => props.changeCallback(e.target.value)} />
    )
}