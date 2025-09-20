import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        { id: 1, name: 'Alice', age: 21 },
        { id: 2, name: 'Bob', age: 22 },
        { id: 3, name: 'Charlie', age: 23 }
    ]

    // GET
    getAllStudents() {
        return this.students;
    }

    // GET
    getStudentById(id: number) {
        const students = this.students.find(stu => stu.id === id);
        if (!students) {
            throw new NotFoundException('Student not found');
        }
        return students;
    }

    // POST
    createStudent(data: { name: string, age: number }) {
        const newStudent = {
            id: Date.now(),
            ...data
        }
        this.students.push(newStudent);
        return newStudent;
    }

    // PUT
    updateStudent(id: number, data: { name: string, age: number }) {
        const index = this.students.findIndex(stu => stu.id === id);
        if (index === -1) {
            throw new NotFoundException('Student not found');
        }
        this.students[index] = { id, ...data };
        return this.students[index];
    }

    // PATCH
    patchStudent(id: number, data: Partial<{ name: string, age: number }>) {
        const student = this.getStudentById(id);
        Object.assign(student, data);
        return student;
    }

    // DELETE
    deleteStudent(id: number) {
        const index = this.students.findIndex(stu => stu.id === id);
        if (index === -1) {
            throw new NotFoundException('Student not found');
        }
        const deletedStudent = this.students.splice(index, 1);
        return deletedStudent[0];
    }

}
