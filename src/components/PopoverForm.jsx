// src/components/Popoverform.jsx

import React, { useState, useEffect } from "react";
import { Textarea, Input, Popover, PopoverTrigger,PopoverContent,PopoverArrow, PopoverCloseButton, FormControl, FormLabel,  IconButton, Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Image, Text, useDisclosure, Collapse, Box } from '@chakra-ui/react'
import Favcard from './Favcard'
import  FocusLock from "react-focus-lock"
import Form from './form'

const PopoverForm = ({ fav, formData, setFormData, getFavListFunction }) => {
const { onOpen, onClose, isOpen } = useDisclosure();
const firstFieldRef = React.useRef(null)

// Create Popup form for the notes
return (
    <>
    <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement='top'
        closeOnBlur={false}
    >
        <PopoverTrigger>
        <Button id='addFav' variant='solid' colorScheme='blue'>Add Notes</Button>
        </PopoverTrigger>
        <PopoverContent p={5}>
        <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Form 
                firstFieldRef={firstFieldRef} 
                onCancel={onClose} 
                fav={fav}
                formData={formData}
                setFormData={setFormData}
                getFavListFunction={getFavListFunction}
            />
        </FocusLock>
        </PopoverContent>
    </Popover>
    </>
)
}



export default PopoverForm;
 