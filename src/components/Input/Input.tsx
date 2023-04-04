import { FC, useState, ChangeEvent, useEffect, KeyboardEvent } from 'react'

import { TextareaAutosize, Button } from '@mui/material'
import { observer } from 'mobx-react-lite'

import style from './Input.module.scss'

import { defaultFilterValue } from 'constants/defaultFilterValue'
import { INITIAL_INPUT_VALUE } from 'constants/initialValue'
import appStore from 'store/appStore'

export const Input: FC = observer(() => {
  const { addNote, editMode, updateNote, setEditMode, setFilterTag } = appStore

  const [text, setText] = useState(INITIAL_INPUT_VALUE)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (editMode.isActive) {
      setText(editMode.text)
    }
  }, [editMode.id])

  const modeHandle = (isActive: boolean, nevText: string): void => {
    if (isActive) {
      updateNote(nevText)
      setEditMode(null)
      setText(INITIAL_INPUT_VALUE)
    } else {
      addNote(nevText)
    }
  }

  const changeTextHandle = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setIsError(false)
    setText(event.target.value)
  }

  const textNoteHandle = (): void => {
    const newText = text.trim()

    setFilterTag(defaultFilterValue)

    if (newText.length) {
      modeHandle(editMode.isActive, newText)
      setText(INITIAL_INPUT_VALUE)
    } else {
      setIsError(true)
    }
  }

  const keyDownHandel = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (event.key === 'Enter') {
      textNoteHandle()
      setText(INITIAL_INPUT_VALUE)
    }
  }

  return (
    <div className={style.main}>
      <TextareaAutosize
        className={`${style.textArea} ${isError && style.error}`}
        minRows={3}
        value={text}
        onChange={changeTextHandle}
        onClick={() => setIsError(false)}
        onKeyDown={keyDownHandel}
        placeholder="Заметка"
      />
      {isError && <b>Пустое поле</b>}
      <Button
        type="button"
        variant="outlined"
        size="large"
        inputMode="text"
        onClick={textNoteHandle}
        disabled={isError}
      >
        {editMode.isActive ? 'Сохранить' : 'Добавить'}
      </Button>
    </div>
  )
})
