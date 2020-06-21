import React from 'react'
import { SortableContainer } from 'react-sortable-hoc'

import Icon from 'react-icons-kit'
import {plus} from 'react-icons-kit/feather'
// Components
import SortableItem from './sortable-item'

const SortableList = SortableContainer(({ workspaces, onDelete, onMove }) => {
  return (
    <ul className="workspaces">
      {workspaces.map((workspace, index) => (
        <SortableItem
          key={`item-${index}`}
          index={index}
          helperClass={'selected'}
          workspace={workspace}
          onDelete={onDelete}
          onMove={onMove}
        />
      ))}
      <li className="ws"><Icon icon={plus} /></li>
    </ul>
  )
})

export default SortableList