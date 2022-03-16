import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <Link to={'/'}>
                    <h1>many many doggos</h1>
                </Link>
            </div>
        </header>
    )
}

export default Header;