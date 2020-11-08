import React from "react"
import "draft-js/dist/Draft.css"
import "draftail/dist/draftail.css"
import { DraftailEditor, BLOCK_TYPE, INLINE_STYLE } from "draftail"

const initial = JSON.parse(sessionStorage.getItem("draftail:content"))

const onSave = (content) => {
  console.log("saving", content)
  sessionStorage.setItem("draftail:content", JSON.stringify(content))
}   
const Editor1= ()=>{
    return (
        <DraftailEditor
        rawContentState={initial || null}
        onSave={onSave}
        blockTypes={[
            { type: BLOCK_TYPE.HEADER_THREE },
            { type: BLOCK_TYPE.UNORDERED_LIST_ITEM },
        ]}
        inlineStyles={[{ type: INLINE_STYLE.BOLD }, { type: INLINE_STYLE.ITALIC }]}
        />
    )
}

const Editor= ()=>{
    return(
        <>
            <h1 className="mt-3">Crea tu nueva historia</h1>
            <form>
                <div class="form-group">
                    <input class="form-control form-control-lg mt-4 mb-4" type="text" placeholder="titulo" required/>
                    <Editor1/>
                </div>
            </form>
        </>
    )
}

export default Editor;
