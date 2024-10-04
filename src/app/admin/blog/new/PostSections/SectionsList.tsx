"use client";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function SectionsList({
  input,
  setSelectedSection,
  setSectionEditorOpen,
  removeSection,
}: {
  input: any;
  setSelectedSection: Function;
  setSectionEditorOpen: Function;
  removeSection: Function;
}) {
  return (
    <div>
      {input.sections.length > 0 && (
        <div className="bg-[#2F313C] p-3 rounded-md my-4 text-white">
          <h1 className="">Twoje sekcje:</h1>
          {input.sections.map((section: any, idx: number) => (
            <div key={idx}>
              <div className="flex flex-row items-center my-2 hover:bg-[#34363d] p-1">
                {section.title}{" "}
                <button
                  onClick={() => {
                    setSectionEditorOpen(true);
                    setSelectedSection({ ...section, id: idx });
                  }}
                  className="ml-3"
                >
                  <FaEdit />
                </button>
                <button onClick={() => removeSection(idx)} className="ml-3">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
