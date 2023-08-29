import React from "react";
import { Card, CardBody, Text, Heading } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { useSelector } from "react-redux";

export default function Preview() {
  const markdownInput = useSelector((state) => state.markdownInput);

  return (
    <div>
      <Heading size="lg" color="#3182CE">
        <code>Preview</code>
      </Heading>
      <Card id="preview">
        <CardBody align="left">
          <ReactMarkdown
            components={ChakraUIRenderer()}
            children={markdownInput}
            remarkPlugins={[remarkGfm]}
            skipHtml
          />
        </CardBody>
      </Card>
    </div>
  );
}
