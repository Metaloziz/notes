import { NoteType } from 'types/NoteType'

export type EditModeType = Pick<NoteType, 'id' | 'text'> & { isActive: boolean }
