import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import HotTable from '../../atoms/HotTable'

const Wrapper = styled.div`
`

class EntryTable extends React.Component {
  render() {
    const {
      entries,
      quadrants,
      rings,
      onAfterChangeEntryTable
    } = this.props
    return (
      <Wrapper>
        <HotTable settings={
                    {
                      data: entries,
                      colHeaders: ['Quadrant', 'Ring', 'Label', 'Moved'],
                      columns: [
                        {
                          data: 'quadrant',
                          type: 'dropdown',
                          source: quadrants.map(q => q.name)
                        },
                        {
                          data: 'ring',
                          type: 'dropdown',
                          source: rings.map(r => r.name)
                        },
                        {
                          data: 'label'
                        },
                        {
                          data: 'moved'
                        }
                      ],
                      allowInsertColumn: true,
                      minSpareRows: 1,
                      onAfterChange: changes => {
                        if (changes) {
                          setTimeout(() => onAfterChangeEntryTable(changes), 50)
                        }
                      },
                    }
          }/>
      </Wrapper>
    )
  }
}

EntryTable.propTypes = {
  entries: PropTypes.array,
  quadrants: PropTypes.array,
  rings: PropTypes.array,
  onChangeCellValue: PropTypes.func,
}

export default EntryTable
