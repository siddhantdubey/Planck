import React from "react";
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

function Result(props) {
    const {link, text} = props;

    return (
        <Box p={4} shadow="md" borderWidth="1px">
            <Stack spacing={4}>
                <Text fontSize="lg">{text}</Text>
            </Stack>
        </Box>
    )
}

export default Result;