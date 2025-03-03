'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports', [
      {
        name: "Kempegowda International Airport",
        address: "Karnataka 534320",
        cityId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: "Indira Gandhi International Airport",
        address: "New Delhi, Delhi 110037",
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        name: "Netaji Subhash Chandra Bose International Airport",
        address: "Airport Service Rd, International Airport, Dum Dum, Kolkata, West Bengal 700052",
        cityId: 6,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        name: "Pune International Airport",
        address: "New Airport Rd, Pune International Airport Area, Lohegaon, Pune, Maharashtra 411032",
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date() 
      }
   ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
