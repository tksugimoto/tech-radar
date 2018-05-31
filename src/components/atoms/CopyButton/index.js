import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #efefef;
  color: #3f3f3f;
  text-align: center;
  vertical-align: middle;
  border-radius: 0 0 0 5px;
  box-shadow: 1px 1px 1px #eee;
  cursor: pointer;
  font-size: small;
  padding: 2px;
`

const CopyButton = (props) => (
  <Wrapper onClick={(e) => {
      const jsonViewer = document.querySelector("#json-viewer")
      jsonViewer.select()
      document.execCommand("copy")
    }}>
    copy to clipboard
  </Wrapper>
)

CopyButton.propTypes = {
  onPressCopyButton: PropTypes.func
}

export default CopyButton
