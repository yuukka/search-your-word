import React, { useState, useEffect } from "react";
import { Textarea, Input, Popover, PopoverTrigger,PopoverContent,PopoverArrow, PopoverCloseButton, FormControl, FormLabel,  IconButton, Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Image, Text, useDisclosure, Collapse, Box } from '@chakra-ui/react'
import { airTableAPI } from '../api/airTable'
import  FocusLock from "react-focus-lock"
import PopoverForm from './PopoverForm'



const Favcard = (props) => {
    const initialState = '';
    const [favCard, setFavCard] = useState();
    const [formData, setFormData] = useState(initialState);

    const deleteFavFunction = async () =>{
        let requestType = 'DELETE';
        let requestPayload = null;
        const deleteFav = await airTableAPI(requestPayload, requestType, props.fav.id);
        props.getFavListFunction();
    };



    // useEffect(() => {
    //     console.log(formData);
    // },[formData]);

    // useEffect(() => {
    //     console.log(finalFormData);
    // },[finalFormData]);

    useEffect(() => {
        setFavCard(props.fav);
    },[props.fav]);

    // useEffect(() => {
    //     console.log(props.fav);        
    //     console.log(favCard);
    // },[favCard]);


    return (
        <>
            
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src = {props.fav.fields.gif}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md' color='blue.600' fontSize='md'>かんじ: {props.fav.fields.kana}</Heading>
                    <Heading size='md' color='blue.600' fontSize='md'>かんじ: {props.fav.fields.kanji}</Heading>
                    <Heading size='md' color='blue.600' fontSize='md'>ふりがな: {props.fav.fields.furigana} </Heading>
                    <Text>
                        <Text as='b' fontSize='md'>えいごのいみ: </Text>
                        {props.fav.fields.glosses} 
                    </Text>
                    <Text>
                        <Text as='b' fontSize='md'>のーと: </Text>
                        {props.fav.fields.notes} 
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'
                    justify='space-between'
                    flexWrap='wrap'
                    sx={{
                        '& > button': {
                            minW: '150px',
                        },
                    }}
                    >
                    <Button id='addFav' variant='ghost' colorScheme='blue' onClick={deleteFavFunction}>
                        Remove
                    </Button>
                    <PopoverForm 
                        fav={favCard}
                        formData={formData}
                        setFormData={setFormData}
                        getFavListFunction={props.getFavListFunction}
                    />
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>

    );
};

export default Favcard;