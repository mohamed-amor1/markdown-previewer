const initialState = {
  markdownInput:
    '# This is a Heading 1\n\n## This is a Subheading (H2)\n\n[Google](https://www.google.com/)\n\nUse `inline code` within a sentence.\n\n### Code Block (JavaScript)\n\n```javascript\nconst greeting = "Hello, World!";\nconsole.log(greeting);\n```\n\n- Item 1\n- Item 2\n- Item 3\n\n> This is a blockquote.\n\n![Alt Text](https://via.placeholder.com/150)\n\nThis is **bolded** text.',
  markdownOutput: "",
};

const markdownReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_MARKDOWN_INPUT":
      return { ...state, markdownInput: action.payload };
    case "UPDATE_MARKDOWN_OUTPUT":
      return { ...state, markdownOutput: action.payload };
    default:
      return state;
  }
};

export default markdownReducer;
