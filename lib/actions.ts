"use server";

type TodoResponse = {
  success: boolean;
  title: string;
  description: string;
};

export async function createTodo(formData: FormData): Promise<TodoResponse> {
  const title = formData.get("title");
  const description = formData.get("description");

  if (!title || typeof title !== "string") {
    return {
      success: false,
      title: "",
      description: "",
    };
  }

  return {
    success: true,
    title,
    description: description?.toString() || "",
  };
}
