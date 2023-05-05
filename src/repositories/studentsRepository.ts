import { PrismaClient, Student } from '@prisma/client';
import prisma from '@/config/database';

export async function getStudents(): Promise<Student[]> {
	return await prisma.student.findMany();
}

export async function getStudentById(id: number): Promise<Student> {
	return await prisma.student.findUnique({
		where: {
			id,
		}
	});
}

export async function postStudents(name: string): Promise<Student> {
	return await prisma.student.create({
		data: {
			name,
		}
	});
}