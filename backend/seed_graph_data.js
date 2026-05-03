const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedGraphData() {
  try {
    const email = 'testcheckin@solace.com';
    const user = await prisma.user.findUnique({ where: { email } });
    
    if (!user) return console.log('User not found');

    const year = new Date().getFullYear();
    const month = new Date().getMonth(); // 0-indexed

    // Week 1 (Day 5) -> Happy (5) -> 100%
    await prisma.moodCheckin.create({
      data: {
        userId: user.id,
        mood: 'HAPPY',
        createdAt: new Date(year, month, 5, 12, 0, 0)
      }
    });

    // Week 2 (Day 10) -> Sad (2) -> 40%
    await prisma.moodCheckin.create({
      data: {
        userId: user.id,
        mood: 'SAD',
        createdAt: new Date(year, month, 10, 12, 0, 0)
      }
    });

    // Week 4 (Day 25) -> Angry (1) -> 20%
    await prisma.moodCheckin.create({
      data: {
        userId: user.id,
        mood: 'ANGRY',
        createdAt: new Date(year, month, 25, 12, 0, 0)
      }
    });

    console.log('Seeded past dates successfully!');

  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect();
  }
}

seedGraphData();
