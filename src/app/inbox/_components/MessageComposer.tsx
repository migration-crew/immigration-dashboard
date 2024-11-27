import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function MessageComposer() {
  return (
    <>
      <div>
        <Card className="p-[16px]">
          <Input type="text" placeholder="Write Message" className=""></Input>
        </Card>
      </div>
    </>
  );
}
