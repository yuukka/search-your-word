import React, { useEffect, useState } from 'react'
import { RadioGroup, Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Image, Text, StackDivider, Box } from '@chakra-ui/react'
import QuizRadio from './QuizRadio'

const QuizCard = (props) => {
    const [choice, setChoice] = useState();
    const [isCorrect, setIsCorrect] = useState(null);
    console.log(props.fav);
    console.log(props.ansOptions);
    // console.log(props.ansOptionsID);
    const validateAns = () => {
      setIsCorrect(choice === props.fav.id)

    };

    return (
        <>
          <Card>
            <CardHeader>
              <Heading size='md'>Question {props.Number}</Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                  <Heading size='md' key={props.fav.id}>
                    {props.fav.fields.glosses}
                  </Heading>
                </Box>
                <Box>

                </Box>
                <RadioGroup>
                <Stack>
                  {props.ansOptions.map((ansOption, i) => (
                      <QuizRadio 
                      key={ansOption.id} 
                      ansOption={ansOption} 
                      setChoice={setChoice} 
                      >
                      </QuizRadio>
                  ))}
                  
                </Stack>
                </RadioGroup>
              {isCorrect !== null && (
                <Text fontWeight="bold" color={isCorrect ? "green.500" : "red.500"}>
                  {isCorrect ? "Correct!" : "Incorrect"}
                </Text>
              )}
                  
              </Stack>
            </CardBody>
            <Button onClick={validateAns} isDisabled={!choice}>Check Ans!</Button>
          </Card>
        </>




    );
}

export default QuizCard;