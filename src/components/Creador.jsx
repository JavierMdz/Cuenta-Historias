import React,{useState,useRef}from "react"
import { EditorState } from "draft-js"
import "draft-js/dist/Draft.css"
import "draftail/dist/draftail.css"
import { DraftailEditor,INLINE_STYLE, BLOCK_TYPE, /*ENTITY_TYPE*/ } from "draftail"


const Creador= ()=>{
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const inputEl = useRef();
    const Crear=()=>{
        console.log(editorState)
    }
    console.log(inputEl.current);
    return(
        <>
            <h1 className="mt-3">Crea tu nueva historia</h1>
            <div>
                <div className="form-group">
                    <input className="form-control form-control-lg mt-4 mb-4" type="text" placeholder="titulo" required/>
                    <DraftailEditor
                        refs={inputEl}
                        editorState={editorState}
                        onChange={setEditorState}
                        blockTypes={[
                            { type: BLOCK_TYPE.HEADER_ONE },
                            { type: BLOCK_TYPE.HEADER_TWO },
                            { type: BLOCK_TYPE.HEADER_THREE },
                            { type: BLOCK_TYPE.HEADER_FOUR },
                            { type: BLOCK_TYPE.UNORDERED_LIST_ITEM },
                            {type : BLOCK_TYPE.ORDERED_LIST_ITEM},
                            {type : BLOCK_TYPE.BLOCKQUOTE},
                            {type : BLOCK_TYPE.CODE},
                            {type : BLOCK_TYPE.ATOMIC}
                        ]}
                        inlineStyles={[
                            { type: INLINE_STYLE.BOLD }, 
                            { type: INLINE_STYLE.ITALIC },
                            { type: INLINE_STYLE.CODE },
                            { type: INLINE_STYLE.DELETE},
                            { type: INLINE_STYLE.INSERT},
                            { type: INLINE_STYLE.KEYBOARD},
                            { type: INLINE_STYLE.MARK},
                            { type: INLINE_STYLE.QUOTATION},
                            { type: INLINE_STYLE.SAMPLE},
                            { type: INLINE_STYLE.SMALL},
                            { type: INLINE_STYLE.STRIKETHROUGH},
                            { type: INLINE_STYLE.SUBSCRIPT},
                            { type: INLINE_STYLE.SUPERSCRIPT},
                            { type: INLINE_STYLE.UNDERLINE}
                        ]}
                    />
                    <button type="submit" className="btn btn-dark mt-4" onClick={Crear}>Crear</button>
                </div>
            </div>
        </>
    )
}

export default Creador;
