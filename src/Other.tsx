import { observer } from "mobx-react"
import * as React from "react"
import { Link } from "./routerConfig"

export interface OtherProps {
  page: number
}

export const Other: React.SFC<OtherProps> = observer(({ page }) => {
  return (
    <div>
      <h1>Other Page</h1>
      Page #{page} of 10
      <br />
      <br />
      {page > 1 && (
        <Link route="other" page={page - 1}>
          Previous page
        </Link>
      )}
      <br />
      <br />
      {page < 10 && (
        <Link route="other" page={page + 1}>
          Next page
        </Link>
      )}
      <br />
      <br />
      <Link route="main" message={"Came here from Other Page #" + page}>
        Go to Main page
      </Link>
    </div>
  )
})
