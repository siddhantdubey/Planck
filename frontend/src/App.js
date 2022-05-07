import "./App.css";
import React, { useEffect, useState } from "react";
import { Input, Stack, Text, ChakraProvider, Button } from "@chakra-ui/react";
import Result from "./components/Result";
import axios from "axios";

function App() {
  const [getMessage, setGetMessage] = useState({});
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([
    ["No results found", ["No results found"]],
  ]);
  useEffect(() => {
    //set background to black
    document.body.style.backgroundColor = "black";
  }, []);
  return (
    <ChakraProvider>
      <div className="App">
        <Stack direction={["column", "row"]}>
          <Input
            size="lg"
            onChange={(e) => {
              e.preventDefault();
              setQuery(e.target.value);
              console.log(query);
            }}
            placeholder="Type to search"
            borderWidth="0px"
          />
          <Button
            class="search-button"
            onClick={(e) => {
              e.preventDefault();
              console.log({ query });
              axios
                .post("http://localhost:5000/search", { query })
                .then((response) => {
                  setResults(response.data);
                });
            }}
          >
            Search
          </Button>
        </Stack>
        {/* make a list for search results to be displayed in */}
        {(query === "" || query === " ") && (
          <Stack class="no-query">
            <Text class="header" fontSize="lg">
              Welcome to Planck
            </Text>
            <p class="description">
              This is a search engine for all of my (Siddhant Dubey's) notes,
              tweets, YouTube videos, and my general presence on the internet.
            </p>
            <p class="description">
              I've only indexed my personal notes so far and will be adding
              support for tweets, YouTube videos, and blog posts soon.
            </p>
          </Stack>
        )}
        {query !== "" && (
          <Stack direction={["row", "column"]}>
            <Text class="results-data">{results.length} results found</Text>
            {results.map((result) => {
              console.log(result);
              const combinedText = result[1].join(" ");
              return (
                <Result
                  link={result[0]}
                  text={combinedText}
                  totalText={result[2]}
                  resultType={result[3]}
                />
              );
            })}
          </Stack>
        )}
      </div>
    </ChakraProvider>
  );
}

export default App;
