import { Container, Flex, HStack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { Button } from '@chakra-ui/button'

const TestButton = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    return (
        <Button colorScheme="teal" variant="solid" onClick={increment}>{count}</Button>
    )

}

const TestComponent1 = () => {
     const [count, setCount] = useState(0);

     function increment() {
         setCount(count + 1);

         
     }

    return (
    
        <Container maxW={"1140px"} px={4}>
            <Flex>

                <Text>
                    This is my first test component.
                    It is very simple.
                </Text>
                <TestButton />
                <TestButton />
                <Text>
                    third text area ansdja
                </Text>
            </Flex>


        </Container>
        )
}

export default TestComponent1