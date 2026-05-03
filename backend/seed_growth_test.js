const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedGrowthData() {
  const email = 'testcheckin@solace.com';
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    console.error('Test user not found');
    return;
  }

  console.log('Cleaning up old check-ins...');
  await prisma.moodCheckin.deleteMany({ where: { userId: user.id } });

  const checkins = [
    { mood: 'HAPPY', tasks: ['Morning Yoga', 'Healthy Breakfast'], daysAgo: 1 },
    { mood: 'HAPPY', tasks: ['Morning Yoga'], daysAgo: 2 },
    { mood: 'NEUTRAL', tasks: ['Working from home'], daysAgo: 3 },
    { mood: 'HAPPY', tasks: ['Morning Yoga', 'Reading'], daysAgo: 4 },
    { mood: 'HAPPY', tasks: ['Morning Yoga'], daysAgo: 5 },
    { mood: 'STRESSED', tasks: ['Late night work'], daysAgo: 6 },
    { mood: 'HAPPY', tasks: ['Morning Yoga'], daysAgo: 7 },
    { mood: 'HAPPY', tasks: ['Healthy Breakfast'], daysAgo: 8 },
    { mood: 'HAPPY', tasks: ['Morning Yoga'], daysAgo: 9 },
    { mood: 'NEUTRAL', tasks: ['Working from home'], daysAgo: 10 },
  ];

  console.log('Seeding new check-ins...');
  for (const c of checkins) {
    const date = new Date();
    date.setDate(date.getDate() - c.daysAgo);
    await prisma.moodCheckin.create({
      data: {
        userId: user.id,
        mood: c.mood,
        tasks: c.tasks,
        createdAt: date
      }
    });
  }

  console.log('Seeding complete. "Morning Yoga" should now be the top correlated task.');
  await prisma.$disconnect();
}

seedGrowthData().catch(e => {
  console.error(e);
  process.exit(1);
});
