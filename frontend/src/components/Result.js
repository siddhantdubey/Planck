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
    const {link, text, totalText} = props;
    console.log("Result: ", totalText)
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Box borderWidth="5px">
            <Stack spacing={0}>
                <Text class="result" fontSize="md">{text}</Text>
                <Button onClick={togglePopup}>
                    Open
                </Button>
                {isOpen && <Popup 
                    content={<ReactMarkdown>{totalText}</ReactMarkdown>}
                    handleClose={togglePopup} link={link}/>}
            </Stack>
        </Box>
        
    )
}

export default Result;