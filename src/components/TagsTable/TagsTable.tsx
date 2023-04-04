import { FC } from 'react'

import ClearIcon from '@mui/icons-material/Clear'
import { Button } from '@mui/material'
import { observer } from 'mobx-react-lite'

import style from './TagsTable.module.scss'

import { Tag } from 'components/Tag/Tag'
import { defaultFilterValue } from 'constants/defaultFilterValue'
import appStore from 'store/appStore'

export const TagsTable: FC = observer(() => {
  const { allTags, removeTag, setFilterTag, filteredTag } = appStore

  const htmlTags = Object.keys(allTags).map(tag => (
    <div key={tag} className={style.tag}>
      <Tag setFilterTag={setFilterTag} text={tag} />
      <ClearIcon className={style.icon} onClick={() => removeTag(tag)} />
    </div>
  ))

  return (
    <div className={style.main}>
      <div className={style.filter}>
        Отфильтровано по тегу:
        <span>{` ${filteredTag}`}</span>
      </div>
      <Button
        size="small"
        variant="outlined"
        onClick={() => setFilterTag(defaultFilterValue)}
        disabled={filteredTag === defaultFilterValue}
      >
        Сбросить фильтр
      </Button>
      <b>Теги:</b>
      {htmlTags}
    </div>
  )
})
