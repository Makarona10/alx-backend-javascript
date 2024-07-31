interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [additionalProp: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number,
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string,
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
}

interface TeacherName {
  firstName: string;
  lastName: string;
}

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInterface{
  private firstName: string;
  private lastName: string;
  constructor(teacher: TeacherName) {
    this.firstName = teacher.firstName;
    this.lastName = teacher.lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }
  displayName(): string {
    return this.firstName;
  }
}