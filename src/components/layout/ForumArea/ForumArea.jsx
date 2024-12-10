import "./styles.css"

export const ForumArea = (props) => {
    return (
        <div className='forum-area'>{props.children}</div>
    )
}

export const ForumHeader = (props) => {
    return (
        <div className="forum-header">{props.children}</div>
    )
}

export const ForumCard = (props) => {
    return (
        <div className="forum-card">{props.children}</div>
    )
}

export const IconsArea = (props) => {
    return (
        <div className="icons-area">{props.children}</div>
    )
}

export const Icon = (props) => {
    return (
        <div className="icon" onClick={props.onClick}>{props.children}</div>
    )
}