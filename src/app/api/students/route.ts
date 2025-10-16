import { createStudentDb, getStudentsDb } from "@/db/studentDb";
import CreateStudent from "@/api/CreateStudentDto";

export async function GET(): Promise<Response> {
  const students = await getStudentsDb();

  return new Response(JSON.stringify(students), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function POST(request: Request): Promise<Response> {
  const dto: CreateStudent = await request.json();
  const student = await createStudentDb(dto);

  return new Response(JSON.stringify(student), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
