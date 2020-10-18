const React = require('react')
const ReactDOM = require('react-dom')

const CodeBlock = (props) => {
  return (
    <pre>
      {props.children}
    </pre>
  )
}

if (typeof window === 'undefined') {
} else {
  const componentContainers = document.querySelectorAll('.react-component-codeblock')

  for (const componentContainer of componentContainers) {
    ReactDOM.render(React.createElement(CodeBlock, {}, componentContainer.children[0].innerText), componentContainer)
  }
}

module.exports = CodeBlock
