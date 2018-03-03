import { newRouter } from "kpd-router"

import { Main } from "./Main"
import { Other } from "./Other"

export const router = newRouter()
  .addRoute({ name: "main", path: "/", component: Main })
  .addRoute({ name: "other", path: "/other", component: Other })
  .start()

export const Link = router.Link
