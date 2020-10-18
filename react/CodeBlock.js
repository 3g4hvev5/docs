const React = require('react')
const ReactDOM = require('react-dom')
const { Prism } = require('react-syntax-highlighter')
const { dark } = require('react-syntax-highlighter/dist/cjs/styles/prism')

const CodeBlock = (props) => {
  return (
    <Prism language={props.language} style={dark}>
      {props.children}
    </Prism>
  )
}

if (typeof window === 'undefined') {
} else {
  const componentContainers = document.querySelectorAll('.react-component-codeblock')

  for (const componentContainer of componentContainers) {
    // clientside rendering breaks the syntax highlighting so turned it off... since this is not an interactive component
    //ReactDOM.render(React.createElement(CodeBlock, {}, componentContainer.children[0].innerText), componentContainer)
  }
}

module.exports = CodeBlock
