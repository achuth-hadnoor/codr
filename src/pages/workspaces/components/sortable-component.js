import React from 'react'
import styled from 'styled-components'
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc'

import Icon from 'react-icons-kit'
import { plus } from 'react-icons-kit/feather'

const SortableComponent = ({ workspaces, onSortEnd, shouldCancelStart, axis, onClick }) => {
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
            <Item to="/w/" style={{ background: 'palegreen', color: '#121212' ,alignItems:'center'}}><Icon icon={plus} /></Item>
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


const DragHandle = SortableHandle(() => <svg
    viewBox="0 0 10 10"
    style={{ margi: '0 5', width: '14px', height: '14px', display: 'block', flexShrink: 0, backfaceVisibility: 'hidden', fill: '#eee', cursor: 'grab' }}>
    <path d="M3,2 C2.44771525,2 2,1.55228475 2,1 C2,0.44771525 2.44771525,0 3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 C3.55228475,4 4,4.44771525 4,5 C4,5.55228475 3.55228475,6 3,6 Z M3,10 C2.44771525,10 2,9.55228475 2,9 C2,8.44771525 2.44771525,8 3,8 C3.55228475,8 4,8.44771525 4,9 C4,9.55228475 3.55228475,10 3,10 Z M7,2 C6.44771525,2 6,1.55228475 6,1 C6,0.44771525 6.44771525,0 7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 Z M7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 C7.55228475,4 8,4.44771525 8,5 C8,5.55228475 7.55228475,6 7,6 Z M7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 Z"></path></svg>)


const SortableItem = SortableElement(({ workspace, onClick }) => {
    return (  <Item to={"/w/" + workspace.id} onClick={onClick}>
                <span className="handle"><DragHandle  /></span>
                <div className="content">{workspace.title}</div>
            </Item> )
})
export default SortableComponent;

const Wrapper = styled.div` 
    flex:1;
    display:flex;  
    flex-wrap:wrap;
    flex-direction:column;
    width:200px;
`
const Item = styled.div`
    padding:10px;  
    border-radius:5px;
    display:flex; 
    align-items:center;
    .content{
        background:#000;
        padding:10px;
        border-radius:5px;
    }
    .handle{
        opacity:0; 
    }    

    &:hover .handle{
        opacity:1 
    }
    .content:hover{
        cursor: pointer; 
        box-shadow: 0px 0px 20px 2px rgba(0,0,0,.5);
    }
` 