import { FC } from 'react'

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
}

export const Card: FC<CardPropsType> = ({
  note,
  deleteNote,
  setEditMode,
  isActiveEditMode,
  editNoteId,
}) => {
  const editNote = (): void => {
    setEditMode({ text: note.text, id: note.id, isActive: true })
  }

  const editStyle =
    isActiveEditMode && (editNoteId === note.id ? style.editNote : style.disabledNote)

  // todo заблокировать удаление при редактировании
  return (
    <div className={`${style.main} ${editStyle}`}>
      <div className={style.header}>
        <EditIcon className={style.editIcon} onClick={editNote} />
        <ClearIcon className={style.deleteIcon} onClick={() => deleteNote(note.id)} />
      </div>
      <div className={style.text}>
        <TextNote text={note.text} />
      </div>
      <b>{note.date}</b>
    </div>
  )
}
