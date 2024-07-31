import { Button } from "@/components/ui/button";
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
import axios from "axios";
import { useState } from "react";
import { DateTimePicker } from "../ui/DateTimePicker";

interface TaskFormProps {
  title: string;
  priority: string;
  description: string;
  date: Date | undefined;
}

function TaskForm() {
  const [date12, setDate12] = useState<Date | undefined>(new Date());
  const [payload, setPayload] = useState<TaskFormProps>({
    title: "",
    priority: "",
    description: "",
    date: date12,
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
            <DateTimePicker
              hourCycle={12}
              value={date12}
              onChange={setDate12}
            />

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
