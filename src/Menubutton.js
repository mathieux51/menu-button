import React from "react"
import styled from "styled-components"
import keyCode from "./key-code"

const id = "menubutton"

const Button = styled.button`
  position: relative;
`

const Ul = styled.ul`
  display: ${({ open }) => (open ? "block" : "none")};
  position: absolute;
  top: 50px;
  left: 0;
`

class Menubutton extends React.PureComponent {
  buttonRef = React.createRef()
  popupRef = React.createRef()
  state = {
    popupMenu: false,
    hasFocus: false,
    hasHover: false,
    open: false,
    ariaExpanded: false
  }
  open = () => this.setState({ open: true, ariaExpanded: true })

  handleKeydown = event => {
    let flag = false

    switch (event.keyCode) {
      case keyCode.SPACE:
      case keyCode.RETURN:
      case keyCode.DOWN:
        if (this.popupRef.current) {
          this.open()
          // 🚧
          this.popupMenu.setFocusToFirstItem()
        }
        flag = true
        break

      case this.keyCode.UP:
        if (this.popupMenu) {
          this.popupMenu.open()
          this.popupMenu.setFocusToLastItem()
          flag = true
        }
        break

      default:
        break
    }

    if (flag) {
      event.stopPropagation()
      event.preventDefault()
    }
  }
  handleOnClick = () => console.log("handleOnClick")
  handleOnFocus = () => console.log("handleOnFocus")
  handleOnBlur = () => console.log("handleOnBlur")
  handleOnMouseOver = () => console.log("handleOnMouseOver")
  handleOnMouseOut = () => console.log("handleOnMouseOut")

  render() {
    return (
      <>
        <Button
          ref={this.buttonRef}
          id={id}
          onKeyDown={this.handleOnKeyDown}
          onClick={this.handleOnClick}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          onMouseOver={this.handleOnMouseOver}
          onMouseOut={this.handleOnMouseOut}
          aria-haspopup="true"
        >
          Button
        </Button>
        <Ul aria-labelledby={id} role="menu" ref={this.popupRef}>
          <li role="none">
            <a role="menuitem" href="https://www.w3.org/">
              W3C Home Page
            </a>
          </li>
          <li role="none">
            <a
              role="menuitem"
              href="https://www.w3.org/standards/webdesign/accessibility"
            >
              W3C Web Accessibility Initiative
            </a>
          </li>
          <li role="none">
            <a role="menuitem" href="https://www.w3.org/TR/wai-aria/">
              Accessible Rich Internet Application Specification
            </a>
          </li>
          <li role="none">
            <a role="menuitem" href="https://www.w3.org/TR/wai-aria-practices/">
              WAI-ARIA Authoring Practices
            </a>
          </li>
          <li role="none">
            <a
              role="menuitem"
              href="https://www.w3.org/TR/wai-aria-implementation/"
            >
              WAI-ARIA Implementation Guide
            </a>
          </li>
          <li role="none">
            <a role="menuitem" href="https://www.w3.org/TR/accname-aam-1.1/">
              Accessible Name and Description
            </a>
          </li>
        </Ul>
      </>
    )
  }
}

export default Menubutton
