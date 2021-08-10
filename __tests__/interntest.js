const Intern = require("../lib/Intern");
const { exportAllDeclaration } = require("@babel/types");

test("Creates Intern", () => {
    const intern = new Intern("Francesca", "4", "intern@jmail.com", "Green University");

    expect(intern).toEqual(expect.any(Object));
});

test("Measures for intern are correct", () => {
    const intern = new Intern("Francesca", "4", "intern@jmail.com", "Green University");

    expect(intern.name).toBe("Francesca");
    expect(intern.id).toBe("4");
    expect(intern.email).toBe("intern@jmail.com");
    expect(intern.school).toBe("Green University");
});

test("Get school via getSchool()", () => {
    const intern = new Intern("Francesca", "4", "intern@jmail.com", "Green University");

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test("Get position via getPosition()", () => {
    const intern = new Intern("Francesca", "4", "intern@jmail.com", "Green University");

    expect(intern.getPosition()).toBe('Intern');
});