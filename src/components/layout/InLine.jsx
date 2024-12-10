export const InLine = (props) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 5, marginBottom: 10}}>
            {props.children}
        </div>
    )
}