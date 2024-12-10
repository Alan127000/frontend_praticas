import './styles.css'

export const WishListInlineComponent = (props) => {
    return (
        <div className='wish-list-inline'>{props.children}</div>
    )
}

export const WishListInlineComponentSpaceArround = (props) => {
    return (
        <div className='wish-list-inline-around'>{props.children}</div>
    )
}