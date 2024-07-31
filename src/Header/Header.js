import { Form } from '../Form/Form'
import { Link } from 'react-router-dom'

export const Header = ({setSearchValue}) => {
    return (
    <header>
        <h1>Let's Gogh</h1>
        <Form setSearchValue={setSearchValue}/>
        <Link to="/saved" className="saved-link">Saved Exhibitions</Link>
     </header>
    )
}

//click on saved
//run function of loading all Cards based on IDs

//What is the name of the function that runs IDs? 