import { useState } from 'react'
import PropTypes from 'prop-types';

export const Form = ({setSearchValue}) => {
    const [inputValue, setInputValue] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        //handleError()
        //Create Error component
        //isError
        //set is Error, default value fault
        //if no error then display form
        //if there is an error then display error component
        setSearchValue(inputValue)
        clearInput()
    }

    const clearInput = () => {
        setInputValue('')
    }

    return (
        <form>
            <label htmlFor="search">Search Exhibitions</label>
            <input
                className='input-box' 
                type="text" 
                name="search" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                className='search-button'
                onClick={(e) => handleSubmit(e)}
            >Search</button>
        </form>
    )
}

Form.propTypes = {
    setSearchValue: PropTypes.func.isRequired,
};