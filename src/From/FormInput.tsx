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
import { Card, CardContent } from "@/components/ui/card";
import { z } from "zod";
import { useState } from "react";

type Field =
  | {
      name: string;
      label: string;
      type: "text" | "email" | "number" | "tel" | "file" | "select";
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
  wrapperClassName?: string; // 🔁 reusable styles
  fieldClassName?: string; // class name for each field
};

export function FormInput<T>({
  schema,
  fields,
  onSubmit,
  defaultValues = {},
  title = "Form Title",
  wrapperClassName = "",
  fieldClassName = "",
}: Props<T>) {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setIsSubmitting(true);
    onSubmit(data);
    setIsSubmitting(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card
        className={`max-w-3xl mx-auto p-6 shadow-2xl rounded-3xl border border-gray-200 ${wrapperClassName}`}
      >
        <h1 className={`${fieldClassName}`}>{title}</h1>
        <CardContent>
          <form
            onSubmit={handleSubmit(() => submitHandler())}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 "
          >
            {fields.map((field) => (
              <div key={field.name} className={`flex flex-col gap-1`}>
                <Label
                  htmlFor={field.name}
                  className="text-md text-gray-700 font-medium"
                >
                  {field.label}
                </Label>

                {field.type === "select" ? (
                  <Select
                    onValueChange={(value) => handleChange(field.name, value)}
                    className="rounded-xl border-gray-300 focus:ring-2 focus:ring-black border "
                  >
                    <SelectTrigger className=" w-full">
                      <SelectValue placeholder={`Select ${field.label}`} />
                    </SelectTrigger>
                    <SelectContent className="">
                      {field?.options?.map((option) => (
                        <SelectItem className="" key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : field.type === "file" ? (
                  <Input
                    type="file"
                    id={field.name}
                    {...register(field.name as any)}
                    className="rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <Input
                    type={field.type}
                    id={field.name}
                    placeholder={field.placeholder}
                    {...register(field.name as any)}
                    className="rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500 p-5"
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
                className="w-full py-5 text-lg bg-gradient-to-r from-black to-gray-800 text-white hover:opacity-90 transition cursor-pointer"
                disabled={isSubmitting} // Disable the button while submitting
              >
                {isSubmitting ? "Submitting..." : "Submit"}{" "}
                {/* Change button text */}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
