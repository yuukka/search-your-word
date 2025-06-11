import React, { useEffect, useState } from 'react'
import { Stack, Radio, RadioGroup } from '@chakra-ui/react'

const QuizRadio = (props) => {

    // console.log(props.ansOption);
    //  console.log(props.ansOptionsID);


    const handleChange = ({ target }) => {
        props.setChoice(target.value);
        
    };

    // useEffect(() => {
    //     console.log(ansOption);        
    // }, [ansOption]); 

    return (
        <>

                <Radio 
                size='lg' 
                value={props.ansOption.id} 
                colorScheme='orange' 
                onChange={handleChange}
                >
                    {props.ansOption.fields.furigana}
                </Radio>  



        </>




    );
}

export default QuizRadio;