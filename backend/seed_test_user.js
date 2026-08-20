const crypto = require('crypto');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

function generatePassword() {
  return crypto.randomBytes(16).toString('base64url');
}

async function createTestUser() {
  try {
    const email = 'testcheckin@solace.com';
    const password = process.env.SEED_TEST_PASSWORD || generatePassword();

    // Check if user already exists
    let user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      console.log('Creating test user...');
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);

      user = await prisma.user.create({
        data: {
          fullName: 'Test QA User',
          email: email,
          passwordHash: passwordHash,
          role: 'STUDENT',
          alias: 'Tester',
        }
      });
      console.log(`✅ Test user created: ${user.email}`);
      console.log(`   Password: ${password}`);
      console.log('\n⚠️  Save this password now — it will not be shown again.');
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
