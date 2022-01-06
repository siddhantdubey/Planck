import React, {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import {
  Box,
  Flex,
  AspectRatio,
  Image,
  Text,
  Link,
  Button,
  Stack
} from "@chakra-ui/react";
import Popup from "./Popup";

function Result(props) {
    const [isOpen, setIsOpen] = useState(false);
    const {link, text, totalText, resultType} = props;
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div class="result-div">
                <Box class="result-box" borderWidth="0px" >
                    <Stack spacing={0} direction={['column', 'row']}>
                        <Button class="result-button" onClick={togglePopup}>
                            <Stack spacing={0} direction={['column', 'row']}>
                                <Text class="result-type">{resultType}</Text>
                                <Text class="result" fontSize="md">{text}</Text>
                            </Stack>
                        </Button>
                        {isOpen && <Popup 
                            content={<ReactMarkdown>{totalText}</ReactMarkdown>}
                            handleClose={togglePopup} link={link}/>}
                    </Stack>
                </Box>
        </div>
        
    )
}

export default Result;