"use client";
import { renderMarkdown } from "@/lib/parseMarkdown";
import { addBlogPost } from "@/firebase";
import Link from "next/link";
import { useState } from "react";
import { FaLink, FaLongArrowAltLeft } from "react-icons/fa";
import * as Scroll from "react-scroll";
import PostImages from "./PostImages";
import SectionContentEditor from "./PostSections/SectionContentEditor";
import TagsHandler from "./TagsHandler";
import { EditorState } from "draft-js";
import EditSection from "../edit/EditSection";
import SectionsList from "./PostSections/SectionsList";
import FaqHandler from "./FaqHandler";
import { polishToEnglish } from "@/lib/polishToEnglish";
var randomId = require("random-id");
export default function NewPostPage() {
  const [input, setInput] = useState({
    postId: randomId(30, "aA0"),
    title: "",
    intro: "",
    outro: "",
    metaTitle: "",
    mainImage: "",
    metaDescription: "",
    sections: [],
    tags: [],
    faq: [],
    url: "",
    blogType: "",
    creationTime: Date.now(),
  });
  const [selectedSection, setSelectedSection] = useState({
    title: "",
    content: EditorState.createEmpty(),
    id: 0,
  });
  const [sectionEditorOpen, setSectionEditorOpen] = useState(false);
  const [tagInput, setTagInput] = useState("");
  const [messageVisible, setMessageVisible] = useState(false);
  const addSection = (title: string, content: EditorState) => {
    setInput((prevInput: any) => ({
      ...prevInput,
      sections: [...prevInput.sections, { title: title, content: content }],
    }));
  };
  const addTag = () => {
    setInput((prevInput: any) => ({
      ...prevInput,
      tags: [...prevInput.tags, { name: `#${tagInput}` }],
    }));
  };

  let ScrollTo = Scroll.Link;
  {
    /* {"![alt text](image-url) [link text](link-url)"} */
  }

  const removeSection = (idx: number) => {
    const newSections = [...input.sections];
    newSections.splice(idx, 1);
    setInput({ ...input, sections: newSections });
  };
  const removeTag = (idx: number) => {
    const newTags = [...input.tags];
    newTags.splice(idx, 1);
    setInput({ ...input, tags: newTags });
  };
  const blogTypes = ["art", "tattoo"];
  if (typeof window !== "undefined")
    return (
      <>
        <EditSection
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
          selectedPost={input}
          setSelectedPost={setInput}
          setSectionEditorOpen={setSectionEditorOpen}
          sectionEditorOpen={sectionEditorOpen}
        />

        <div className="relative">
          {messageVisible && (
            <div
              className={`z-[1000] bg-green-500 text-3xl w-screen lg:w-max h-max p-12 fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] flex items-center justify-center`}
            >
              Twój link do posta to: /{polishToEnglish(input.title)}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 pt-0 pr-0 text-white gap-y-6 w-full">
            <div className="flex flex-col space-y-3 w-full bg-[#13151f] px-5 pb-12">
              <Link
                href="/admin/blog"
                className="flex flex-row items-center pt-12 text-2xl"
              >
                <FaLongArrowAltLeft className="mr-3" />
                Powrót
              </Link>
              <h1 className="w-full text-3xl text-white font-bold pt-12">
                Nowy post
              </h1>
              <select
                className="text-black p-3 drop-shadow-md shadow-black rounded-md border-2 border-black mt-3"
                id="category"
                value={input.blogType}
                onChange={(e) => {
                  setInput({ ...input, blogType: e.target.value });
                }}
              >
                <option value="">Wybierz rodzaj bloga</option>
                {blogTypes.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="grid grid-cols-1 text-lg h-max w-full">
                <PostImages input={input} setInput={setInput} />
                <div className="grid grid-cols-3 gap-3">
                  <div className="flex flex-col my-3 space-y-3">
                    {" "}
                    Tytuł
                    <textarea
                      placeholder="Wpisz tytuł..."
                      rows={5}
                      value={input.title}
                      onChange={(e) =>
                        setInput({ ...input, title: e.target.value })
                      }
                      className="!text-black mt-1 bg-slate-400 p-2 outline-none placeholder:text-gray-500 scrollbarMain resize-none"
                    />
                  </div>
                  <div className="flex flex-col my-3 space-y-3">
                    Tytuł SEO
                    <textarea
                      placeholder="Wpisz tytuł SEO... (max 60 znaków)"
                      rows={5}
                      value={input.metaTitle}
                      onChange={(e) =>
                        setInput({ ...input, metaTitle: e.target.value })
                      }
                      className="!text-black mt-1 bg-slate-400 p-2 outline-none placeholder:text-gray-500 scrollbarMain resize-none"
                    />
                    Pozostałe znaki: {60 - input.metaTitle.length}/60
                  </div>
                  <div className="flex flex-col my-3 space-y-3">
                    Opis SEO
                    <textarea
                      placeholder="Wpisz opis SEO... (max 160 znaków)"
                      rows={5}
                      value={input.metaDescription}
                      onChange={(e) =>
                        setInput({ ...input, metaDescription: e.target.value })
                      }
                      className="!text-black mt-1 bg-slate-400 p-2 outline-none placeholder:text-gray-500 scrollbarMain resize-none"
                    />
                    Pozostałe znaki: {160 - input.metaDescription.length}/160
                  </div>
                </div>

                <div className="flex flex-col my-3 space-y-3">
                  {" "}
                  Wstęp
                  <textarea
                    placeholder="Wpisz tekst..."
                    rows={6}
                    value={input.intro}
                    onChange={(e) =>
                      setInput({ ...input, intro: e.target.value })
                    }
                    className="!text-black bg-slate-400 mt-1 p-2 outline-none placeholder:text-gray-500  scrollbarMain resize-none"
                  />
                </div>
                <div className="text-black !font-coco">
                  <SectionContentEditor
                    addSection={addSection}
                    removeSection={removeSection}
                  />
                  <SectionsList
                    input={input}
                    setSelectedSection={setSelectedSection}
                    setSectionEditorOpen={setSectionEditorOpen}
                    removeSection={removeSection}
                  />
                </div>
              </div>
              <div className="text-black p-3 rounded-xl bg-[#222430]">
                <FaqHandler setInput={setInput} input={input} />
              </div>
              <div className="flex flex-col my-3">
                {" "}
                Zakończenie
                <input
                  placeholder="Wpisz tekst..."
                  value={input.outro}
                  onChange={(e) =>
                    setInput({ ...input, outro: e.target.value })
                  }
                  className="!text-black  bg-slate-400 mt-1 p-2 outline-none placeholder:text-gray-500"
                  type="text"
                />
              </div>
              <TagsHandler
                tagInput={tagInput}
                setTagInput={setTagInput}
                addTag={addTag}
                removeTag={removeTag}
                input={input}
              />

              <div className="my-4">
                <span>Utwórz link</span>
                <br />
                <input
                  className="!text-black  bg-slate-400 mt-1 p-2 outline-none placeholder:text-gray-500"
                  type="text"
                  value={input.url}
                  onChange={(e) =>
                    setInput({ ...input, url: polishToEnglish(e.target.value) })
                  }
                />
              </div>

              <button
                onClick={() => {
                  addBlogPost(input);
                  setTimeout(() => {
                    setInput({
                      ...input,
                      url: "",
                    });
                  }, 3000);
                }}
                className="py-6 bg-green-500 text-2xl text-white hover:bg-green-400 duration-200"
              >
                OPUBLIKUJ
              </button>
            </div>
            <div className="flex flex-col relative w-full ">
              <div className="absolute w-full ">
                <div className="fixed h-screen overflow-y-scroll scrollbarMain w-full">
                  <h1 className="w-full px-3 pl-12 text-3xl text-white font-bold z-[50] pt-24">
                    Podgląd
                  </h1>
                  <div className="flex flex-col p-12  prose lg:prose-xl prose-invert pr-28">
                    <h1 className="leading-relaxed font-bold">{input.title}</h1>
                    <p className="leading-relaxed">
                      <div
                        dangerouslySetInnerHTML={renderMarkdown(input.intro)}
                      />
                    </p>
                    {input.sections.length > 0 && (
                      <p className="">W tym poście przeczytasz o:</p>
                    )}
                    <div className="flex flex-col ml-6">
                      {input.sections.length > 0 &&
                        input.sections.map((section: any, idx) => (
                          <span key={idx} className="relative h-12">
                            <ScrollTo
                              className=" text-blue-400 flex flex-row items-center cursor-pointer hover:bg-gray-100 duration-150 absolute left-0 top-0 z-20 h-full w-full"
                              activeClass="active"
                              to={`${polishToEnglish(section.title)}`}
                              spy={true}
                              smooth={true}
                              offset={50}
                              duration={500}
                            >
                              <FaLink className="text-gray-500 mr-2 min-w-[25px]" />{" "}
                              {section.title}
                            </ScrollTo>
                          </span>
                        ))}
                    </div>

                    {input.sections.map((section: any, idx) => (
                      <div id={`${polishToEnglish(section.title)}`} key={idx}>
                        <h2 className="leading-relaxed font-bold">
                          {section.title}
                        </h2>
                        <div
                          className=""
                          dangerouslySetInnerHTML={{
                            __html: section.content,
                          }}
                        />
                      </div>
                    ))}

                    <p className="leading-relaxed">{input.outro}</p>
                    <div className="flex flex-row space-x-6 flex-wrap">
                      {input.tags.map((tag: any, i) => (
                        <Link href={`/blog/?tag=${tag.name}`} key={i}>
                          {tag.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
