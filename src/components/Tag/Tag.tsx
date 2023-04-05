import { FC, MouseEvent } from 'react'

import style from './Tag.module.scss'

type TagPropsType = { tag: string; setFilterTag: (tag: string) => void }

export const Tag: FC<TagPropsType> = ({ tag, setFilterTag }) => {
  const onClick = (event: MouseEvent): void => {
    event.stopPropagation()
    setFilterTag(tag)
  }

  return (
    <span role="button" tabIndex={0} onClick={onClick} className={style.main}>
      {tag}
    </span>
  )
}
