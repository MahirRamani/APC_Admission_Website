import Sequelize  from "sequelize";
import db from "../config/database";
import BloodGroup from "./LookUpTables/BloodGroup";

const Student = db.define(
    "Student",
    {
        // isFormSubmitted: {
        //     type: Sequelize.BOOLEAN,
        //     allowNull: false,
        //     defaultValue: false,
        // // },
        isAdminPermitted: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        },
        isDKSPermitted: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        },
        isAccountantPermitted: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        },
        // photo: {
        //     type: Sequelize.BLOB, // Adjust data type if needed (e.g., BLOB for binary data)
        //     allowNull: false,
        // },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        middleName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        // address: {
        //     type: Sequelize.STRING,
        //     allowNull: false,
        // },
        // taluka: {
        //     type: Sequelize.STRING,
        //     allowNull: false,
        // },
        // district: {
        //     type: Sequelize.STRING,
        //     allowNull: false,
        // },
        // pincode: {
        //     type: Sequelize.STRING,
        //     allowNull: false,
        // },
        // dateOfBirth: {
        //     type: Sequelize.STRING, // Store only the date portion
        //     allowNull: true,
        // },
        // cast: {
        //     type: Sequelize.STRING,
        //     allowNull: false,
        // },
        // studentMobileNo: {
        //     type: Sequelize.STRING, // Consider using a phone number-specific data type if available
        //     allowNull: false,
        // },
        // bloodGroup: {
        //     type: Sequelize.STRING,
        //     allowNull: false,
        // },
        // hobby: {
        //     type: Sequelize.STRING,
        //     allowNull: false,
        // },
        // permanentDisease: {
        //     type: Sequelize.STRING,
        //     allowNull: false,
        // },
        // lastGivenExam: {
        //     type: Sequelize.STRING,
        //     allowNull: false,
        // },
        // lastSchoolOrCollege: {
        //     type: Sequelize.STRING,
        //     allowNull: false,
        // },
        // lastSchoolOrCollegeCity: {
        //     type: Sequelize.STRING,
        //     allowNull: false,
        // },
        // lastGivenExamPercentage: {
        //     type: Sequelize.FLOAT, // Adjust data type if needed (e.g., DECIMAL for higher precision)
        //     allowNull: false,
        // },
        admissionSchoolOrCollege: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        admissionBranch: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        // admissionYear: {
        //     type: Sequelize.INTEGER,
        //     allowNull: false,
        // },
        // notableAcedemicAchievement: {
        //     type: Sequelize.STRING,
        //     allowNull: false,
        // },
        // guardianProfession: {
        //     type: Sequelize.STRING,
        //     allowNull: false,
        // },
        // guardianProfessionType: { 
        //     type: Sequelize.STRING,
        //     allowNull: false,
        // },
        // guardianAnnualIncome: {
        //     type: Sequelize.FLOAT, // Adjust data type if needed (e.g., DECIMAL for higher precision)
        //     allowNull: false,
        // },
        // guardianMobileNo: {
        //     type: Sequelize.STRING, // Consider using a phone number-specific data type if available
        //     allowNull: false,
        // },
        // guardianWhatsAppNo: {
        //     type: Sequelize.STRING, // Consider using a phone number-specific data type if available
        //     allowNull: false,
        // },
        // eMailAddress: {
        //     type: Sequelize.STRING,
        //     allowNull: false,
        //     validate: {
        //         isEmail: false, // Add validation for email format
        //     },
        // },
        // isStudentConcern: {
        //     type: Sequelize.BOOLEAN,
        //     allowNull: false,
        // },
        // isGuardianConcern: {
        //     type: Sequelize.BOOLEAN,
        //     allowNull: false,
        // },
        // formSubmitDate: {
        //     type: Sequelize.DATE,
        //     allowNull: false,
        // },
        // isJoinReshuffling: {
        //     type: Sequelize.BOOLEAN,
        //     allowNull: false,
        // },
        isIDCardCreated: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        },
    },
    {
        timestamps: false,
    }
);

// Year.hasOne(Student);
// BloodGroup.hasOne(Student);

// Student.hasOne(Year);
// Year.belongsTo(Student  );

console.log(Student === Sequelize.Model);


export default Student;