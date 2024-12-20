import * as logger from './utils/logger.ts'
import { Sequelize } from 'npm:sequelize-typescript'
import { MovieModel, Movie } from './models/movie.ts'

const DB_HOST = Deno.env.get('DB_HOST')
const DB_PORT = Deno.env.get('DB_PORT')
const DB_NAME = Deno.env.get('DB_NAME')
const DB_USER = Deno.env.get('DB_USER')
const DB_PASSWORD = Deno.env.get('DB_PASSWORD')
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  { logging: false, models: [ MovieModel ] },
)

sequelize.authenticate()
  .then(() => logger.info('Connected to the database'))
  .catch((error: any) => {
    logger.error('Failed to connect to the database :')
    logger.error(error)
  })

Deno.addSignalListener('SIGTERM', () => sequelize.close()
    .then(() => logger.info('Database pool shut down')))

MovieModel.sync()

const getAllMovies = (): Promise<Array<Movie>> => MovieModel.findAll()
  .then(movies => movies.map((movie: MovieModel) => movie.dataValues))

const saveMovie = (movie: Movie) => MovieModel.upsert(movie)

const deleteMoveById = (id: number) => MovieModel.destroy({ where: { id } })

export { getAllMovies, saveMovie, deleteMoveById }
