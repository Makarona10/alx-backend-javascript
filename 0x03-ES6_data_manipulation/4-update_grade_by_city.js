export default function updateStudentGradeByCity(students, city, grades) {
  return !Array.isArray(students) ? [] : students.filter((s) => (s.location === city))
    .map((s) => {
      const grad = grades.filter((g) => g.studentId === s.id);
      if (grad.length) {
        return { ...s, grade: grad[0].grade };
      }
      return { ...s, grade: 'N/A' };
    });
}
