// 'use client'

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
// import { Textarea } from './textarea'
// import { useTaskStore } from '@/lib/store'
// import { useState } from 'react'
// import { createTodo } from '@/lib/actions'

// export function NewTodoDialogue() {
//   const addTask = useTaskStore(state => state.addTask)
//   const [open, setOpen] = useState(false)

//   async function handleSubmit(formData: FormData) {
//     const title = formData.get('title') as string
//     const description = formData.get('description') as string

//     addTask(title, description)
//     setOpen(false)
//   }

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
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
//         <form action={handleSubmit}>
//           <div className='grid gap-4 py-4'>
//             <div className='grid grid-cols-4 items-center gap-4'>
//               <Label htmlFor='title' className='text-right'>
//                 Title
//               </Label>
//               <Input id='title' name='title' className='col-span-3' required />
//             </div>

//             <div className='grid grid-cols-4 items-center gap-4'>
//               <Label htmlFor='description' className='text-right'>
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
//           <DialogFooter>
//             <Button type='submit'>Save changes</Button>
//           </DialogFooter>
//         </form>
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
import { createTodo } from '@/lib/actions'

export function NewTodoDialogue() {
  const addTask = useTaskStore(state => state.addTask)
  const [open, setOpen] = useState(false)

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
        <form
          action={async formData => {
            const result = await createTodo(formData)
            if (result.success) {
              addTask(result.title, result.description)
              setOpen(false)
            }
          }}
        >
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