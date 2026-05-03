const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create Admin user
  const adminPassword = await bcrypt.hash('admin123', 12);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@solace.com' },
    update: {},
    create: {
      fullName: 'System Admin',
      email: 'admin@solace.com',
      passwordHash: adminPassword,
      role: 'ADMIN',
      status: 'ACTIVE',
    },
  });
  console.log(`✅ Admin user created: ${admin.email}`);

  // Create a demo counselor
  const counselorPassword = await bcrypt.hash('counselor123', 12);
  const counselor = await prisma.user.upsert({
    where: { email: 'counselor@solace.com' },
    update: {},
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
  console.log(`✅ Counselor created: ${counselor.email}`);

  // Create a demo student
  const studentPassword = await bcrypt.hash('student123', 12);
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

  console.log('\n🎉 Seeding complete! Demo accounts:');
  console.log('   Admin:     admin@solace.com / admin123');
  console.log('   Counselor: counselor@solace.com / counselor123');
  console.log('   Student:   student@solace.com / student123');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
