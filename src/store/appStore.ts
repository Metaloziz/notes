import { makeAutoObservable } from 'mobx'
import { v1 } from 'uuid'

import { defaultFilterValue } from 'constants/defaultFilterValue'
import { initialEditModData } from 'constants/initialEditModData'
import { EditModeType } from 'types/EditModeType'
import { NoteType } from 'types/NoteType'
import { TagsType } from 'types/TagsType'
import { getTodayDate } from 'utils/getTodayDate'

class AppStore {
  notes: NoteType[] = [
    { text: '1asd #qwe', date: getTodayDate(), id: v1(), tags: { '#qwe': '#qwe' } },
  ]

  filteredTag: string = defaultFilterValue

  editMode: EditModeType = initialEditModData

  allTags: TagsType = { '#qwe': '#qwe' }

  constructor() {
    makeAutoObservable(this)
  }

  addNote = (text: string): void => {
    const newNote: NoteType = {
      text,
      id: v1(),
      date: getTodayDate(),
      tags: {},
    }

    this.getAllTags(newNote.text).forEach(word => {
      newNote.tags[word] = word
    })

    this.notes.push(newNote)
  }

  deleteNote = (id: string): void => {
    this.notes = this.notes.filter(note => note.id !== id)
  }

  updateNote = (newText: string): void => {
    const newNote: NoteType = {
      text: newText,
      id: this.editMode.id,
      date: getTodayDate(),
      tags: {},
    }

    this.getAllTags(newText).forEach(word => {
      newNote.tags[word] = word
    })

    this.notes = this.notes.map(note =>
      note.id === this.editMode.id ? { ...note, ...newNote } : note,
    )

    this.getAllTags(newText)
  }

  setEditMode = (editNote: EditModeType | null): void => {
    if (editNote !== null) {
      this.editMode.text = editNote.text
      this.editMode.id = editNote.id
      this.editMode.isActive = editNote.isActive
    } else {
      this.editMode = initialEditModData
    }
  }

  getAllTags = (textNote: string): string[] => {
    const words = textNote.split(' ')

    words.forEach(item => {
      if (item.startsWith('#')) {
        this.allTags[item] = item
      }
    })

    return words
  }

  removeTag = (tag: string): void => {
    delete this.allTags[tag]

    this.notes = this.notes.map(note => {
      if (note.tags[tag]) {
        const newNote: NoteType = { ...note, text: note.text.replace(/#/g, '') }

        delete newNote.tags[tag]

        return newNote
      }
      return note
    })
  }

  getFilteredNotes = (tag: string): NoteType[] => {
    if (this.filteredTag === defaultFilterValue) {
      return this.notes
    }
    return this.notes.filter(note => note.tags[tag])
  }

  setFilterTag = (tag: string): void => {
    this.filteredTag = tag
  }
}

export default new AppStore()
