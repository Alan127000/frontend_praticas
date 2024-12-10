export const Column = (props) => {
    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginBottom: 10}}>
            {props.children}
        </div>
    )
}