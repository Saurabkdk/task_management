import { auth } from "@/auth";
import TaskCard from "@/components/TaskCard";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";


export default async function Home() {

  const session = await auth();

  if (!session) redirect('/login');

  const user = await prisma.user.findUnique({
    where:
    {
      email: `${session?.user?.email}`
    },
    include: {
      tasks: true
    }
  });

  return (
    <div className="px-5 py-10 flex flex-col">
      <div className="text-3xl">
        Your tasks
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-3 gap-10">
          {user?.tasks && (
            user.tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
