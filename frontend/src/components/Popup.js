import React from "react";
import useCopyAsMarkdown from '@cnakazawa/copy-as-markdown';
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

function Popup(props) {
    const {link} = props;
    const setRef = useCopyAsMarkdown();
    var linkage = link.slice(4);
    return (
        <div className="popup-box">
          <span className="close-icon" onClick={props.handleClose}>x</span>
          <div className="box" ref={setRef}>
            {props.content}
          </div>
        </div>
    );
}

export default Popup;