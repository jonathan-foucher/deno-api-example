import * as logger from './utils/logger.ts'

const add = (a: number, b: number): number  => a + b
const sub = (a: number, b: number): number  => a - b

logger.info('Add 2 + 7 =' + add(2, 7));
logger.info('Add 2 - 7 =' + sub(2, 7));
logger.error('Add 2 - 1 =' + sub(2, 1));

export { add, sub }
