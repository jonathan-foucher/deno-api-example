import * as logger from './utils/logger.ts'
import { objToCamelCase } from './utils/converter.ts'
import { Movie } from './models/movie.ts'

const HTTP_PORT: number = Deno.env.get("HTTP_PORT")
const API_MOVIES_ID_REGEX: RegExp = /^\/api\/movies\/(\d*)$/

const isPathname = (req: Request, pathname: string): boolean => new URL(req.url).pathname === pathname
const pathnameRegExTest = (req: Request, regex: RegExp): boolean => regex.test(new URL(req.url).pathname)
const isGet = (req: Request): boolean => req.method === 'GET'
const isPost = (req: Request): boolean => req.method === 'POST'
const isDelete = (req: Request): boolean => req.method === 'DELETE'

Deno.serve({ port: HTTP_PORT }, async (req: Request): Promise<Response> => {
  if (isGet(req) && isPathname(req, '/api/movies')) {
    logger.info('Get all movies')
    return new Response('Get all movies')
  }

  if (isPost(req) && isPathname(req, '/api/movies')) {
    const movie: Movie = objToCamelCase(await req.json())
    logger.info(`Post movie with id ${movie.id}`)
    return new Response(`Post movie with id ${movie.id}`)
  }

  if (isDelete(req) && pathnameRegExTest(req, API_MOVIES_ID_REGEX)) {
    const movieId = API_MOVIES_ID_REGEX.exec(new URL(req.url).pathname)?.[1]
    if (movieId) {
      logger.info(`Delete movie with id ${movieId}`)
      return new Response(`Delete movie with id ${movieId}`)
    }
  }

  return new Response('404 Not Found', { status: 404 })
})
