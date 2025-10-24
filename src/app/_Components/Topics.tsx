import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Divide, FileText, LockKeyhole } from 'lucide-react';
import Quiz from './Quiz';

export default function Topics() {
  const courseIntroArr: string[] = [
    "Introduction",
    "Course Overview",
    "Course Exercise / Reference Files",
    "Code Editor Installation (Optional if you have one)",
    "Embedding PHP in HTML",
  ];

  return (
    <div className="w-full p-6 flex justify-center">
      <div className="w-full max-w-lg pt-7">
        <Accordion
          type="single"
          collapsible
          className="w-full  p-3 rounded-sm border flex flex-col gap-2"
          defaultValue="item-1"
        >
          {/* Accordion item 1 */}
          <AccordionItem value="item-1" className="border">
            {/* Accordion Header */}
            <AccordionTrigger className="border rounded-none px-4 pt-4 text-xl font-semibold text-gray-800">
              <div className="p-2 ">Course Introduction</div>
            </AccordionTrigger>

            {/* Accordion Content */}
            <AccordionContent className=" flex flex-col gap-4 text-balance">
              {/* Regular course items */}

              {courseIntroArr.map((item, index) => (
                <div key={index}>
                  {index == 0 && (
                    <div className=" ">
                      <div className='translate-x-[63%]'>
                        <div className="-translate-x-[25%] rounded-full p-2 text-blue-800 border-4 border-gray-300 text-sm inline-block">
                          You
                        </div>
                      </div>
                      <div className="border"></div>
                      <div className="translate-x-[63%] text-blue-800 text-sm ">
                        63%
                      </div>
                    </div>
                  )}
                  <div className="border-b flex justify-between items-center text-muted-foreground p-2">
                    <div className="flex items-center gap-2">
                      <FileText />
                      <span>{item}</span>
                    </div>
                    <LockKeyhole />
                  </div>
                </div>
              ))}

              {/* Dialog Item */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="secondary"
                    className="bg-transparent hover:cursor-pointer hover:bg-amber-50 px-2 py-9 w-full"
                  >
                    <div className="flex justify-between items-center gap-2  py-4 w-full">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <FileText className="w-full! h-full! text-xl!" />
                        </div>
                        <span>Course Overview</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="bg-green-100 text-green-600 px-2 py-1 rounded-sm text-sm">
                          0 Question
                        </div>
                        <div className="bg-red-100 text-red-600 px-2 py-1 rounded-sm text-sm">
                          10 Minutes
                        </div>
                      </div>
                    </div>
                  </Button>
                </DialogTrigger>

                <DialogContent>
                  <DialogContent>
                    <iframe
                      src="https://drive.google.com/file/d/1Ta9QxaB6qbMyXP8sS3QNHzPtvEDYqfKa/preview"
                      width="100%"
                      height="500px"
                      className="border rounded-md"
                    />
                  </DialogContent>

                  <DialogTitle></DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogContent>
              </Dialog>
              {/* Dialog Item 02 */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="secondary"
                    className="bg-transparent hover:cursor-pointer hover:bg-amber-50 px-2 py-9 w-full"
                  >
                    <div className="flex justify-between items-center gap-2  py-4 w-full">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <FileText className="w-full! h-full! text-xl!" />
                        </div>
                        <span>Embedding PHP in HTML</span>
                      </div>
                    </div>
                  </Button>
                </DialogTrigger>

                <DialogContent>
                  <DialogContent className="p-0 overflow-hidden max-w-[calc(100vw-2rem)] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                    <Quiz />
                  </DialogContent>

                  <DialogTitle></DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogContent>
              </Dialog>
            </AccordionContent>
          </AccordionItem>

          {/* Accordion item 2 */}
          <AccordionItem value="item-2" className="border">
            {/* Accordion Header */}
            <AccordionTrigger className="border rounded-none px-4 pt-4 text-xl font-semibold text-gray-800">
              <div className="p-2">Javascript language basics</div>
            </AccordionTrigger>

            {/* Accordion Content */}
            <AccordionContent className=" flex flex-col gap-4 text-balance">
              {/* Regular course items */}

              {courseIntroArr.map((item, index) => (
                <div key={index}>
                  {index == 0 && (
                    <div className=" ">
                      <div className='translate-x-[63%]'>
                        <div className="-translate-x-[25%] rounded-full p-2 text-blue-800 border-4 border-gray-300 text-sm inline-block">
                          You
                        </div>
                      </div>
                      <div className="border"></div>
                      <div className="translate-x-[63%] text-blue-800 text-sm ">
                        63%
                      </div>
                    </div>
                  )}
                  <div className="border-b flex justify-between items-center text-muted-foreground p-2">
                    <div className="flex items-center gap-2">
                      <FileText />
                      <span>{item}</span>
                    </div>
                    <LockKeyhole />
                  </div>
                </div>
              ))}

              {/* Dialog Item */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="secondary"
                    className="bg-transparent hover:cursor-pointer hover:bg-amber-50 px-2 py-9 w-full"
                  >
                    <div className="flex justify-between items-center gap-2  py-4 w-full">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <FileText className="w-full! h-full! text-xl!" />
                        </div>
                        <span>Course Overview</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="bg-green-100 text-green-600 px-2 py-1 rounded-sm text-sm">
                          0 Question
                        </div>
                        <div className="bg-red-100 text-red-600 px-2 py-1 rounded-sm text-sm">
                          10 Minutes
                        </div>
                      </div>
                    </div>
                  </Button>
                </DialogTrigger>

                <DialogContent>
                  <DialogContent>
                    <iframe
                      src="https://drive.google.com/file/d/1Ta9QxaB6qbMyXP8sS3QNHzPtvEDYqfKa/preview"
                      width="100%"
                      height="500px"
                      className="border rounded-md"
                    />
                  </DialogContent>

                  <DialogTitle></DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogContent>
              </Dialog>
              {/* Dialog Item 02 */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="secondary"
                    className="bg-transparent hover:cursor-pointer hover:bg-amber-50 px-2 py-9 w-full"
                  >
                    <div className="flex justify-between items-center gap-2  py-4 w-full">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <FileText className="w-full! h-full! text-xl!" />
                        </div>
                        <span>Embedding PHP in HTML</span>
                      </div>
                    </div>
                  </Button>
                </DialogTrigger>

                <DialogContent>
                  <DialogContent className="p-0 overflow-hidden max-w-[calc(100vw-2rem)] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                    <Quiz />
                  </DialogContent>

                  <DialogTitle></DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogContent>
              </Dialog>
            </AccordionContent>
          </AccordionItem>

          {/* Accordion item 3 */}
          <AccordionItem value="item-3" className="border">
            {/* Accordion Header */}
            <AccordionTrigger className="border rounded-none px-4 pt-4 text-xl font-semibold text-gray-800">
              <div className="p-2">Components and data building</div>
            </AccordionTrigger>

            {/* Accordion Content */}
            <AccordionContent className=" flex flex-col gap-4 text-balance">
              {/* Regular course items */}

              {courseIntroArr.map((item, index) => (
                <div key={index}>
                  {index == 0 && (
                    <div className=" ">
                      <div className='translate-x-[63%]'>
                        <div className="-translate-x-[25%] rounded-full p-2 text-blue-800 border-4 border-gray-300 text-sm inline-block">
                          You
                        </div>
                      </div>
                      <div className="border"></div>
                      <div className="translate-x-[63%] text-blue-800 text-sm ">
                        63%
                      </div>
                    </div>
                  )}
                  <div className="border-b flex justify-between items-center text-muted-foreground p-2">
                    <div className="flex items-center gap-2">
                      <FileText />
                      <span>{item}</span>
                    </div>
                    <LockKeyhole />
                  </div>
                </div>
              ))}

              {/* Dialog Item */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="secondary"
                    className="bg-transparent hover:cursor-pointer hover:bg-amber-50 px-2 py-9 w-full"
                  >
                    <div className="flex justify-between items-center gap-2  py-4 w-full">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <FileText className="w-full! h-full! text-xl!" />
                        </div>
                        <span>Course Overview</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="bg-green-100 text-green-600 px-2 py-1 rounded-sm text-sm">
                          0 Question
                        </div>
                        <div className="bg-red-100 text-red-600 px-2 py-1 rounded-sm text-sm">
                          10 Minutes
                        </div>
                      </div>
                    </div>
                  </Button>
                </DialogTrigger>

                <DialogContent>
                  <DialogContent>
                    <iframe
                      src="https://drive.google.com/file/d/1Ta9QxaB6qbMyXP8sS3QNHzPtvEDYqfKa/preview"
                      width="100%"
                      height="500px"
                      className="border rounded-md"
                    />
                  </DialogContent>

                  <DialogTitle></DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogContent>
              </Dialog>
              {/* Dialog Item 02 */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="secondary"
                    className="bg-transparent hover:cursor-pointer hover:bg-amber-50 px-2 py-9 w-full"
                  >
                    <div className="flex justify-between items-center gap-2  py-4 w-full">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <FileText className="w-full! h-full! text-xl!" />
                        </div>
                        <span>Embedding PHP in HTML</span>
                      </div>
                    </div>
                  </Button>
                </DialogTrigger>

                <DialogContent>
                  <DialogContent className="p-0 overflow-hidden max-w-[calc(100vw-2rem)] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                    <Quiz />
                  </DialogContent>

                  <DialogTitle></DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogContent>
              </Dialog>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
