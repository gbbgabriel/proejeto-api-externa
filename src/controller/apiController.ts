import { Request, Response } from 'express'
import axios from 'axios'


export const test = (req: Request, res: Response) => {
  res.send('oi')
}

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})

export const pokemon = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const { data } = await api.get(`pokemon/${id}`)
    return res.send({ name: data.name })
  } catch (error: any) {
    res.send({ error: error.message })
  }
}
