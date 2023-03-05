import { Department } from "./department";

export class Student {
  constructor(public _id: number, public name: string, public department: Department) {
  }
}
