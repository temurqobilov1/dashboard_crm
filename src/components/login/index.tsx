import { Button, Form, Input } from "antd";
import type { LoginFormType } from "../../@types";
import { useLoginMutation } from "../../hooks/useQuery/useQueryMutation/intex";
import { Loader } from "lucide-react";

const Login = () => {
  const { mutate, isPending } = useLoginMutation();
  const [form] = Form.useForm();
  const login = (e: LoginFormType) => {
    mutate(e);
    form.resetFields();
  };

  return (
    <div className="w-[380px] mx-auto flex items-center justify-center h-screen flex-col">
      <h1 className="mb-5 text-2xl text-blue-600 font-bold">Welcome to CRM</h1>

      <Form form={form} onFinish={login} className="w-full">
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please enter your email !" }]}
        >
          <Input type="email" placeholder="Please enter your email..." />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password !" }]}
        >
          <Input type="password" placeholder="********" />
        </Form.Item>

        <Button type="primary" htmlType="submit" className="w-full">
          {isPending ? <Loader size={18} className="animate-spin" /> : "Login"}
        </Button>
      </Form>
    </div>
  );
};

export default Login;
