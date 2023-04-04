import { FC } from 'react'

import { observer } from 'mobx-react-lite'

import { Tag } from 'components/Tag/Tag'
import appStore from 'store/appStore'

type TextNotePropsType = {
  text: string
}

export const TextNote: FC<TextNotePropsType> = observer(({ text }) => {
  const { allTags, setFilterTag } = appStore

  const words = text.split(' ').map(word => {
    if (allTags[word]) {
      return <Tag key={word} setFilterTag={setFilterTag} text={`${word} `} />
    }
    return <span key={word}>{`${word} `}</span>
  })

  return <div>{words}</div>
})
