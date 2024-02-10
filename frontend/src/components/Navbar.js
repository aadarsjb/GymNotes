import {Link } from 'react-router-dom'

//Function that returns Navbar template
const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>GYMNotes</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar;