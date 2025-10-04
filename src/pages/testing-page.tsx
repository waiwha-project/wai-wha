import { Button } from "@/components/ui/button";
import { Wrench } from "lucide-react";

export function TestingPage() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-4 p-4">
        <div className="flex gap-4 items-center">
          <Button
            variant="default"
            size="default"
          >
            Default
          </Button>
          <Button
            variant="default"
            size="sm"
          >
            Default
          </Button>
          <Button
            variant="default"
            size="icon"
          >
            <Wrench />
          </Button>
        </div>
        <div className="flex gap-4 items-center">
          <Button
            variant="destructive"
            size="default"
          >
            Destructive
          </Button>
          <Button
            variant="destructive"
            size="sm"
          >
            Destructive
          </Button>
          <Button
            variant="destructive"
            size="icon"
          >
            <Wrench />
          </Button>
        </div>
        <div className="flex gap-4 items-center">
          <Button
            variant="outline"
            size="default"
          >
            Outline
          </Button>
          <Button
            variant="outline"
            size="sm"
          >
            Outline
          </Button>
          <Button
            variant="outline"
            size="icon"
          >
            <Wrench />
          </Button>
        </div>
        <div className="flex gap-4 items-center">
          <Button
            variant="secondary"
            size="default"
          >
            Secondary
          </Button>
          <Button
            variant="secondary"
            size="sm"
          >
            Secondary
          </Button>
          <Button
            variant="secondary"
            size="icon"
          >
            <Wrench />
          </Button>
        </div>
        <div className="flex gap-4 items-center">
          <Button
            variant="ghost"
            size="default"
          >
            Ghost
          </Button>
          <Button
            variant="ghost"
            size="sm"
          >
            Ghost
          </Button>
          <Button
            variant="ghost"
            size="icon"
          >
            <Wrench />
          </Button>
        </div>
      </div>
    </div>
  )
}