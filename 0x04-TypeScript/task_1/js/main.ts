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
