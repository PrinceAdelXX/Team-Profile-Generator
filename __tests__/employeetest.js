const Employee = require("../lib/Employee");


test("Create Employee", () => {
    const employee = new Employee("PrinceAdelXX", "79", "employee@jmail.com")

    expect(employee).toEqual(expect.any(Object));
});

test("Measures for employee are correct", () => {
    const employee = new Employee("PrinceAdelXX", "79", "employee@jmail.com")

    expect(employee.name).toBe("PrinceAdelXX");
    expect(employee.id).toBe("79");
    expect(employee.email).toBe("employee@jmail.com");
})

test("Get Name", () => {
    const employee = new Employee("PrinceAdelXX", "79", "employee@jmail.com")

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test("Get ID", () => {
    const employee = new Employee("PrinceAdelXX", "79", "employee@jmail.com")

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test("Get email", () => {
    const employee = new Employee("VPrinceAdelXX", "79", "employee@jmail.com")

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test("Get Position", () => {
    const employee = new Employee("PrinceAdelXX", "79", "employee@jmail.com")

    expect(employee.getPosition()).toBe("Employee");
});