import { FC } from 'react'

import { observer } from 'mobx-react-lite'

import style from './Notes.module.scss'

import { Card } from 'components/Card/Card'
import appStore from 'store/appStore'

export const Notes: FC = observer(() => {
  const { deleteNote, setEditMode, editMode, getFilteredNotes, filteredTag } = appStore

  const cards = getFilteredNotes(filteredTag).map(note => (
    <Card
      key={note.id}
      note={note}
      deleteNote={deleteNote}
      setEditMode={setEditMode}
      editNoteId={editMode.id}
      isActiveEditMode={editMode.isActive}
    />
  ))

  return <div className={style.main}>{cards}</div>
})
