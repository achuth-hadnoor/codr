import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
 
import { SortableContainer,SortableElement } from 'react-sortable-hoc'

import Icon from 'react-icons-kit'
import { plus } from 'react-icons-kit/feather'

const SortableComponent = ({ workspaces, onSortEnd,shouldCancelStart}) => {
  return (
    <SortableList
      workspaces={workspaces}
      onSortEnd={onSortEnd}
      shouldCancelStart={shouldCancelStart}
    />
  )
}

const SortableList = SortableContainer(({ workspaces}) => {
    return (
        <Wrapper>
            {workspaces.map((workspace, index) => (
                <SortableItem
                    key={`item-${index}`}
                    index={index}
                    helperClass={'selected'}
                    workspace={workspace} 
                />
            ))}
            <Item to="/w/"><Icon icon={plus} /></Item>
        </Wrapper>
    )
})


const SortableItem = SortableElement(({ workspace }) => {
return <Item to={"/w/"+ workspace.id}>{workspace.title.slice(0,2)}</Item>
})

export default SortableComponent;

const Wrapper = styled.div` 
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
`
const Item = styled(Link)`
    padding:10px;

`