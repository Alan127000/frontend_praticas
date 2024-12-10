import { Link } from "react-router-dom"

export const Navbar = (props) => {
    const signOut = () => {
        localStorage.removeItem('user')
    }
    return (
        <nav className='navbar is-link'>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/tasks" className="navbar-item">Início</Link>
                    <Link to='/tasks/new' className="navbar-item">Nova Tarefa</Link>
                    <Link className="navbar-item" onClick={() => signOut()} to='/'>Sair</Link>
                </div>
            </div>
        </nav>
    )
}
