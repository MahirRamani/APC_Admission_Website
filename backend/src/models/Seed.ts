import sequelize from "../config/database";
import Year from "./LookUpTables/Year";
import students from "./SeedYear";

(async () => {
    try {

        // await sequelize.sync({ alter: true }); // Reset database (optional, use with caution)
        await Year.bulkCreate(students); // Insert data
        console.log("Data seeded successfully!");
    } catch (error) {
        console.error("Error seeding data:", error);
    }
});