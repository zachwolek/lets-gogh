import { Link } from "react-router-dom"
import { Header } from '../Header/Header'
import './NotFound.css'

export const NotFound = ({setSearchValue}) => {
    return (
        <main className="not-found">
            <h1>Let's Gogh!</h1>
            <h2>To the Art Institute of Chicago</h2>
            <h3>Sorry! We can't find the URL you're looking for!</h3>
            <Link to="/" className="home-link" onClick={() => setSearchValue('')}>Return Home</Link>
            <img src={`https://www.artic.edu/iiif/2/f9549068-ad7e-c9ce-6fed-5c7a429024fb/full/700,/0/default.jpg`}/>
        </main>
    )
}