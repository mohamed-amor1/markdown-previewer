import { Textarea, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { updateMarkdownInput } from "../actions";

// Import the RootState type
import { RootState } from "../types"; // Adjust the path as needed

export default function Editor() {
  const dispatch = useDispatch();

  // Specify the RootState type here
  const markdownInput = useSelector((state: RootState) => state.markdownInput);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
