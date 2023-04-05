import { FC } from 'react'

import { Modal } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'

import { NoteType } from 'types/NoteType'
import { TextNote } from 'utils/TextNote'

export const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

type TransitionsModalPropsType = {
  isOpen: boolean
  closeModal: () => void
} & Pick<NoteType, 'text' | 'date'>

export const TransitionsModal: FC<TransitionsModalPropsType> = ({
  closeModal,
  isOpen,
  date,
  text,
}) => (
  <div>
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={closeModal}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isOpen}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            <TextNote text={text} />
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            {date}
          </Typography>
        </Box>
      </Fade>
    </Modal>
  </div>
)
