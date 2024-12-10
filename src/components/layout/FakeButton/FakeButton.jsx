import './styles.css'

export const FakeButton = (props) => {
    return (
        <div className={props.selected ? 'active': 'normal'} onClick={() => {
            let hasNavigation = true

            if (props.hasNavigation === false) {
                hasNavigation = false
            }

            if (hasNavigation)
                props.navigate(props.to)
        }}>
            {props.children}
        </div>
    )
}

export const FakeButtonCustomizable = (props) => {
    console.log(props.color)
    return (
        <div className={`${props.color}`} onClick={() => {
            let hasNavigation = true

            if (props.hasNavigation === false) {
                hasNavigation = false
            }

            if (hasNavigation)
                props.navigate(props.to)
        }}>
            {props.children}
        </div>
    )
}