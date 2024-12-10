import './styles.css'
import ReactLoading from 'react-loading'

export const CircularLoading = ({width, height}) => {
    return (
        <div className='loading-container'>
            <ReactLoading type={'spin'} color={'#0000ff'} height={height ? height : '40px'}width={width ? width : '40px'} />
            <h4>Carregando informações</h4>
        </div>
    )
}