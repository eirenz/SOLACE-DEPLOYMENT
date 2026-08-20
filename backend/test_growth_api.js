// Usage: TEST_EMAIL=testcheckin@solace.com TEST_PASSWORD=yourpass node test_growth_api.js

const axios = require('axios');

async function testGrowthAPI() {
  const API_URL = 'http://localhost:5000/api';

  const email = process.env.TEST_EMAIL;
  const password = process.env.TEST_PASSWORD;

  if (!email || !password) {
    console.error('❌ Missing required environment variables.');
    console.error('   Usage: TEST_EMAIL=user@solace.com TEST_PASSWORD=yourpass node test_growth_api.js');
    process.exit(1);
  }

  try {
    // 1. Login
    const loginRes = await axios.post(`${API_URL}/auth/login`, {
      email,
      password
    });
    const token = loginRes.data.token;
    console.log('Logged in successfully');

    // 2. Fetch Growth Insight
    const insightRes = await axios.get(`${API_URL}/checkins/growth-insights`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    
    console.log('Growth Insight API Result:');
    console.log(JSON.stringify(insightRes.data, null, 2));

    if (insightRes.data.insight.toLowerCase().includes('morning yoga')) {
      console.log('✅ Success: Correlation correctly identified!');
    } else {
      console.log('❌ Failure: Correlation not found as expected.');
    }

  } catch (error) {
    console.error('API Test Failed:', error.response?.data || error.message);
  }
}

testGrowthAPI();
