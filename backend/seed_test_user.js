const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function createTestUser() {
  try {
    const email = 'testcheckin@solace.com';
    
    // Check if user already exists
    let user = await prisma.user.findUnique({ where: { email } });
    
    if (!user) {
      console.log('Creating test user...');
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash('password123', salt);
      
      user = await prisma.user.create({
        data: {
          fullName: 'Test QA User',
          email: email,
          passwordHash: passwordHash,
          role: 'STUDENT',
          alias: 'Tester',
        }
      });
      console.log(`Test user created successfully: ${user.email} with password 'password123'`);
    } else {
      console.log(`Test user already exists: ${user.email}`);
    }
  } catch (error) {
    console.error('Error creating test user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createTestUser();
