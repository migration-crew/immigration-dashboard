import { Button } from "@/components/ui/upImmigrationButton";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddTaskButton() {
  const router = useRouter();

  const handleCreateTask = () => {
    // This has to be updated to the correct path once the page is created: /applications/create-task
    router.push("/playground/david/create-task");
  };

  return (
    <Button
      onClick={handleCreateTask}
      className="flex items-center gap-2 w-[280px] bg-primary-gray text-primary-black"
    >
      <Plus className="" />
      Add a Task
    </Button>
  );
}
