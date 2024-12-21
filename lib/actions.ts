// 'use server'

// export async function createTodo(formData: FormData) {
//   const title = formData.get('title') as string
//   const description = formData.get('description') as string

//   const newTodo = {
//     id: Date.now(),
//     title,
//     description,
//     completed: false
//   }

//   return { message: 'Todo created successfully', todo: newTodo }
// }

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
