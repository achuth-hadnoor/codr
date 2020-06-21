import React from 'react'

import { SortableElement } from 'react-sortable-hoc'
   
const SortableItem = SortableElement(({ workspace, onMove, onDelete }) => {
return <li className="ws">{workspace.title.slice(0,2)}</li>
})

export default SortableItem