'use server';

import { auth } from "@/auth";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createTask = async (formData: FormData) => {
    try {
        const session = await auth();
        const status = formData.get('status') as string;
        await prisma.tasks.create({
            data: {
                title: formData.get('title') as string,
                description: formData.get('description') as string,
                status: status == 'C' ? true : false,
                user: {
                    connectOrCreate: {
                        where: {
                            email: session?.user?.email as string
                        },
                        create: {
                            email: session?.user?.email as string,
                            name: session?.user?.name as string
                        }
                    }
                }
            }
        });
        revalidatePath('/');
    } catch (error) {
        console.log('Could not create task', error);
    }
}

export const updateTask = async (formData: FormData) => {
    try {
        const session = await auth();
        await prisma.tasks.update({
            where: {
                id: formData.get('id') as string
            },
            data: {
                title: formData.get('title') as string,
                description: formData.get('description') as string,
                user: {
                    connectOrCreate: {
                        where: {
                            email: session?.user?.email as string
                        },
                        create: {
                            email: session?.user?.email as string,
                            name: session?.user?.name as string
                        }
                    }
                }
            }
        });
        redirect('/');
    } catch (error) {
        console.log('Could not create task', error);
    }
}

export const updateStatus = async (id: string) => {
    const data = await prisma.tasks.findUnique({
        where:{
            id
        }
    });

    const status = !data?.status;

    await prisma.tasks.update({
        where:{
            id: id
        },
        data: {
            status: status
        }
    });

}

export const deleteTask = async (id: string) => {
    await prisma.tasks.delete({
        where:{
            id
        }
    })
}