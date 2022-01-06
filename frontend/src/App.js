import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {Input,  Center, Container, Textarea, Stack,  Text, List, Box, SimpleGrid, ChakraProvider, Button, ButtonGroup, HStack } from "@chakra-ui/react"
import Result from './components/Result'
import axios from 'axios'

function App() {
  const [getMessage, setGetMessage] = useState({})
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([["No results found", ["No results found"]]])
  useEffect(()=>{
    axios.get('http://localhost:5000/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <ChakraProvider>
      <div className="App">
        <Stack direction={['column', 'row']}>
          <Input size='lg' onChange={e => {
            e.preventDefault();
            setQuery(e.target.value)
            console.log(query)
          }} placeholder='Type to search' borderWidth="0px"/>
          <Button class='search-button' onClick={e => {
            e.preventDefault();
            console.log({query});
            axios.post('http://localhost:5000/search', {query }).then(response => {
              setResults(response.data)    
            })
          }}>
            Search
          </Button>
        </Stack>
        {/* make a list for search results to be displayed in */}
        {(query == "" || query == " ") && <Stack class="no-query">
            <Text class="header" fontSize="lg">Welcome to Planck</Text>
          </Stack>}
        {query != '' && 
        <Stack direction={['row', 'column']}>
          <Text class="results-data">{results.length} results found</Text>
          {results.map(result => {
            const combinedText = result[1].join(' ')
            return <Result link={result[0]} text={combinedText} totalText={result[2]} resultType={result[3]}/>
          })}
        </Stack>}
      </div>
    </ChakraProvider>
  );
}

export default App;