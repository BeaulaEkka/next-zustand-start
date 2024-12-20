// import { Button } from '@/components/ui/button'
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger
// } from '@/components/ui/dialog'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import Form from 'next/form'
// import { Textarea } from './textarea'
// import { useTaskStore } from '@/lib/store'

// export function NewTodoDialogue() {
//   const addTask = useTaskStore(state => state.addTask)

//   const handleSubmit = async () => {
//     'use server'
//     const task = await todoForm.getValues()
//   }
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button variant='secondary'>+ Add New Todo</Button>
//       </DialogTrigger>
//       <DialogContent className='sm:max-w-[425px]'>
//         <DialogHeader>
//           <DialogTitle>Add New Todo</DialogTitle>
//           <DialogDescription>
//             What do you want to get done today.
//           </DialogDescription>
//         </DialogHeader>
//         <Form
//           action={handleSubmit}
//           id='todoForm'
//           name='todoForm'
//           className='grid gap-4 py-4'
//         >
//           <div className='grid gap-4 py-4'>
//             <div className='grid grid-cols-4 items-center gap-4'>
//               <Label htmlFor='name' className='text-right'>
//                 Title
//               </Label>
//               <Input id='title' name='title' className='col-span-3' />
//             </div>

//             <div className='grid grid-cols-4 items-center gap-4'>
//               <Label htmlFor='username' className='text-right'>
//                 Description
//               </Label>
//               <Textarea
//                 id='description'
//                 name='description'
//                 placeholder='Enter description'
//                 className='col-span-3'
//               />
//             </div>
//           </div>
//         </Form>
//         <DialogFooter>
//           <DialogTrigger asChild>
//             <Button type='submit' form='todoForm'>
//               Save changes
//             </Button>
//           </DialogTrigger>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   )
// }

'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from './textarea'
import { useTaskStore } from '@/lib/store'
import { useState } from 'react'

export function NewTodoDialogue() {
  const addTask = useTaskStore(state => state.addTask)
  const [open, setOpen] = useState(false)

  async function handleSubmit(formData: FormData) {
    const title = String(formData.get('title'))
    const description = String(formData.get('description'))

    addTask(title, description)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='secondary'>+ Add New Todo</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add New Todo</DialogTitle>
          <DialogDescription>
            What do you want to get done today.
          </DialogDescription>
        </DialogHeader>
        <form action={handleSubmit}>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='title' className='text-right'>
                Title
              </Label>
              <Input id='title' name='title' className='col-span-3' required />
            </div>

            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='description' className='text-right'>
                Description
              </Label>
              <Textarea
                id='description'
                name='description'
                placeholder='Enter description'
                className='col-span-3'
              />
            </div>
          </div>
          <DialogFooter>
            <Button type='submit'>Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
