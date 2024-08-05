"use client";
import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Checklist from "@editorjs/checklist";
import ImageTool from "@editorjs/image";
import Paragraph from "@editorjs/paragraph";

const rawDataOutput = {
  time: 1550476186479,
  blocks: [
    {
      id: "oUq2g_tl8y",
      type: "header",
      data: {
        text: "Document Name",
        level: 2,
      },
    },
    {
      id: "zbGZFPM-iI",
      type: "paragraph",
      data: {
        text: " — try to edit this text. Source code of the page contains the example of connection and configuration.",
      },
    },
  ],
  version: "2.8.1",
};

function Editor() {
  const ref = useRef<EditorJS>();
  useEffect(() => {
    initEdior();
  });

  const initEdior = () => {
    const editor = new EditorJS({
      tools: {
        header: {
          class: Header,
          shortcut: "CMD+SHIFT+H",
        },
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
      },
      holder: "editorjs",
      data: rawDataOutput,
    });

    ref.current = editor;
  };
  return (
    <div>
      <div id="editorjs"></div>
    </div>
  );
}

export default Editor;
