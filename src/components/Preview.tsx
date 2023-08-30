import { Card, CardBody, Heading, Box } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { useSelector } from "react-redux";

import { RootState } from "../types";

export default function Preview() {
  const markdownInput = useSelector((state: RootState) => state.markdownInput);

  return (
    <div>
      <Box>
        <Heading size="lg" color="#3182CE">
          <code>Preview</code>
        </Heading>
        <Card id="preview">
          <CardBody as="div" style={{ textAlign: "left" }}>
            <ReactMarkdown
              components={ChakraUIRenderer()}
              children={markdownInput}
              remarkPlugins={[remarkGfm]}
              skipHtml
            />
          </CardBody>
        </Card>
      </Box>
    </div>
  );
}
