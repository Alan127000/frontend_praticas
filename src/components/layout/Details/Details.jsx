import './styles.css'

export const DetailsTitle = (props) => {
    return (
        <h4 className="details-title">{props.text}</h4>
    )
}

export const DetailsContainer = (props) => {
    return (
        <div className='details-container'>
            {props.children}
        </div>
    )
}

export const DetailsImage = (props) => {
    return (
        <img className="details-image" src={props.image} />
    )
}

export const DetailsHeader = (props) => {
    return (
        <div className="details-header">
            {props.children}
        </div>
    )
}

export const DetailsDescription = (props) => {
    return (
        <div className='details-description'>
            {props.children}
        </div>
    )
}

export const DetailsBestPrice = (props) => {
    return (
        <div className='details-best-price'>
            {props.children}
        </div>
    )
}

export const DetailsDealsContainer = (props) => {
    return (
        <div className="details-deals-container">
            {props.children}
        </div>
    )
}

export const DetailsDealsRowContainer = (props) => {
    return (
        <div className="details-deals-row-container">
            {props.children}
        </div>
    )
}

export const DetailsDealsColumnContainer = (props) => {
    return (
        <div className="details-deals-column-container">
            {props.children}
        </div>
    )
}

export const DetailsCommentsColumnContainer = (props) => {
    return (
        <DetailsDealsColumnContainer>
            {props.children}
        </DetailsDealsColumnContainer>
    )
}

export const DetailsVideosContainer = (props) => {
    return (
        <DetailsDealsContainer>
            {props.children}
        </DetailsDealsContainer>
    )
}

export const DetailsCommentsContainer = (props) => {
    return (
        <DetailsDealsContainer>
            {props.children}
        </DetailsDealsContainer>
    )
}

export const DetailsVideosRowContainer = (props) => {
    return (
        <DetailsDealsRowContainer>
            {props.children}
        </DetailsDealsRowContainer>
    )
}

export const DetailsCommentsRowContainer = (props) => {
    return (
        <DetailsDealsRowContainer>
            {props.children}
        </DetailsDealsRowContainer>
    )
}

export const DetailsVideosTitleContainer = (props) => {
    return (
        <div className='details-videos-title-container'>
            {props.children}
        </div>
    )
}