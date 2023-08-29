export const updateMarkdownInput = (inputText) => ({
  type: "UPDATE_MARKDOWN_INPUT",
  payload: inputText,
});

export const updateMarkdownOutput = (outputHTML) => ({
  type: "UPDATE_MARKDOWN_OUTPUT",
  payload: outputHTML,
});
