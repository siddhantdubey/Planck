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

function Popup(props) {
    const {link} = props;
    var linkage = link.slice(4);
    console.log("Link:", linkage)
    const fr = new FileReader();
    return (
        <div className="popup-box">
          <div className="box">
            <span className="close-icon" onClick={props.handleClose}>x</span>
            {props.content}
          </div>
        </div>
    );
}

export default Popup;