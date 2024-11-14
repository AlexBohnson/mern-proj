
import { Button } from "./components/ui/button"
import React from "react"
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "./components/ui/menu"
import { Stack } from "@chakra-ui/react"

function App() {

  return (
    <Stack>
      <Button size='sm'>
        Test Button 1 Baby
      </Button>

      <Button size='sm'>
        Test Button 1 Baby
      </Button>

      <Button size='sm'>
        Test Button 1 Baby
      </Button>

      <MenuRoot>
        <MenuTrigger />
        <MenuContent>
          <MenuItem value="..." />
        </MenuContent>
      </MenuRoot>

    </Stack>


  )
}

export default App