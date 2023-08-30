import "./App.css";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { Flex, Heading, Highlight, Divider, Box } from "@chakra-ui/react";
import { StackDivider, VStack, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { At, GithubLogo } from "@phosphor-icons/react";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Function to check the screen size
  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 768); // Adjust the screen width breakpoint as needed
  };

  useEffect(() => {
    // Check screen size on component mount
    checkScreenSize();
    // Add a listener to check screen size on window resize
    window.addEventListener("resize", checkScreenSize);
    // Clean up the listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <>
      <Heading size="3xl" m={7} color="gray.400">
        <Highlight
          query="Markdown"
          styles={{
            px: "2",
            py: "1",
            rounded: "full",
            bg: "red.100",
            color: "gray.800",
          }}
        >
          Markdown Previewer
        </Highlight>
      </Heading>
      <Flex className="mx-auto" align="center" justify="center" m="10px">
        <a href="https://github.com/mohamed-amor1">
          <GithubLogo size={32} />
        </a>
        <Divider
          height="50px"
          m={2}
          orientation="vertical"
          borderColor={"red.100"}
        />
        <a href="mailto:mohamedamor654@gmail.com">
          <At size={32} />
        </a>
      </Flex>
      <Flex>
        <Divider m={6} borderColor="gray.400" />
      </Flex>
      <Flex justifyContent="space-between">
        {isSmallScreen ? (
          <VStack
            flex="1"
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="stretch"
          >
            <Box>
              <Editor />
            </Box>
            <Box>
              <Preview />
            </Box>
          </VStack>
        ) : (
          <>
            <Box flex="1">
              <Editor />
            </Box>
            <Center p={8}>
              <Divider orientation="vertical" borderColor={"red.100"} />
            </Center>
            <Box flex="1">
              <Preview />
            </Box>
          </>
        )}
      </Flex>
    </>
  );
}

export default App;
