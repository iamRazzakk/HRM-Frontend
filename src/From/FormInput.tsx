import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { z } from "zod";

type Field =
  | {
      name: string;
      label: string;
      type: "text" | "email" | "number" | "tel" | "file";
      placeholder?: string;
    }
  | {
      name: string;
      label: string;
      type: "select";
      options: string[];
    };

type Props<T> = {
  schema: z.ZodType<T>;
  fields: Field[];
  onSubmit: (data: T) => void;
  defaultValues?: Partial<T>;
  title?: string;
};

export function FormInput<T>({
  schema,
  fields,
  onSubmit,
  defaultValues = {},
  title = "Form Title",
}: Props<T>) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const handleChange = (name: string, value: string) => {
    setValue(name as keyof T, value as any);
  };

  const submitHandler: SubmitHandler<T> = (data) => {
    onSubmit(data);
  };

  return (
    <Card className="max-w-3xl mx-auto mt-10 p-6 shadow-2xl rounded-3xl border border-gray-200">
      <CardHeader className="text-center">
        <CardTitle className="text-4xl font-extrabold text-black">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {fields.map((field) => (
            <div key={field.name} className="flex flex-col gap-1">
              <Label
                htmlFor={field.name}
                className="text-md text-gray-700 font-medium"
              >
                {field.label}
              </Label>

              {field.type === "select" ? (
                <Select
                  onValueChange={(value) => handleChange(field.name, value)}
                >
                  <SelectTrigger className="rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500">
                    <SelectValue placeholder={`Select ${field.label}`} />
                  </SelectTrigger>
                  <SelectContent>
                    {field.options.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  type={field.type}
                  id={field.name}
                  placeholder={field.placeholder}
                  {...register(field.name as any)}
                  className="rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              )}

              {errors[field.name as keyof T] && (
                <span className="text-sm text-red-500">
                  {(errors[field.name as keyof T] as any)?.message}
                </span>
              )}
            </div>
          ))}

          <div className="md:col-span-2">
            <Button
              type="submit"
              className="w-full py-3 text-lg bg-gradient-to-r bg-black text-white"
            >
              Submit
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
