import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCheck, FaPlay } from "react-icons/fa";
import { TaskFormProps } from "./TaskForm";
import classname from "classnames";
import moment from "moment";

export function TaskCard({
  title,
  due_date,
  priority,
  description,
  created_at,
}: TaskFormProps) {
  return (
    <Card className="">
      <CardHeader className="text-left">
        <CardTitle className="text-lg font-bold flex justify-between items-center">
          Fix Home Navigation
          {title}
          <Popover>
            <PopoverTrigger asChild>
              <Button size="icon" variant={"ghost"}>
                <BsThreeDotsVertical />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Card className="p-0">
                <CardContent className="text-xs font-medium flex flex-col p-4 gap-2">
                  <p>Edit</p>
                  <p>Remove</p>
                </CardContent>
              </Card>
            </PopoverContent>
          </Popover>
        </CardTitle>
        <CardDescription className="text-xs font-medium">
          {moment(created_at).format("MM/DD/YYYY - h:mm A")}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-xs font-medium flex items-center justify-between">
        <Badge
          className={classname(`text-white bg-red-500 text-xs`, {
            "bg-red-500": priority === "urgent",
            "bg-yellow-500": priority === "medium",
            "bg-green-500": priority === "low",
          })}
        >
          {priority}
        </Badge>
        <span className=""></span>
        <span className="text-neutral-500/80">Backlog</span>
      </CardContent>
      <CardContent>
        <p className="text-xs text-left">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <p className="text-xs text-yellow-600 font-medium ">
          Due: {moment(due_date).format("MM/DD/YYYY - h:mm A")}
        </p>
        <div className="mt-6 flex gap-4">
          <Button size="icon">
            <FaPlay />
          </Button>
          <Button size="icon">
            <FaCheck />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default TaskCard;
