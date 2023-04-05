import { FC, useState } from 'react'

import { observer } from 'mobx-react-lite'

import style from './Notes.module.scss'

import { Card } from 'components/Card/Card'
import { TransitionsModal } from 'components/TransitionsModal/TransitionsModal'
import appStore from 'store/appStore'

export const Notes: FC = observer(() => {
  const {
    deleteNote,
    setEditMode,
    editMode,
    getFilteredNotes,
    filteredTag,
    setViewNote,
    getCurrentNote,
  } = appStore

  const { text, date } = getCurrentNote()

  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = (): void => setIsOpen(true)

  const openHelper = (id: string): void => {
    handleOpen()
    setViewNote(id)
  }

  const handleClose = (): void => setIsOpen(false)

  const cards = getFilteredNotes(filteredTag).map(note => (
    <Card
      key={note.id}
      note={note}
      deleteNote={deleteNote}
      setEditMode={setEditMode}
      editNoteId={editMode.id}
      isActiveEditMode={editMode.isActive}
      openModal={() => openHelper(note.id)}
    />
  ))

  return (
    <div className={style.main}>
      {cards}
      <TransitionsModal
        closeModal={handleClose}
        isOpen={isOpen}
        text={text}
        date={date}
      />
    </div>
  )
})
