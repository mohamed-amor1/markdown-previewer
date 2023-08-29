import React from "react";
import { Textarea, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { updateMarkdownInput } from "../actions";

export default function Editor() {
  const dispatch = useDispatch();
  const markdownInput = useSelector((state) => state.markdownInput);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    dispatch(updateMarkdownInput(inputText));
  };

  return (
    <div>
      <Heading size="lg" color="#3182CE">
        <code>Editor</code>
      </Heading>
      <Textarea
        id="editor"
        placeholder="Enter markdown"
        value={markdownInput}
        onChange={handleInputChange}
        autoFocus
      />
    </div>
  );
}
