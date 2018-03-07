import { observer } from "mobx-react"
import * as React from "react"

import { Link } from "./routerConfig"

export interface MainProps {
  message?: string
}

@observer
export class Main extends React.Component<MainProps> {
  render(): React.ReactNode {
    return (
      <div>
        <h1>Main Page</h1>
        {this.props.message ? "Message: " + this.props.message : "No message"}
        <br />
        <br />
        <Link route="other">Go to Other page</Link>
      </div>
    )
  }
}
