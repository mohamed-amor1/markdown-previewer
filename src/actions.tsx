export const updateMarkdownInput = (inputText: string) => ({
  type: "UPDATE_MARKDOWN_INPUT",
  payload: inputText,
});

export const updateMarkdownOutput = (outputHTML: string) => ({
  type: "UPDATE_MARKDOWN_OUTPUT",
  payload: outputHTML,
});
