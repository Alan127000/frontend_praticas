import { DetailsTitle } from "../layout/Details/Details"

export const Card = (props) => {
    return (
        <div className="card" onClick={() => props.clickEvent(props.gameId, props.wlGames, props.wlName)} style={{width: 270, height: props.height || 320, padding: 10, marginRight: 5, marginLeft: 5, cursor: 'pointer'}}>
            <div className="card-header">
                <img style={{width: '100%', height: 150}} src={props.image} alt="Erro"/>
            </div>
            <div className="card-footer" style={{flexDirection: 'column', textAlign: "center"}}>
                <DetailsTitle text={`Jogo: ${props.gameName}`} />
                {props.havePrice && <DetailsTitle text={`Preço: ${props.monetaryUnit} ${props.gameValue}`} /> }
            </div>
        </div>
    )
}