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
    return res.send({ data: data.name, xp: data.base_experience })
  } catch (error: any) {
    res.send({ error: error.message })
  }
}

export const generation = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const { data } = await api.get(`generation/${id}`)
    return res.send({ data: data.name })
  } catch (error: any) {
    res.send({ error: error.message })
  }
}