function text(content) {
  return document.createTextNode(content)
}

// console.log(text('test'))

function elem(tag) {
  return document.createElement(tag)
}

// console.log(elem('p'))

function append(parent, children) {
  // given a parent node and a list of children, append all the children to the parent and return the parent
  // example: append(elem('h1'), [text('title')]) would return an H1 element with "title" as content.
  for (var i = 0; i < children.length; i = i + 1) {
    var child = children[i]
    parent.appendChild(child)
  }

  return parent
}

function crel(parent) {
  // ???
  console.log("now making", parent)

  var parentNode
  if (typeof parent == "string") {
    parentNode = elem(parent)
  } else {
    parentNode = parent
  }

  for (var i = 1; i < arguments.length; i = i + 1) {
    var child = arguments[i]

    var childNode
    if (typeof child == "string") {
      childNode = text(child)
    } else {
      childNode = child
    }

    parentNode.appendChild(childNode)
  }

  return parentNode
}