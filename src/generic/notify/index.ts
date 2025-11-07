import toast from "react-hot-toast/headless";

type NotifyType = "login" | "login_error";

export const notificationApi = () => {
  const notify = (type: NotifyType) => {
    switch (type) {
      case "login":
        return toast.success("Welcome to dashboard !");
      case "login_error":
        return toast.error("Email or password wrong !");
    }
  };

  return notify;
};