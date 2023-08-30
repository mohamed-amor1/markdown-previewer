import "./App.css";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { Flex, Heading, Highlight, Divider, Box } from "@chakra-ui/react";

import { At, GithubLogo } from "@phosphor-icons/react";

function App() {
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
        <Divider height="50px" m={2} orientation="vertical" />
        <a href="mailto:mohamedamor654@gmail.com">
          <At size={32} />
        </a>
      </Flex>
      <Flex>
        <Divider m={6} borderColor="gray.400" />
      </Flex>
      <Flex justifyContent="space-between">
        <Box flex="1">
          <Editor />
        </Box>
        <Box flex="1">
          <Preview />
        </Box>
      </Flex>
    </>
  );
}

export default App;
