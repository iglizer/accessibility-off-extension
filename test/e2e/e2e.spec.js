import nightmare from 'nightmare'

const elementSelectors = {
    ID_TO_REMOVE    : '#INDWrap',
    CLASS_TO_REMOVE : '.menu-accessibility',
    ID_TO_KEEP      : '#elementToKeep'
}

describe('e2e', () => {
    it('should remove  specified elements only', async () => {
        const page = nightmare().goto('http://localhost:8080')

        const elements = await page.evaluate(fetchDataBy()).end()

        verifyNotExists(elements.elementWithIdToRemove)
        verifyNotExists(elements.elementWithClassToRemove)
        verifyExists(elements.elementToKeep)
    })


    const fetchDataBy = () => {
        return () => {
            const doesSelectorExists = (selector) =>
                 document.querySelector(selector) !== null

            return ({
                elementWithIdToRemove: doesSelectorExists('#INDWrap'),
                elementWithClassToRemove: doesSelectorExists('.menu-accessibility'),
                elementToKeep: doesSelectorExists('#elementToKeep')
            })
        }
    }

    const verifyNotExists = (element) => expect(element).toBeFalsy()

    const verifyExists = (element) => expect(element).toBeTruthy()
})

