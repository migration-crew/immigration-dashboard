"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/upImmigrationButton";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const formSchema = z.object({
  form: z.string().min(2, {
    message: "at least 2 characters.",
  }),
  document: z.string().min(2, {
    message: "at least 2 characters.",
  }),
  date: z.string().min(2, {
    message: "at least 2 characters.",
  }),
});

export function NewDocForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      form: "",
      document: "",
      date: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center">
      <Card className="flex w-[800px] justify-between mr-5  px-8 py-4 rounded-sm">
        <FormField
          control={form.control}
          name="form"
          render={({ field }) => (
            <FormItem className="w-[85px]">
              <FormLabel>Form</FormLabel>
              <FormControl>
                <Input placeholder="FORM" {...field} />
              </FormControl>
              <FormDescription>
                This is form
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="document"
          render={({ field }) => (
              <FormItem className="w-[453px]">
                <FormLabel>Document</FormLabel>
                <FormControl>
                  <Input placeholder="DOCUMENT" {...field} />
                </FormControl>
                <FormDescription>
                This is document discription
              </FormDescription>
                <FormMessage />
              </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
              <FormItem className="w-[91px]">
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Input placeholder="DATE" {...field} />
                </FormControl>
                <FormDescription>
                This is due date
              </FormDescription>
                <FormMessage />
              </FormItem>
          )}
        />
        </Card>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
