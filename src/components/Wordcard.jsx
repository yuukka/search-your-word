// src/components/Wordlist.jsx

import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Image, Text, useDisclosure, Collapse, Box } from '@chakra-ui/react'
import { FavContext } from "../App";
import { useState, useContext } from "react";
import { airTableAPI } from '../api/airTable'


const Wordcard = (props) => {
    const { isOpen, onToggle } = useDisclosure();
    const favContext = useContext(FavContext);

    // Post action when the user clicked the button to save as their favorite word. This will call Airtabel API to save in the database
    const addFavFunction = async (event) => {
        const element = document.getElementById("addFav");
        let aaa = favContext.requestType = 'POST';
        const callApi = await airTableAPI(props.displayedWord, aaa);
        event.target.innerText = "Added";
        event.target.style.backgroundColor = 'gray';
        event.target.disabled = true;
    }

    // Show the details of the result sucha kana, kanji, English meaning
    return (
        <>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src={props.displayedWord.img}
                    alt='gifImage'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md' color='blue.600' fontSize='md' >かな:{props.displayedWord.reading.kana} </Heading>
                    <Heading size='md' color='blue.600' fontSize='md'>かんじ: {props.displayedWord.reading.kanji}</Heading>
                    <Heading size='md' color='blue.600' fontSize='md'>ふりがな: {props.displayedWord.reading.furigana} </Heading>
                    <Text>
                        <Text as='b' fontSize='md'>えいごのいみ:</Text>
                        {props.displayedWord.senses[0].glosses.join()} 
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Button id='addFav' variant='solid' colorScheme='blue' w="100%" onClick={addFavFunction}>
                        Add to Fav
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
};

export default Wordcard;