"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"

import "./SignUpForm.css"
import Link from "next/link"
import { formSchema } from "@/lib/zod"

function SignUpForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    // ☝️ infiero el tipo de el formSchema con z.infer
    resolver: zodResolver(formSchema), // 👈 resolver
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })
  return (
    <Form {...form}>
      <form
        action=""
        className="max-w-96 flex flex-col bg-white p-4 rounded-lg shadow-lg gap-2"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h1 className="w-full text-center text-2xl font-medium">
          Crear Cuenta
        </h1>
        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    className="input-SignUpForm"
                    placeholder="juan"
                    {...field}
                  />
                </FormControl>
                <FormDescription>This is your Name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    className="input-SignUpForm"
                    placeholder="perez"
                    {...field}
                  />
                </FormControl>
                <FormDescription>This is your Last Name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="input-SignUpForm"
                  placeholder="juanperez@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormDescription>This is your Email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    className="input-SignUpForm"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormDescription>This is your password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    className="input-SignUpForm"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Confirm your password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
        <div className="w-full text-center">
          ya tienes una cuenta?{" "}
          <Link className="text-secondary-500 hover:underline" href="signIn">
            Sign In
          </Link>
        </div>
        <div className="flex w-full text-center justify-center items-center gap-3">
          <hr className="border-neutral-500 w-full" />
          or
          <hr className="border-neutral-500 w-full" />
        </div>
        <Button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full bg-secondary-500"
        >
          Sign Up with Google
        </Button>
      </form>
    </Form>
  )
}

function onSubmit(data: z.infer<typeof formSchema>) {
  console.log(data)
}
export default SignUpForm
