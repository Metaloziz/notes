import { FC } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { observer } from 'mobx-react-lite'

import { style } from 'components/TransitionsModal/TransitionsModal'
import appStore from 'store/appStore'
import { TextNote } from 'utils/TextNote'

export const ModalNote: FC = observer(() => {
  const { getCurrentNote } = appStore

  const { text, date } = getCurrentNote()

  return (
    <Box sx={style}>
      <Typography id="transition-modal-title" variant="h6" component="h2">
        <TextNote text={text} />
      </Typography>
      <Typography id="transition-modal-description" sx={{ mt: 2 }}>
        {date}
      </Typography>
    </Box>
  )
})
