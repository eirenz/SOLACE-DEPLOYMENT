const { PrismaClient } = require('@prisma/client');
console.log('Attempting to instantiate PrismaClient...');
try {
  const prisma = new PrismaClient();
  console.log('Success!');
} catch (e) {
  console.error('Initialization failed:');
  console.error(e.message);
}
