import {ChangeEvent, MouseEvent} from 'react'

interface Props {
    /**
     * An immer state gotten from useImmer
     */
    paragraphs: string[]
    /**
     * An immer function gotten from useImmer
     */
    updateParagraph: Function
}

export default function TextEditor({paragraphs, updateParagraph}: Props) {
    const newParagraph = (event: MouseEvent) => {
        event.preventDefault()
        updateParagraph((paragraphs: string[]) => {
            paragraphs.push('')
        })
    }

    const setOnChange = (index: number) => {
        // Return an event handler injected with index value
        return (event: ChangeEvent<HTMLTextAreaElement>) => {
            updateParagraph((paragraphs: string[]) => {
                paragraphs[index] = event.target.value
            })
        }
    }

    return (
        <section className="flex flex-col space-y-4">
            {paragraphs.map((para, index) => (
                <textarea key={index}
                          placeholder="Start typing..."
                          className="textarea textarea-bordered h-max"
                          value={para}
                          onChange={setOnChange(index)}
                          autoFocus={true}
                />
            ))}
            <button className="btn btn-primary btn-outline self-center" onClick={newParagraph}>New Paragraph</button>
        </section>
    )
}