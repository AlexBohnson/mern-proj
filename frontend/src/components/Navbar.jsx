import { Container, Flex, HStack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'
import { Button } from '@chakra-ui/button'
import { PlusSquareIcon } from '@chakra-ui/icons'

const NavBar = () => {
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row"
        }}
      >

        <Text
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontSize='6xl'
          fontWeight='extrabold'
        >
          <Link to={"/"}>Product Store</Link>

        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
          <Button>
            <PlusSquareIcon fontSize={20} />
          </Button>
          </Link>
          </HStack>
      </Flex>
    </Container>
  )
}

export default NavBar
