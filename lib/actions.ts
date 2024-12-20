"use server";

export async function createTodo(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  const newTodo = {
    id: Date.now(),
    title,
    description,
    completed: false,
  };

  return { message: "Todo created successfully", todo: newTodo };
}
