import { FC, MouseEvent } from 'react'

import style from './Tag.module.scss'

type TagPropsType = { text: string; setFilterTag: (tag: string) => void }

export const Tag: FC<TagPropsType> = ({ text, setFilterTag }) => {
  const onClick = (event: MouseEvent): void => {
    event.stopPropagation()
    setFilterTag(text)
  }

  return (
    <span role="button" tabIndex={0} onClick={onClick} className={style.main}>
      {text}
    </span>
  )
}
