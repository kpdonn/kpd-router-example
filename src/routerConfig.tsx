import { newRouter, routerPath } from "kpd-router"

import { Main } from "./Main"
import { Other } from "./Other"

const numConverter = {
  toString: (id: number) => id.toString(),
  fromString: (arg: string) => Number.parseInt(arg)
}

export const router = newRouter()
  .addRoute({
    name: "main",
    path: "/",
    queryParams: ["message"],
    component: Main
  })
  .addRoute({
    name: "other",
    path: routerPath`/other/${"page"}`,
    converters: { page: numConverter },
    defaults: { page: 1 },
    component: Other
  })
  .start()

export const Link = router.Link
