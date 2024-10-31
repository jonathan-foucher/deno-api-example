import { assertEquals } from '@std/assert'
import { add, sub } from '../src/main.ts'

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5)
})

Deno.test(function subTest() {
  assertEquals(sub(2, 7), -5)
})
