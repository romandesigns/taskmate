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
import { FaPlay, FaCheck } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

export function TaskCard() {
  return (
    <Card className="">
      <CardHeader className="text-left">
        <CardTitle className="text-lg font-black flex justify-between items-center">
          <h3>Fix Home Navigation</h3>
          <BsThreeDotsVertical />
        </CardTitle>
        <CardDescription className="text-xs font-medium">
          12/06/2024 at 11:00AM
        </CardDescription>
      </CardHeader>
      <CardContent className="text-xs font-medium flex items-center justify-between">
        <Badge className="text-white bg-red-500">Urgent</Badge>
        <span className=""></span>
        <span className="text-neutral-500/80">Backlog</span>
      </CardContent>
      <CardContent>
        <p className="text-sm text-left">
          Whenever I try the home page navigation on mobile phones, the layout
          breaks making the entire application look super weird.
        </p>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <p className="text-xs text-yellow-600 font-medium ">
          Due: 12/08/2024 at 11:00AM
        </p>
        <div className="mt-6 flex gap-4">
          <Button size="sm">
            <FaPlay />
          </Button>
          <Button size="sm">
            <FaCheck />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default TaskCard;
