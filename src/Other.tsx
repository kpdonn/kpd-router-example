
import {observer} from "mobx-react"
import * as React from "react"
import { Link } from "./routerConfig";


@observer
export class Other extends React.Component {
    render(): React.ReactNode {
        return <div><h1>Other Page</h1>
            <Link route="main">Go to Main page</Link>
        </div>
    }
}