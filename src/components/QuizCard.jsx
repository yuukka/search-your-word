import React, { useEffect, useState } from 'react'
import { RadioGroup, Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Image, Text, StackDivider, Box } from '@chakra-ui/react'
import QuizRadio from './QuizRadio'

const QuizCard = (props) => {
    const [choice, setChoice] = useState();
    const [isCorrect, setIsCorrect] = useState(null);

    // Check if the user choice and the word's id from Airtable is the same, set boolean 
    const validateAns = () => {
      setIsCorrect(choice === props.fav.id)

    };

    // Create the quiz card, pass ansOption prop (Which includes all Quizzes in an array) to QuizRadio so that it includes correct and also wrong choices

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
                <Text fontWeight="bold" color={isCorrect ? "green" : "red"}>
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