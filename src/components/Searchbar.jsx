import { useState } from "react";
import { Input } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'


const Searchbar = (props) => {
    // const[wordSearch, setWordSearch] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(props.wordSearch);
        // console.log(event.target);
        props.searchWords(props.wordSearch);
        //console.log(event.target.elements.search.value);
        // alert("The form was submitted");
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input 
                type='text'
                name='searchs'
                placeholder='Search' 
                value = {props.wordSearch}
                onChange={(event) => props.setWordSearch(event.target.value)}
                />
                
                <IconButton type='submit' aria-label='Search database' icon={<SearchIcon />}  />
            </form>
            
        </>

    );
};

export default Searchbar;