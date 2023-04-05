import { FC } from 'react'

import style from './App.module.scss'

import { Description } from 'components/Descriptoon/Description'
import { Header } from 'components/Header/Header'
import { Input } from 'components/Input/Input'
import { Table } from 'components/Table/Table'

const App: FC = () => (
  <div className={style.App}>
    <Header />
    <Input />
    <Table />
    <Description />
  </div>
)

export default App
