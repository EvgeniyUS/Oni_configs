
import * as React from "react"
import * as Oni from "oni-api"

export const activate = (oni: Oni.Plugin.Api) => {
    console.log("config activated")

    // Input
    //
    // Add input bindings here:
    //
    oni.input.bind("<c-enter>", () => console.log("Control+Enter was pressed"))

    //
    // Or remove the default bindings here by uncommenting the below line:
    //
    // oni.input.unbind("<c-p>")

}

export const deactivate = (oni: Oni.Plugin.Api) => {
    console.log("config deactivated")
}

export const configuration = {
    //add custom config here, such as
    "oni.loadInitVim": true,

    "ui.colorscheme": "onedark",
    "tabs.mode": "native",
    "learning.enabled": false,
    "achievements.enabled": false,
    //"sidebar.enabled": false,

    //"oni.useDefaultConfig": true,
    //"oni.bookmarks": ["~/Documents"],
    "editor.fontSize": "14px",
    //"editor.fontFamily": "Monaco",

    // UI customizations
    "ui.animations.enabled": false,
    "ui.fontSmoothing": "auto",
}
