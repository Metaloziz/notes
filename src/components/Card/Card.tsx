import { FC, MouseEvent } from 'react'

import ClearIcon from '@mui/icons-material/Clear'
import EditIcon from '@mui/icons-material/Edit'

import style from './Card.module.scss'

import { EditModeType } from 'types/EditModeType'
import { NoteType } from 'types/NoteType'
import { TextNote } from 'utils/TextNote'

type CardPropsType = { note: NoteType } & {
  deleteNote: (id: string) => void
  setEditMode: (editNode: EditModeType | null) => void
  isActiveEditMode: boolean
  editNoteId: string
  openModal: () => void
}

export const Card: FC<CardPropsType> = ({
  note,
  deleteNote,
  setEditMode,
  isActiveEditMode,
  editNoteId,
  openModal,
}) => {
  const editNoteHandle = (event: MouseEvent<SVGSVGElement>): void => {
    event.stopPropagation()
    setEditMode({ text: note.text, id: note.id, isActive: true })
  }

  const deleteNoteHandle = (event: MouseEvent<SVGSVGElement>): void => {
    event.stopPropagation()
    deleteNote(note.id)
  }

  const editStyle =
    isActiveEditMode && (editNoteId === note.id ? style.editNote : style.disabledNote)

  return (
    <div
      role="button"
      tabIndex={0}
      className={`${style.main} ${editStyle}`}
      onClick={openModal}
    >
      <div className={style.header}>
        <EditIcon className={style.editIcon} onClick={editNoteHandle} />
        <ClearIcon className={style.deleteIcon} onClick={deleteNoteHandle} />
      </div>
      <div className={style.text}>
        <TextNote text={note.text} />
      </div>
      <b>{note.date}</b>
    </div>
  )
}
