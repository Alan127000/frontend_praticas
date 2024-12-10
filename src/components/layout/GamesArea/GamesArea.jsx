import './styles.css'

export const GamesArea = (props) => {
    return (
        <div className='games-area'>
            {props.children}
        </div>
    )
}