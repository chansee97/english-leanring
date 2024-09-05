import { FC } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import type { OperationType } from "."

const formSchema = z.object({
  username: z.string().min(2, {
    message: "用户名至少2个字符",
  }).max(50),
  password: z.string().min(6, {
    message: "密码至少6个字符",
  }).max(50),
})

function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>邮箱</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                密码
              </FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full" type="submit">登录</Button>
        <Separator />
        <Button variant="outline" className="w-full">
          <span className="icon-[tabler--brand-google-filled] mr-2 text-lg"></span>
          使用Google账户登录
        </Button>
      </form>
    </Form>
  )
}

interface Props {
  onChange?: (type: OperationType ) => void;
}
export const SignIn: FC<Props> = ({ onChange }) => {
  
  return (
    <Card className="w-[370px]">
      <CardHeader className="p-6">
        <CardTitle>登录</CardTitle>
        <CardDescription>登录你的账户</CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <ProfileForm />
      </CardContent>
      <CardFooter >
        <div className="text-center text-sm w-full">
          没有账户? <a className="underline cursor-pointer" onClick={() =>onChange?.('SignUp')}>注册</a>
        </div>
      </CardFooter>
    </Card>
  )
}