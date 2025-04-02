"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Caption } from "@/components/common/text/Caption";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/upImmigrationButton";
import { Calendar } from "@/components/ui/upImmigrationCalendar";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

import { Input } from "@/components/ui/input";

const formSchema = z
  .object({
    form: z
      .string({ required_error: "*required" })
      .min(1, { message: "*required" }),
    document: z
      .string({ required_error: "*required" })
      .min(1, { message: "*required" }),
    date: z.date({ required_error: "*required" }),
  })
  .required();

export function NewDocForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center"
      >
        <Card className="flex justify-between px-6 py-4 rounded-sm w-full">
          <FormField
            control={form.control}
            name="form"
            render={({ field }) => (
              <FormItem className="w-[90px]">
                <FormControl>
                  <Input placeholder="FORM" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="document"
            render={({ field }) => (
              <FormItem className="w-[480px]">
                <FormControl>
                  <Input placeholder="DOCUMENT" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="w-[180px]">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <Caption>
                          {field.value ? (
                            format(field.value, "d MMM y")
                          ) : (
                            <span>DATE</span>
                          )}
                        </Caption>
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        <Button type="submit" className="w-[148px] h-[33px] ml-5">Add New Line</Button>
        </Card>
      </form>
    </Form>
  );
}
