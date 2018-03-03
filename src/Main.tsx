
import {observer} from "mobx-react"
import * as React from "react"

import { Link } from "./routerConfig";



@observer
export class Main extends React.Component {
    render(): React.ReactNode {
        return <div>
            <h1>Main Page</h1>
            <Link route="other">Go to Other page</Link>

            </div>
    }
}
