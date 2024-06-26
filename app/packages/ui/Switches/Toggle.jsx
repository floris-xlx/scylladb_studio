import React from "react";
import { Switch } from "@nextui-org/react";

export default function App({
    label,
}) {

    return (
        <div>
            <Switch defaultSelected aria-label="Automatic updates">
                {label}
            </Switch>

        </div>
    );
}
