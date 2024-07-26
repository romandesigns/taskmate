import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { FaCalendar } from "react-icons/fa6";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import axios from "axios";

interface TaskFormProps {
  title: string;
  priority: string;
  description: string;
  date: Date | undefined;
}

function TaskForm() {
  const [payload, setPayload] = useState<TaskFormProps>({
    title: "",
    priority: "",
    description: "",
    date: new Date(),
  });

  const handleSumit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("/api/task/new", payload)
      .then((res) => res.data)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button size="lg">Create Task</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-black">Create Task Form</DialogTitle>
          <form
            action=""
            onSubmit={handleSumit}
            className="py-8 grid-cols-1 grid justify-stretch gap-4"
          >
            <Input
              placeholder="Title"
              onChange={(e) =>
                setPayload({ ...payload, title: e.target.value })
              }
            />
            <Select
              onValueChange={(value) =>
                setPayload({ ...payload, priority: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Priority</SelectLabel>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "justify-start text-left font-normal",
                    !payload.date && "text-muted-foreground"
                  )}
                >
                  <FaCalendar className="mr-2 h-4 w-4" />
                  {payload.date ? (
                    format(payload.date, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Calendar
                  mode="single"
                  selected={payload.date}
                  onSelect={(date) => setPayload({ ...payload, date: date })}
                  initialFocus
                  className="w-full p-0"
                />
              </PopoverContent>
            </Popover>
            <Textarea
              placeholder="Type your message here."
              onChange={(e) =>
                setPayload({ ...payload, description: e.target.value })
              }
            />
            <Button type="submit">Create </Button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default TaskForm;
