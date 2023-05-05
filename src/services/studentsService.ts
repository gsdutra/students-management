import * as studentsRepository from '@/repositories/studentsRepository';
import { Student } from '@prisma/client';

export async function getStudents(): Promise<Student[]> {

	const response = await studentsRepository.getStudents();

	if(!response) throw {message: 'No students found', statusCode: 404};

	return response;
}

export async function getStudentById(id: number): Promise<Student> {
	const response = await studentsRepository.getStudentById(id);

	if(!response) throw {message: 'No student found', statusCode: 404};

	return response;
}	

export async function postStudents(name: string): Promise<Student> {

	const studentAlreadyExists = await studentsRepository.getStudentByName(name);

	if(studentAlreadyExists) throw {message: 'A student with this name already exists', statusCode: 409};

	return await studentsRepository.postStudents(name);
}