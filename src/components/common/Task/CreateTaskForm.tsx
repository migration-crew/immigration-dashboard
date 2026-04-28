"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/upImmigrationButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { DatePicker } from "@/components/ui/DatePicker";

const formSchema = z.object({
  title: z.string({ required_error: "Title is required" }),
  dueDate: z
    .string({ required_error: "Due date is required" })
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    }),
  description: z.string({ required_error: "Description is required" }),
  attachment: z.string({ required_error: "Attachment is required" }),
});

export function CreateTaskForm() {
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
        className="w-[700px] flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} className="bg-primary-white w-[300px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dueDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Due Date</FormLabel>
              <FormControl>
                <DatePicker {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} className="bg-primary-white w-[700px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="attachment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Attachment</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-primary-white w-[300px]"
                  type="file"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-[200px] flex self-end">
          Create
        </Button>
      </form>
    </Form>
  );
}
