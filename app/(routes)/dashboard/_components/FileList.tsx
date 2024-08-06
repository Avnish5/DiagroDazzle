import React, { useContext, useEffect, useState } from "react";
import { FileListContext } from "@/app/_context/FileListContext";
import moment from "moment";
import { Archive, Delete, MoreHorizontalIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useRouter } from "next/navigation";

export interface FILE {
  archive: boolean;
  createdBy: string;
  document: string;
  fileName: string;
  teamId: string;
  whiteBoard: string;
  _creationTime: number;
  _id: string;
}

export function FileList({ searchQuery }: any) {
  const { fileList_, setFileList_ } = useContext(FileListContext);
  const [fileList, setFileList] = useState<any>();
  const router = useRouter();
  useEffect(() => {
    fileList_ && setFileList(fileList_);
    console.log(fileList_);
  }, [fileList_]);

  const trimmedSearchQuery = searchQuery.trim();

  const filteredFiles = trimmedSearchQuery
    ? fileList?.filter((file: FILE) =>
        file.fileName.toLowerCase().includes(trimmedSearchQuery.toLowerCase())
      )
    : fileList;

  return (
    <div className="mt-11">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                File Name
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Created At
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Edited
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Author
              </td>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {filteredFiles &&
              filteredFiles.map((file: FILE, index: number) => (
                <tr className="odd:bg-gray-50 cursor-pointer">
                  <td
                    className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                    onClick={() => router.push("/workspace/" + file._id)}
                  >
                    {file.fileName}
                  </td>
                  <td
                    className="whitespace-nowrap px-4 py-2 text-gray-700"
                    onClick={() => router.push("/workspace/" + file._id)}
                  >
                    {moment(file._creationTime).format("DD MMM YYYY")}
                  </td>
                  <td
                    className="whitespace-nowrap px-4 py-2 text-gray-700"
                    onClick={() => router.push("/workspace/" + file._id)}
                  >
                    {moment(file._creationTime).format("DD MMM YYYY")}
                  </td>
                  <td
                    className="whitespace-nowrap px-4 py-2 text-gray-700"
                    onClick={() => router.push("/workspace/" + file._id)}
                  >
                    {file.createdBy}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <MoreHorizontalIcon />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem className="gap-3 cursor-pointer">
                          <Archive className="h-4 w-4" />
                          Archive
                        </DropdownMenuItem>

                        {/* <DropdownMenuItem className="gap-3 cursor-pointer">
                          <Delete className="h-4 w-4" />
                          Delete
                        </DropdownMenuItem> */}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FileList;
