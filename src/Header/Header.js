import { Form } from '../Form/Form'
import { Link } from 'react-router-dom'

export const Header = ({setSearchValue}) => {
    return (
    <header>
        <h1>Let's Gogh!</h1>
        <h2>To the Art Institute of Chicago</h2>
        <Form setSearchValue={setSearchValue}/>
        <Link to="/saved" className="saved-link">Saved Exhibitions</Link>
     </header>
    )
}
