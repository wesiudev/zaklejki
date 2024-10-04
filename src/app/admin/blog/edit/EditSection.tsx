"use client";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import htmlToDraft from "html-to-draftjs";
import { FaArrowRight } from "react-icons/fa";
import draftToHtml from "draftjs-to-html";
import React, { useEffect, useState } from "react";
export default function EditSection({
  selectedSection,
  setSelectedSection,
  selectedPost,
  setSelectedPost,
  setSectionEditorOpen,
  sectionEditorOpen,
}: {
  selectedSection: any;
  setSelectedSection: Function;
  selectedPost: any;
  setSelectedPost: Function;
  setSectionEditorOpen: Function;
  sectionEditorOpen: boolean;
}) {
  const [editorState, setEditorState] = useState<any>();
  useEffect(() => {
    if (selectedSection) {
      let contentBlock;
      if (typeof selectedSection?.content === "string") {
        contentBlock = htmlToDraft(selectedSection?.content);
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );

        setEditorState(EditorState.createWithContent(contentState));
      } else {
        setEditorState("");
      }
    }
  }, [selectedSection]);
  const updateSelectedPost = () => {
    if (selectedSection) {
      const content = draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      );

      const updatedSections = selectedPost.sections.map(
        (section: any, i: any) =>
          i === selectedSection.id
            ? {
                ...section,
                title: selectedSection.title,
                content: content,
              }
            : section
      );
      setSelectedPost({ ...selectedPost, sections: updatedSections });
    }
  };

  return (
    <div
      className={`h-screen w-[80vw] z-[1000] fixed right-0 top-0 bg-[#222430]  text-white  ease-in-out ${
        sectionEditorOpen ? "translate-x-[0%]" : "translate-x-[120%]"
      }`}
    >
      <div className="flex flex-col w-full relative">
        <button
          onClick={() => {
            setSectionEditorOpen(false);
          }}
          className="absolute left-0 -translate-x-[100%] w-max p-3 top-3 flex flex-row items-center bg-red-400 hover:bg-red-600 duration-200"
        >
          Zamknij
          <FaArrowRight className="ml-3" />
        </button>
        <div className="myEditor text-black p-3 rounded-xl bg-[#222430]">
          <h1 className="text-white text-2xl mb-2">Edytuj sekcję</h1>
          <p className="text-white text-lg mt-6 mb-2">Tytuł:</p>
          <input
            placeholder="Wpisz tytuł..."
            className="!text-black  bg-slate-400 mt-1 p-2 outline-none placeholder:text-gray-500"
            type="text"
            value={selectedSection?.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSelectedSection({ ...selectedSection, title: e.target.value })
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
            editorState={editorState}
            onEditorStateChange={setEditorState}
          />
          <button
            className="bg-gradient-to-tr from-green-400 via-green-600 to-green-400 font-bold text-white text-3xl hover:from-green-300 hover:via-green-500 hover:to-green-300 duration-500 ease-in-out p-6 w-full mt-6 rounded-xl"
            onClick={updateSelectedPost}
          >
            Zatwierdź sekcję
          </button>
        </div>
      </div>
    </div>
  );
}
