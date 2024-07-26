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

export function TaskCard() {
  return (
    <Card className="">
      <CardHeader className="text-left">
        <CardTitle className="text-lg font-bold flex justify-between items-center">
          Fix Home Navigation
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
          12/06/2024 at 11:00AM
        </CardDescription>
      </CardHeader>
      <CardContent className="text-xs font-medium flex items-center justify-between">
        <Badge className="text-white bg-red-500 text-xs">Urgent</Badge>
        <span className=""></span>
        <span className="text-neutral-500/80">Backlog</span>
      </CardContent>
      <CardContent>
        <p className="text-xs text-left">
          Whenever I try the home page navigation on mobile phones, the layout
          breaks making the entire application look super weird.
        </p>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <p className="text-xs text-yellow-600 font-medium ">
          Due: 12/08/2024 at 11:00AM
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
