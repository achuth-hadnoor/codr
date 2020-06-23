import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
 
import { SortableContainer,SortableElement,SortableHandle  } from 'react-sortable-hoc'

import Icon from 'react-icons-kit'
import { plus ,move} from 'react-icons-kit/feather' 

const SortableComponent = ({ workspaces, onSortEnd,shouldCancelStart ,axis,onClick}) => {
  return (
    <SortableList
      workspaces={workspaces}
      onSortEnd={onSortEnd}
      shouldCancelStart={shouldCancelStart}
      axis={axis}
      onClick={onClick}
      useDragHandle={true}
    />
  )
}

const SortableList = SortableContainer(({ workspaces, onClick }) => {
    return (
        <Wrapper>
            <Item to="/w/"><Icon icon={plus} /></Item>
            {workspaces.map((workspace, index) => (
                <SortableItem
                    key={`item-${index}`}
                    index={index}
                    helperClass={'selected'}
                    workspace={workspace} 
                    onClick={onClick}
                />
            ))}
        </Wrapper>
    )
})

const SortableItem = SortableElement(({ workspace,onClick }) => {
return <Item to={"/w/"+ workspace.id} onClick={onClick}>
       <DragHandle/>
    {workspace.title}
    </Item>
})

const DragHandle = SortableHandle(()=> <Icon icon={move}/>)

export default SortableComponent;

const Wrapper = styled.div` 
    flex:1;
    display:flex; 
    justify-content:center;
`
const Item = styled(Link)`
    padding:10px;
    height:100px;
    width:100px;
    background:#000;
    margin:5px;
`