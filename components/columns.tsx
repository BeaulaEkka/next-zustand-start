import Column from './column'
import { NewTodoDialogue } from './ui/NewTodoDialogue'

export default function Columns() {
  return (
    <div>
      <NewTodoDialogue />
      <section className='grid lg:grid-cols-3 md:grid-cols-2 mt-10 gap-6 border border-red-500 lg:gap-12'>
        <Column title='Todo' status='TODO' />
        <Column title='In Progress' status='IN_PROGRESS' />
        <Column title='Done' status='DONE' />
      </section>
    </div>
  )
}
