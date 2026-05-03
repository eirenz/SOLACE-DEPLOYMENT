const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkData() {
  try {
    const email = 'testcheckin@solace.com';
    const user = await prisma.user.findUnique({ where: { email } });
    
    if (!user) {
      console.log('User not found!');
      return;
    }

    const checkins = await prisma.moodCheckin.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: 'desc' }
    });

    console.log(`Found ${checkins.length} checkins for ${email}`);
    if (checkins.length > 0) {
      console.log('Latest 3 checkins:');
      console.log(checkins.slice(0, 3));
    }

    // Test the specific weekly aggregation logic:
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0, 23, 59, 59, 999);
    
    console.log(`\nTesting Query range for month: ${month}/${year}`);
    console.log(`Start: ${startDate}`);
    console.log(`End: ${endDate}`);
    
    const countInMonth = await prisma.moodCheckin.count({
      where: {
        userId: user.id,
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      }
    });

    console.log(`Number of checkins mapped to this month in Weekly Logic: ${countInMonth}`);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkData();
