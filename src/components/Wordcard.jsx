import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Image, Text, useDisclosure, Collapse, Box } from '@chakra-ui/react'
import { FavContext } from "../App";
import { useState, useContext } from "react";
import { airTableAPI } from '../api/airTable'

const Wordcard = (props) => {

  const { isOpen, onToggle } = useDisclosure();

//   console.log(props.displayedWord)
  const favContext = useContext(FavContext);
   
   const addFavFunction = async (event) => {
    // console.log(event.target);  
//    console.log("button clicked");
   const element = document.getElementById("addFav");
//    console.log(props.displayedWord);
    let aaa = favContext.requestType = 'POST';
    const callApi = await airTableAPI(props.displayedWord, aaa);
    event.target.innerText = "Added";
    event.target.style.backgroundColor = 'gray';
    event.target.disabled = true;
    // console.log(callApi);
    
  }
//   console.log(props.displayedWord.img)

    return (
        <>
            <Card maxW='sm'>
                <CardBody>
                    {/* <div>http://gph.is/1aS22I5</div> */}
                    <Image
                    src={props.displayedWord.img}
                    // src= 'https://media4.giphy.com/media/v1.Y2lkPWUxODBjYTUzNDllOTRmazBtNDQybTdlMnV4d3c4M2w0OGxub2F4MGY1NmZsbDk3eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/20yWVwqqUuu2Y/giphy.gif'
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
                    {/* <ButtonGroup spacing='2'> */}
                    <Button id='addFav' variant='solid' colorScheme='blue' w="100%" onClick={addFavFunction}>
                        Add to Fav
                    </Button>

                    {/* </ButtonGroup> */}
                </CardFooter>
            </Card>




            {/* <Button onClick={onToggle}>Click Me</Button>
            <Collapse in={isOpen} animateOpacity>
                <Box
                p='40px'
                color='white'
                mt='4'
                bg='teal.500'
                rounded='md'
                shadow='md'
                >
                <p>Hello World</p>
                </Box>
            </Collapse> */}
        </>
    );
};

export default Wordcard;