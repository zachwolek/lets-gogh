import { Form } from '../Form/Form'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './Header.css'

export const Header = ({setSearchValue, searchValue}) => {
    return (
    <header>
        <h1>Let's Gogh!</h1>
        <h2>To the Art Institute of Chicago</h2>
        <div className='form-wrapper'>
            <Form setSearchValue={setSearchValue}/>
            <div className='link-wrapper'>
                <Link to="/saved" className="saved-link">Saved Exhibitions</Link>
                {searchValue? <Link to="/" className="home-link" onClick={() => setSearchValue('')}>Return Home</Link>: <></>}
            </div>
            <hr className='header-divider' />
        </div>
     </header>
    )
}

Header.propTypes = {
    setSearchValue: PropTypes.func.isRequired,
};