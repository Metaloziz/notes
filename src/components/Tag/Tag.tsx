import { FC } from 'react'

import style from './Tag.module.scss'

type TagPropsType = { text: string; setFilterTag: (tag: string) => void }

export const Tag: FC<TagPropsType> = ({ text, setFilterTag }) => (
  <span
    role="button"
    tabIndex={0}
    onClick={() => setFilterTag(text)}
    className={style.main}
  >
    {text}
  </span>
)
