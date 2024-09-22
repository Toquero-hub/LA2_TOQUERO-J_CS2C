// Student class to hold student information
class Student {
  constructor(firstName, middleName, lastName, birthdate, birthplace, address, course, dreamJob) {
  this.firstName = this.formatName(firstName);
  this.middleName = this.formatName(middleName);
  this.lastName = this.formatName(lastName);
  this.birthdate = birthdate;
  this.birthplace = birthplace;
  this.address = address;
  this.course = course.toLowerCase();
  this.dreamJob = dreamJob;
  }
  
  // Method to format names to Regular Case
  formatName(name) {
  return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  }
  
  // Method to print student information
  printInfo() {
  return `[${this.firstName} ${this.middleName} ${this.lastName}] was born [${this.birthdate}] at [${this.birthplace}], and currently living at [${this.address}]. [${this.firstName.toLowerCase()} ${this.middleName.toLowerCase()} ${this.lastName.toLowerCase()}] is taking up [${this.course}] and dreams to be [${this.dreamJob}] after graduation.`;
  }
  }
  
  // Creating instances for three students
  const MyInformation = new Student(
  "JOSHUA",
  "MORALES",
  "TOQUERO",
  "September 25,2004",
  "PIO, PORAC, PAMPANGA, PHILIPPINES 2008",
  "PATPATA 2ND, CANDON CITY, ILOCOS SUR, PHILIPPINES 2710",
  "bachelor of science in computer science",
  "Web Developer"
  );
  
  const Classmate1 = new Student(
  "ROLLY MAE",
  "MORALES",
  "CAAY",
  "April 11, 2005",
  "SITIO BALIW, VILLA HERMOSA, STA,CRUZ,PHILIPPINES 2713",
  "SITIO BALIW, VILLA HERMOSA, STA,CRUZ,PHILIPPINES 2713",
  "bachelor of science in computer science",
  "Web Developer"
  );
  
  const Classmate2 = new Student(
  "PRINCESS NICOLE",
  "GARABILES",
  "SALAZAR",
  "March 31, 2002",
  "PARAS, CANDON CITY,ILOCOS SUR, PHILIPINES 2710 ",
  "POBLACIO NORTE, SALCEDO, ILOCOS SUR, PHILIPPINES 2711",
  "bachelor of science in computer science",
  "Software Engineering"
  );
  
  // Printing information of each student
  console.log(MyInformation.printInfo());
  console.log(Classmate1.printInfo());
  console.log(Classmate2.printInfo());
  
  