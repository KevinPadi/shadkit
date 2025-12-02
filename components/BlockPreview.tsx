"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ImperativePanelHandle } from "react-resizable-panels";
import { ButtonGroup } from "@/components/ui/button-group";
import { type Block } from "@/app/blocks/[category]/page";
import { Button } from "./ui/button";
import {
  Check,
  Copy,
  Fullscreen,
  Monitor,
  Smartphone,
  Tablet,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { useCopyToClipboard } from "@uidotdev/usehooks";

interface BlockPreviewProps {
  block: Block;
}

export function BlockPreview({ block }: BlockPreviewProps) {
  const [_, copyToClipboard] = useCopyToClipboard();
  const [hasCopiedText, setHasCopiedText] = useState(false);
  const resizablePanelRef = useRef<ImperativePanelHandle>(null);

  const phonePanel = () => {
    const panel = resizablePanelRef.current;
    if (panel) {
      panel.resize(30);
    }
  };

  const tabletPanel = () => {
    const panel = resizablePanelRef.current;
    if (panel) {
      panel.resize(60);
    }
  };

  const desktopPanel = () => {
    const panel = resizablePanelRef.current;
    if (panel) {
      panel.resize(100);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setHasCopiedText(false);
    }, 2000);
  }, [hasCopiedText]);

  return (
    <div>
      <Tabs defaultValue="preview">
        <div className="flex flex-wrap gap-2 items-center justify-between md:pr-4">
          <div className="flex items-center gap-4 h-10 py-2">
            <TabsList className="flex items-center gap-1 bg-transparent border">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <Separator orientation="vertical" />
            <span className="font-medium">{block.name}</span>
          </div>
          <div className="hidden md:flex items-center gap-4 py-2 h-10">
            <ButtonGroup className="">
              <Button
                title="Desktop"
                onClick={desktopPanel}
                variant={"outline"}
                size="icon"
              >
                <Monitor />
              </Button>
              <Button
                title="Tablet"
                onClick={tabletPanel}
                variant={"outline"}
                size="icon"
              >
                <Tablet />
              </Button>
              <Button
                title="Phone"
                onClick={phonePanel}
                variant={"outline"}
                size="icon"
              >
                <Smartphone />
              </Button>
              <Button
                title="Open in new tab"
                variant={"outline"}
                size="icon"
                className="relative"
              >
                <Link
                  href={`/preview/${block.id}`}
                  target="_blank"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Fullscreen />
                </Link>
              </Button>
            </ButtonGroup>
            <Separator orientation="vertical" className="hidden md:block" />
            <ButtonGroup>
              <Button
                disabled={hasCopiedText}
                onClick={() => (
                  copyToClipboard(block.code), setHasCopiedText(true)
                )}
                variant="default"
                className="hidden md:flex"
              >
                Copy Code
                {hasCopiedText ? <Check /> : <Copy />}
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <TabsContent value="preview">
          <Card className="shadow-none p-0 overflow-hidden z-10 bg-transparent border-none">
            <CardContent className="p-0 relative h-[700px] md:h-[800px]">
              <div className="absolute border border-muted rounded-xl bg-muted/10 inset-0 right-4 bg-[radial-gradient(#d4d4d4_1px,transparent_1px)] bg-size-[24px_24px] dark:bg-[radial-gradient(#404040_1px,transparent_1px)]"></div>
              <ResizablePanelGroup
                direction="horizontal"
                className="relative z-10 drop-shadow-red-500"
              >
                <ResizablePanel
                  ref={resizablePanelRef}
                  className="relative aspect-[4/2.5] rounded-xl border bg-background md:aspect-auto"
                  defaultSize={100}
                  minSize={30}
                >
                  <iframe
                    src={block.path}
                    className="relative h-full z-20 w-full bg-background md:block"
                  />
                </ResizablePanel>
                <ResizableHandle className="relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-1.5 after:-translate-y-1/2 after:-translate-x-px after:rounded-full after:bg-border after:transition-all md:block hover:after:h-10 hover:after:w-2" />
                <ResizablePanel
                  defaultSize={0}
                  minSize={0}
                  className="test shadow-red-500"
                />
              </ResizablePanelGroup>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card className="shadow-none p-0 z-10 border-none bg-white dark:bg-[#101010] overflow-hidden">
            <CardContent className="p-0 relative border rounded-xl h-[800px]">
              <div
                className="overflow-y-auto rounded-xl p-4 h-full text-xs md:text-base"
                dangerouslySetInnerHTML={{ __html: block.highlightedCode }}
                style={{ scrollbarWidth: "thin" }}
              />
              <div className="absolute top-2 right-4 hidden md:block">
                <Button
                  disabled={hasCopiedText}
                  onClick={() => (
                    copyToClipboard(block.code), setHasCopiedText(true)
                  )}
                  variant="outline"
                  size="icon-sm"
                >
                  {hasCopiedText ? <Check /> : <Copy />}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
