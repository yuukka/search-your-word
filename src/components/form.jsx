// src/components/form.jsx

import React, { useState, useEffect } from "react";
import { Textarea, Input, Popover, PopoverTrigger,PopoverContent,PopoverArrow, PopoverCloseButton, FormControl, FormLabel,  IconButton, Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Image, Text, useDisclosure, Collapse, Box } from '@chakra-ui/react'
import Favcard from './Favcard'
import FocusLock from "react-focus-lock"
import PopoverForm from './PopoverForm'
import { airTableAPI } from '../api/airTable'


// Create input area for the popup form (notes)
const Form = ({ firstFieldRef, onCancel, fav, formData, setFormData, getFavListFunction }) => {
    const [finalFormData, setFinalFormData] = useState('');

    const handleChange = (event) => {
        setFormData(event.target.value);   
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFinalFormData(formData);
    }

    // Store notes in Airtable and render update the displayed favorite list 
    const patchFavFunction = async (event) =>{
        event.preventDefault();
        setFinalFormData(formData);
        let type = 'PATCH';
        let requestPayload = null;
        const patchFav = await airTableAPI(requestPayload, type, fav.id, formData);
        setFinalFormData(formData);
        getFavListFunction('GET');
    };

    // Create textarea to imput notes
    return (
        <form onSubmit={patchFavFunction}>
            <Stack spacing={4}>
            <Textarea 
            ref={firstFieldRef} 
            placeholder='Add notes..' 
            id="favNotes" 
            name="favNotes"                        
            value={formData}
            onChange={(event) => setFormData(event.target.value)} />
            <ButtonGroup display='flex' justifyContent='flex-end'>
                <Button variant='outline' onClick={onCancel}>
                Cancel
                </Button>
                <Button type='submit' colorScheme='teal' onClick={onCancel}>
                Save
                </Button>
            </ButtonGroup>
            </Stack>            
        </form>
    )
}

export default Form;
 