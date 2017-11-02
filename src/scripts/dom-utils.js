export const getElementsById =
        id => [document.getElementById(id)]

export const getElementsByClass =
        className => Array.from(document.getElementsByClassName(className))
