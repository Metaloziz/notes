import { FC } from 'react'

import style from './Table.module.scss'

import { Notes } from 'components/Notes/Notes'
import { TagsTable } from 'components/TagsTable/TagsTable'

export const Table: FC = () => {
  console.log(1)
  return (
    <div className={style.main}>
      <Notes />

      <TagsTable />
    </div>
  )
}
