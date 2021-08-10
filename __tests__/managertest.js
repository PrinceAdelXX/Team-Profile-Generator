const Manager = require("../lib/Manager");

test("Create Manager", () => {
    const manager = new Manager("Jasmine", "1", "manager@jmail.com", "10");

    expect(manager).toEqual(expect.any(Object));
});

test("Measures for manager are correct", () => {
    const manager = new Manager("Jasmine", "1", "manager@jmail.com", "10");

    expect(manager.name).toBe("Jasmine");
    expect(manager.id).toBe("1");
    expect(manager.email).toBe("manager@jmail.com");
    expect(manager.officeNumber).toBe("10");
});

test("Get position via getPosition()", () => {
    const manager = new Manager("Jasmine", "1", "manager@jmail.com", "10");

    expect(manager.getPosition()).toBe("Manager");
});