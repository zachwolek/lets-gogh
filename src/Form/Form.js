import { useState } from 'react'
import PropTypes from 'prop-types';

export const Form = ({setSearchValue}) => {
    const [inputValue, setInputValue] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchValue(inputValue)
        clearInput()
    }

    const clearInput = () => {
        setInputValue('')
    }

    return (
        <form>
            <label htmlFor="search"></label>
            <input
                className='input-box' 
                type="text" 
                name="search" 
                placeholder='Search Exhibitions'
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