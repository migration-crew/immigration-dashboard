"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/upImmigrationButton";
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

export function NewDocForm2() {
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
              <FormItem className="w-[453px]">
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
              <FormItem className="w-[91px]">
                <FormControl>
                  <Input placeholder="DATE" {...field} />
                </FormControl>
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
