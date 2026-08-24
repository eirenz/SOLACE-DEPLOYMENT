const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

/**
 * Generate a cryptographically secure random password.
 * @returns {string} A URL-safe base64 password (22 characters).
 */
function generatePassword() {
  return crypto.randomBytes(16).toString('base64url');
}

async function main() {
  console.log('🌱 Seeding database...\n');

  // Resolve passwords from env vars or generate secure random ones
  const adminPwd = process.env.SEED_ADMIN_PASSWORD || generatePassword();
  const counselorPwd = process.env.SEED_COUNSELOR_PASSWORD || generatePassword();
  const studentPwd = process.env.SEED_STUDENT_PASSWORD || generatePassword();

  // Create Admin user
  // update: always applies the password from env so re-running seed is safe
  const adminPassword = await bcrypt.hash(adminPwd, 12);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@solace.com' },
    update: { passwordHash: adminPassword },
    create: {
      fullName: 'System Admin',
      email: 'admin@solace.com',
      passwordHash: adminPassword,
      role: 'ADMIN',
      status: 'ACTIVE',
    },
  });
  console.log(`✅ Admin user upserted: ${admin.email}`);

  // Create a demo counselor
  // update: always applies the password from env so re-running seed is safe
  const counselorPassword = await bcrypt.hash(counselorPwd, 12);
  const counselor = await prisma.user.upsert({
    where: { email: 'counselor@solace.com' },
    update: { passwordHash: counselorPassword },
    create: {
      fullName: 'Hanna Gweneth',
      email: 'counselor@solace.com',
      passwordHash: counselorPassword,
      role: 'COUNSELOR',
      status: 'ACTIVE',
      alias: 'Silver Hawk',
    },
  });

  await prisma.counselorProfile.upsert({
    where: { userId: counselor.id },
    update: {},
    create: {
      userId: counselor.id,
      employeeId: '2024-003',
      workPhone: '0987 567 4637',
      license: 'Registered Guidance Counselor',
      specialization: 'Academic and Career Counseling',
      officeLocation: 'Guidance Office - Room 201',
      experience: '6 years',
    },
  });
  console.log(`✅ Counselor upserted: ${counselor.email}`);

  // Create a demo student (password only set on first creation)
  const studentPassword = await bcrypt.hash(studentPwd, 12);
  const student = await prisma.user.upsert({
    where: { email: 'student@solace.com' },
    update: {},
    create: {
      fullName: 'Sara Ginto',
      email: 'student@solace.com',
      passwordHash: studentPassword,
      role: 'STUDENT',
      status: 'ACTIVE',
      alias: 'Blue Jay',
    },
  });
  console.log(`✅ Student created: ${student.email}`);

  console.log('\n🎉 Seeding complete!');

  // Only print passwords in output if they were NOT supplied via env vars
  // (i.e. they were auto-generated and you need to save them)
  const adminFromEnv = !!process.env.SEED_ADMIN_PASSWORD;
  const counselorFromEnv = !!process.env.SEED_COUNSELOR_PASSWORD;
  const studentFromEnv = !!process.env.SEED_STUDENT_PASSWORD;

  if (!adminFromEnv || !counselorFromEnv || !studentFromEnv) {
    console.log('\n⚠️  Auto-generated passwords (save these now — not shown again):');
    if (!adminFromEnv)     console.log(`   Admin:     admin@solace.com     / ${adminPwd}`);
    if (!counselorFromEnv) console.log(`   Counselor: counselor@solace.com / ${counselorPwd}`);
    if (!studentFromEnv)   console.log(`   Student:   student@solace.com   / ${studentPwd}`);
  } else {
    console.log('   All passwords were sourced from environment variables. ✅');
  }
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
