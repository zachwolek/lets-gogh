import { useState } from 'react'

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
            <label htmlFor="search">Search Artifacts</label>
            <input
                className='input' 
                type="text" 
                name="search" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                className='searchButton'
                onClick={(e) => handleSubmit(e)}
            >Search</button>
        </form>
    )
}