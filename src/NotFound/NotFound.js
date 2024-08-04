import { Link } from "react-router-dom"
import './NotFound.css'

export const NotFound = ({setSearchValue}) => {
    return (
        <main className="not-found">
            <h2>Sorry! We can't find what you're looking for!</h2>
            <Link to="/" className="home-link" onClick={() => setSearchValue('')}>Return Home</Link>
            <img src={`https://www.artic.edu/iiif/2/f9549068-ad7e-c9ce-6fed-5c7a429024fb/full/700,/0/default.jpg`}/>
        </main>
    )
}