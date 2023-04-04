import { Link } from "@mui/material";

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { FC } from 'react'

import style from './Description.module.scss'

export const Description: FC = () => (
  <Card className={style.main}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Описание:
      </Typography>
      <div className={style.body}>
        <div>
          <b>Тестовое для:</b>  ООО Ивашин
        </div>
        <div>
          <b>Тема</b>: конвертер валют
        </div>
        <div>
          <b>Стек</b>:  React, Type Script, MobX, MUI
        </div>
        <div>
          <b>Что реализовано из требований:</b>
          <div>
            1. Создание, редактирование, просмотр и удаление заметок (для просмотра - двойное
            нажатие по заметке); <br/>
            2. Фильтр заметок по тегу; <br/>
            3. Добавление и удаление тегов из списка (добавление через поле заметок). <br/>
            4. Данные хранить в json формате. <br/>
            5. Использование CSS препроцессора. <br/>
            6. Использование TypeScript <br/>
            7. Залить на    <Link  href="https://github.com/Metaloziz/notes" title="GitHub" target="_blank">GitHub</Link> <br/>
            8. Залить на netlify <br/>

          </div>

        </div>

        <div>
          <b>Выполнил: </b> Гайтюкевич А.В.
          <Link
            href="https://hh.ru/resume/0a4b0dcaff0bb219880039ed1f734530536158"
            title="CV" target="_blank"
          >
            CV
          </Link>
        </div>
      </div>
    </CardContent>
  </Card>
)
