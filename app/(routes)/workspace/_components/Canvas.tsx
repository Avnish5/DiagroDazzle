import React, { useEffect, useState } from "react";
import { Excalidraw, MainMenu } from "@excalidraw/excalidraw";
import { FILE } from "../../dashboard/_components/FileList";
import { mutation } from "@/convex/_generated/server";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
function Canvas({
  onSaveTrigger,
  fileId,
  fileData,
}: {
  onSaveTrigger: any;
  fileId: any;
  fileData: FILE;
}) {
  const [whiteBoardData, setWhiteBoardData] = useState<any>();
  const updateWhiteboard = useMutation(api.files.updateWhiteboard);

  useEffect(() => {
    onSaveTrigger && saveWhiteBoard();
  }, [onSaveTrigger]);

  const saveWhiteBoard = () => {
    console.log(whiteBoardData);
    updateWhiteboard({
      _id: fileId,
      whiteBoard: JSON.stringify(whiteBoardData),
    }).then((resp) => {
      console.log(resp);
    });
  };
  return (
    <div style={{ height: "670px" }}>
      {fileData && (
        <Excalidraw
          initialData={{
            elements: fileData?.whiteBoard && JSON.parse(fileData?.whiteBoard),
          }}
          onChange={(excalidrawElements, appState, files) =>
            setWhiteBoardData(excalidrawElements)
          }
        />
      )}
    </div>
  );
}

export default Canvas;
