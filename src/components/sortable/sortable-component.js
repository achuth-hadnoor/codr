import React from 'react'
import SortableList from './sortable-list'

const SortableComponent = ({ workspaces, onSortEnd, onDelete, onMove }) => {
  return (
    <SortableList
      workspaces={workspaces}
      onSortEnd={onSortEnd}
      onDelete={onDelete}
      onMove={onMove} 
    />
  )
}

export default SortableComponent