'use client'
import { useTaskStore } from '@/lib/store'
import Task from './task'
import { useMemo } from 'react'

const tasks = [
  {
    id: '1234',
    title: 'Our first task',
    description: 'Some description',
    status: 'TODO'
  },

  {
    id: '4545',
    title: 'Our second task',
    description: 'Some description',
    status: 'IN_PROGRESS'
  },

  {
    id: '2020',
    title: 'Our third task',
    description: 'Some description',
    status: 'DONE'
  }
]

export default function Column({
  title,
  status
}: {
  title: string
  status: string
}) {
  const tasks = useTaskStore(state => state.tasks)
  const filteredTasks = useMemo(
    () => tasks.filter(task => task.status === status),
    [tasks, status]
  )

  return (
    <section className='h-[600px] flex-1'>
      <h2 className='ml-1 font-serif text-2xl font-semibold'>{title}</h2>

      <div className='mt-3.5 h-full w-full flex-1 rounded-xl bg-gray-700/50 p-4'>
        <div className='flex flex-col gap-4'>
          {filteredTasks.map(task => (
            <Task key={task.id} {...task} />
          ))}
        </div>
      </div>
    </section>
  )
}
