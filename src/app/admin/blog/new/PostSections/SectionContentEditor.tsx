"use state";
import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
export default function SectionContentEditor({
  addSection,
}: {
  addSection: Function;
  removeSection: Function;
}) {
  const [sectionContent, setSectionContent] = React.useState(() =>
    EditorState.createEmpty()
  );
  const [sectionTitle, setSectionTitle] = useState("");
  const handleAddSection = () => {
    const content = draftToHtml(
      convertToRaw(sectionContent.getCurrentContent())
    );
    addSection(sectionTitle, content);
  };
  return (
    <div className="myEditor text-black p-3 rounded-xl bg-[#222430]">
      <h1 className="text-white text-2xl mb-2">Dodaj sekcję</h1>
      <p className="text-white text-lg mt-6 mb-2">Tytuł:</p>
      <input
        placeholder="Wpisz tytuł..."
        className="!text-black  bg-slate-400 mt-1 p-2 outline-none placeholder:text-gray-500"
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSectionTitle(e.target.value)
        }
      />
      <p className="text-white text-lg mb-2">Treść:</p>
      <Editor
        editorStyle={{
          backgroundColor: "rgb(148 163 184)",
          color: "black",
          height: "300px",
          padding: "3px 15px",
        }}
        editorState={sectionContent}
        onEditorStateChange={setSectionContent}
      />
      <button
        onClick={handleAddSection}
        className="px-4 py-2 bg-green-500 rounded-md text-white mt-2"
      >
        Zatwierdź sekcję
      </button>
    </div>
  );
}
// import { EditorState, convertToRaw } from "draft-js";
//       import draftToHtml from "draftjs-to-html";

//       export default function SectionContentEditor({
//         addSection,
//       }: {
//         addSection: Function;
//         removeSection: Function;
//       }) {
//         const [sectionContent, setSectionContent] = React.useState(() =>
//           EditorState.createEmpty()
//         );
//         const [sectionTitle, setSectionTitle] = useState("");

//         const handleAddSection = () => {
//           const content = draftToHtml(convertToRaw(sectionContent.getCurrentContent()));
//           addSection(sectionTitle, content);
//         };

//         return (
//           <div className="myEditor text-black p-3 rounded-xl bg-[#222430]">
//             <h1 className="text-white text-2xl mb-2">Dodaj sekcję</h1>
//             <p className="text-white text-lg mt-6 mb-2">Tytuł:</p>
//             <input
//               placeholder="Wpisz tytuł..."
//               className="!text-black  bg-slate-400 mt-1 p-2 outline-none placeholder:text-gray-500"
//               type="text"
//               onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//                 setSectionTitle(e.target.value)
//               }
//             />
//             <p className="text-white text-lg mb-2">Treść:</p>
//             <Editor
//               editorStyle={{
//                 backgroundColor: "rgb(148 163 184)",
//                 color: "black",
//                 height: "300px",
//                 padding: "3px 15px",
//               }}
//               editorState={sectionContent}
//               onEditorStateChange={setSectionContent}
//             />
//             <button
//               onClick={handleAddSection}
//               className="px-4 py-2 bg-green-500 rounded-md text-white mt-2"
//             >
//               Zatwierdź sekcję
//             </button>
//           </div>
//         );
//       }
//       <button
//         onClick={() => addSection(sectionTitle, sectionContent)}
//         className="px-4 py-2 bg-green-500 rounded-md text-white mt-2"
//       >
//         Zatwierdź sekcję
//       </button>
//     </div>
//   );
// }
