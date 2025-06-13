import React, { useEffect, useState } from 'react'
import { Stack, Radio, RadioGroup } from '@chakra-ui/react'

const QuizRadio = (props) => {

    const handleChange = ({ target }) => {
        props.setChoice(target.value);
        
    };

    // Create answer choices in radio button, selected choices is passed to parent component as Choice state
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