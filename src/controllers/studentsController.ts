import * as studentService from '@/services/studentsService';
import { Request, Response } from 'express';

export async function getStudents (req: Request, res: Response) {
	try {
		const students = await studentService.getStudents();
		return res.status(200).send(students);
	} catch (error) {
		return res.status(error.statusCode).send(error.message);
	}
}

export async function getStudentById (req: Request, res: Response) {
	try {
		const id = Number(req.params.id);
		const student = await studentService.getStudentById(id);
		return res.status(200).send(student);
	} catch (error) {
		return res.status(error.statusCode).send(error.message);
	}
}

export async function postStudents (req: Request, res: Response) {
	try {
		const { name } = req.body;
		const student = await studentService.postStudents(name);
		return res.status(201).send(student);
	} catch (error) {
		return res.status(error.statusCode).send(error.message);
	}
}