import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CopyButton from '../../atoms/CopyButton'

const Wrapper = styled.div`
  background-color: #3F3F3F;
  color: #8FAF9F;
  position: relative;
  width: 100%;
`

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: inherit;
  margin: 0;
  padding: 0;
  overflow-y: scroll;
`

const CopyButtonWrapper = styled.div`
  width: 150px;
  height: 30px;
  position: absolute;
  right:0;
  top: 0;
  z-index: 10;
`

class JsonViewer extends React.Component {
  constructor(props) {
    super(props)
    this.el = null
  }

  render() {
    const {
      entries,
      quadrants,
      rings,
      title,
      onPressCopyButton
    } = this.props
    return (
      <Wrapper>
        <CopyButtonWrapper>
          <CopyButton onPressCopyButton={onPressCopyButton}
                      textElement={this.el}/>
        </CopyButtonWrapper>
        <TextArea id="json-viewer"
                  readOnly={true}
                  value={JSON.stringify({ entries, quadrants, rings, title } , null, 2)} />
      </Wrapper>
    )
  }
}

JsonViewer.propTypes = {
  entries: PropTypes.array,
  quadrants: PropTypes.array,
  rings: PropTypes.array,
  title: PropTypes.string
}

export default JsonViewer
