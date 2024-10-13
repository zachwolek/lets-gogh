import { Form } from '../Form/Form'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './Header.css'

export const Header = ({setSearchValue, searchValue}) => {
    return (
<header>
    <h1>Let's Gogh!</h1>
    <div className="bottom-header">
        <h2 className="header-left">To the Chicago Art Institute</h2>
        <div className="header-right">
            <div className="link-wrapper">
                <Link to="/saved" className="button-link">Saved Exhibitions</Link>
            </div>
            <Form setSearchValue={setSearchValue} />
        </div>
    </div>
    <hr className="header-divider" />
</header>
    )
}

Header.propTypes = {
    setSearchValue: PropTypes.func.isRequired,
};