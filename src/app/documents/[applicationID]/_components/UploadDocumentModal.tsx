import { Copy, Plus } from "lucide-react"
 
import { Button } from "@/components/ui/upImmigrationButton"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SubmitDocumentButton } from "./SubmitDocumentButton"

type Props = {
  status: string
}

export const UploadDocumentModal = ({status}: Props) => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        {status === "NotSubmitted" ? (<Button className="px-4 py-[6px] h-[33px] w-[148px] justify-center"><Plus />Add</Button>) : (<SubmitDocumentButton status={status} />)}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Documents</DialogTitle>
          <DialogDescription>
            Please upload document to here.
          </DialogDescription>
        </DialogHeader>
        
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button">
              Submit
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
