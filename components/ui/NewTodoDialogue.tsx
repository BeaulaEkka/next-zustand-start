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
import Form from 'next/form'
import { Textarea } from './textarea'
import { useTaskStore } from '@/lib/store'

export function NewTodoDialogue() {
  const addTask = useTaskStore(state => state.addTask)

  const form = Form({
    id: 'todoForm',
    initialValues: {
      title: '',
      description: ''
    }
  })

  const handleSubmit = async () => {
    'use server'
    addTask(data)
  }

  return (
    <Dialog>
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
        <form {...form}>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='name' className='text-right'>
                Title
              </Label>
              <Input
                id='title'
                name='title'
                className='col-span-3'
                {...form.$('title')}
              />
            </div>

            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='username' className='text-right'>
                Description
              </Label>
              <Textarea
                id='description'
                name='description'
                placeholder='Enter description'
                className='col-span-3'
                {...form.$('description')}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogTrigger asChild>
              <Button type='submit' form='todoForm'>
                Save changes
              </Button>
            </DialogTrigger>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
