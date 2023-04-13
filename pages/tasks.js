import taskStyles from '../styles/Task.module.css'
import Link from 'next/link'

const tasks = ({tasks}) => {
  const { data } = tasks
  return (
    <div>
          {data.map((task) => (
      <h3 className={taskStyles.card} key={task.id}><p>{task.id}.</p><br />{task.description}
      <br /><p>{task.created_at}</p><br/>
      <Link href="/task/[id]" as={`/task/${task.id}`}>More info is comming soon</Link>

      </h3>
    ))}
</div>
  )
}

export default tasks

export const getStaticProps = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/v1/tasks");
  const tasks = await res.json();

  return {
    props:{ 
       tasks
    },
  }
}
