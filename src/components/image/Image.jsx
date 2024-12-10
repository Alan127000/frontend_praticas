export const Image = (props) => {
    const imageClass = `image ${props.imageSize}`
    return (
        <figure class={imageClass}>
            <img alt='erro' src="https://bulma.io/images/placeholders/128x128.png" />
        </figure>
    )
}