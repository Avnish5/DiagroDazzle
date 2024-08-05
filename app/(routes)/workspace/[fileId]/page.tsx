"use client";
import React, { useContext, useEffect, useState } from "react";
import WorkspaceHeader from "../_components/WorkspaceHeader";
import Editor from "../_components/Editor";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { FILE } from "../../dashboard/_components/FileList";
import Canvas from "../_components/Canvas";

function Workspace({ params }: any) {
  const convex = useConvex();
  const [triggerSave, setTriggerSave] = useState(false);
  const [fileData, setFileData] = useState<FILE | any>();

  useEffect(() => {
    params.fileId && getFileData();
  }, [params.fileId]);

  const getFileData = async () => {
    const result = await convex.query(api.files.getFileById, {
      _id: params.fileId,
    });
    setFileData(result);
    console.log(result);
  };
  return (
    <div>
      <WorkspaceHeader onSave={() => setTriggerSave(!triggerSave)} />

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className=" h-screen">
          <Editor
            onSaveTrigger={triggerSave}
            fileData={fileData}
            fileId={params.fileId}
          />
        </div>
        <div className=" h-screen border-l">
          <Canvas
            onSaveTrigger={triggerSave}
            fileData={fileData}
            fileId={params.fileId}
          />
        </div>
      </div>
    </div>
  );
}

export default Workspace;
