import { Link } from "react-router-dom"

export const SavedExhibitions = () => {
    return (
        <>
        <header>SAVED</header>
        <Link to={`/`}>
                <button>BACK</button>
        </Link>  
        </>
    )
}