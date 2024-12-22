import Column from './column'
import { NewTodoDialogue } from './ui/NewTodoDialogue'


export default function Columns() {
  return (
    <div>
      <NewTodoDialogue />
      <section className='mt-10 flex flex-wrap gap-6 lg:gap-12 border border-red-500'>
        <Column title='Todo' status='TODO' />
        <Column title='In Progress' status='IN_PROGRESS' />
        <Column title='Done' status='DONE' />
      </section>
    </div>
  )
}
