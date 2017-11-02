export const removeElements = (selectors, getElementsBy) => {
    selectors.forEach(
        selector => {
            const elements = getElementsBy(selector)

            if (Array.isArray(elements)) {
                elements
                    .forEach(removeSingleElement)
            }
        }
    )
}

const removeSingleElement = (element) => {
    if (element && element.remove) {
        element.remove()
    }
}
