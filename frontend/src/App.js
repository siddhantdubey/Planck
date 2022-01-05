import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {Input,  Center, Container, Textarea, Text, List, Box, SimpleGrid, ChakraProvider, Button, ButtonGroup, HStack } from "@chakra-ui/react"
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
        <Input onChange={e => {
          setQuery(e.target.value)
        }} placeholder='search text goes here'/>
        <Button color='Teal' onClick={e => {
          e.preventDefault();
          console.log({query});
          axios.post('http://localhost:5000/search', {query }).then(response => {
            setResults(response.data)    
            console.log(response.data[0])
          })
        }}>
          Search
        </Button>
        {/* make a list for search results to be displayed in */}
        {results.length == 0 && <Text>No results found</Text>}
        {results.length != 0 && <SimpleGrid columns={1} spacing={0}>
          {results.map(result => {
            const combinedText = result[1].join(' ')
            return <Result link={result[0]} text={combinedText}/>
          })}
        </SimpleGrid>}
      </div>
    </ChakraProvider>
  );
}

export default App;