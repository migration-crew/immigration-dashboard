"use client";

import { Caption } from "@/components/common/text/Caption";
import { CaptionSemi } from "@/components/common/text/CaptionSemi";
import { ParagraphRegular } from "@/components/common/text/ParagraphRegular";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/upImmigrationButton";
import { File, Loader, Plus, Trash } from "lucide-react";
import type { NextPage } from "next";
import { useCallback, useState } from "react";
import type { FileRejection } from "react-dropzone";
import { useDropzone } from "react-dropzone";

export const DocumentDropzone: NextPage = () => {
  const [currentShowFiles, setCurrentShowFiles] = useState<
    { file: File; isUploaded: boolean }[]
  >([]);

  const onUploadFile = async (file: File) => {
    try {
      setCurrentShowFiles((prevFiles) => [
        ...prevFiles,
        { file, isUploaded: false },
      ]);

      // replace to upload functions 2 lines below
      const uploadTime = Math.random() * 9000 + 1000; // 1秒から10秒
      await new Promise((resolve) => setTimeout(resolve, uploadTime));

      setCurrentShowFiles((prevFiles) =>
        prevFiles.map((f) =>
          f.file.name === file.name ? { ...f, isUploaded: true } : f
        )
      );
    } catch (error) {
      alert(`error happend while uploading: ${error}`);
    }
  };

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const filteringFiles = acceptedFiles.filter(
        (file) =>
          !currentShowFiles?.find(
            (showFile) =>
              file.name === showFile.file.name &&
              file.size === showFile.file.size
          )
      );

      if (filteringFiles.length + currentShowFiles.length > 10) {
        alert("you can upload until 10 files");
        return;
      }

      if (filteringFiles.length) {
        try {
          await Promise.all(filteringFiles.map((file) => onUploadFile(file)));
          // ↓すべてのファイルのアップロードが成功した後の処理を書く
        } catch (error) {
          alert(`error happend while uploading: ${error}`);
        }
      }
    },
    [currentShowFiles]
  );

  const onDropRejected = useCallback((rejectedFiles: FileRejection[]) => {
    rejectedFiles.forEach(({ file, errors }) => {
      errors.forEach(({ code }) => {
        let message = "error happend";
        switch (code) {
          case "file-too-large":
            message = `size of ${file.name} is too big. 50MB or less size are allowed`;
            break;
          case "file-invalid-type":
            message = `file type of ${file.name} is not allowed.Only these are allowed: jpg, png, pdf, doc, docx, xls, xlsx, ppt, pptx.`;
            break;
          default:
            break;
        }
        alert(message);
      });
    });
  }, []);

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      onDropRejected,
      accept: {
        "image/jpeg": [],
        "image/png": [],
        "application/pdf": [],
        "application/msword": [],
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [],
        "application/vnd.ms-excel": [],
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
        "application/vnd.ms-powerpoint": [],
        "application/vnd.openxmlformats-officedocument.presentationml.presentation": [],
      },
      maxSize: 50 * 1024 * 1024, // 50MB
    });

  // ドラッグ中のスタイルを設定
  const setDropZoneStyle = () => {
    if (isDragAccept) {
      return "bg-primary-gray/10";
    } else if (isDragReject) {
      return "bg-primary-red/10";
    } else {
      return "";
    }
  };

  const removeFile = (index: number) => {
    const filteringFiles = currentShowFiles.filter((_, i) => i !== index);
    setCurrentShowFiles(filteringFiles);
  };

  return (
    <div className="w-full flex-1 flex">
      <div
        {...getRootProps()}
        className={`w-1/2 h-full bg-primary-gray border-secondary-medium-gray/90 border-2 grid place-content-between px-5 py-7 text-center justify-center ${setDropZoneStyle()}`}
      >
        <input {...getInputProps()} />
        <CaptionSemi className="text-primary-black">
          {isDragAccept
            ? "Documents will appload"
            : isDragReject
            ? "This file Type is not allowed"
            : "Please upload documents"}
        </CaptionSemi>
        <div className="flex justify-center"><Plus size={35} /></div>
        
        <Button variant="secondary" disabled={isDragReject}>
          Choose files
        </Button>
      </div>
      <aside className="w-1/2 pl-5 h-full grid">
        <CaptionSemi>Uploaded files</CaptionSemi>
        <div className=" flex items-end">
          <ScrollArea className="w-full h-[270px] rounded-md border">
            {currentShowFiles && (
              <ul className="p-4">
                {currentShowFiles.map((item, index) => (
                  <li key={index}>
                    {item.isUploaded ? (
                      <>
                        <div className="flex justify-between items-center">
                          <File />
                          <ParagraphRegular className="w-[180px] break-words">
                            {item.file.name}
                          </ParagraphRegular>
                          <Button
                            variant="secondary"
                            onClick={() => {
                              removeFile(index);
                            }}
                          >
                            <Trash />
                          </Button>
                        </div>
                        <Separator className="my-2" />
                      </>
                    ) : (
                      <>
                      <div className="flex justify-between items-center">
                        <Loader />
                        <ParagraphRegular className="break-words w-[240px]">
                          apploading {item.file.name}...
                        </ParagraphRegular>
                      </div>
                      <Separator className="my-2" />
                      </>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </ScrollArea>
        </div>
      </aside>
    </div>
  );
};
