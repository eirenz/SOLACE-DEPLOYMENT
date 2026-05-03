// Using native fetch

const API_URL = 'http://localhost:5000/api';

async function testFeatures() {
  console.log('--- Testing Phase 3 Features ---');

  // 1. Login to get token
  console.log('\n[1] Logging in as student...');
  const loginRes = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'student@solace.com', password: 'student123' }),
  });
  
  if (!loginRes.ok) {
    console.error('Login failed', await loginRes.text());
    return;
  }
  
  const loginData = await loginRes.json();
  const token = loginData.token;
  console.log('✅ Login successful, got token');

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };

  // 2. Test Mood Checkin
  console.log('\n[2] Testing POST /api/checkins...');
  const checkinRes = await fetch(`${API_URL}/checkins`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      mood: 'HAPPY',
      quote: 'Today is a great day!',
      tasks: ['Read a book', 'Go for a walk']
    })
  });
  console.log(checkinRes.status === 201 ? '✅ Checkin Created' : '❌ Checkin Failed (might already exist for today)', await checkinRes.text());

  // 3. Test Get Checkin History
  console.log('\n[3] Testing GET /api/checkins/history...');
  const getCheckinRes = await fetch(`${API_URL}/checkins/history`, { headers });
  console.log(getCheckinRes.ok ? '✅ History retrieved' : '❌ Failed to get history', await getCheckinRes.text());

  // 4. Test Create Journal
  console.log('\n[4] Testing POST /api/journals...');
  const createJournalRes = await fetch(`${API_URL}/journals`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      title: 'My First Journal Entry',
      content: 'I had a really productive day today.',
      mood: 'HAPPY'
    })
  });
  
  let journalId;
  if (createJournalRes.ok) {
    const journalData = await createJournalRes.json();
    journalId = journalData.journal.id;
    console.log('✅ Journal Created with ID:', journalId);
  } else {
    console.error('❌ Failed to create journal', await createJournalRes.text());
    return;
  }

  // 5. Test Update Journal
  console.log(`\n[5] Testing PUT /api/journals/${journalId}...`);
  const updateJournalRes = await fetch(`${API_URL}/journals/${journalId}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      title: 'My First Journal Entry (Updated)',
      mood: 'NEUTRAL'
    })
  });
  console.log(updateJournalRes.ok ? '✅ Journal Updated' : '❌ Failed to update journal', await updateJournalRes.text());

  // 6. Test Delete Journal
  console.log(`\n[6] Testing DELETE /api/journals/${journalId}...`);
  const deleteJournalRes = await fetch(`${API_URL}/journals/${journalId}`, {
    method: 'DELETE',
    headers
  });
  console.log(deleteJournalRes.ok ? '✅ Journal Deleted' : '❌ Failed to delete journal', await deleteJournalRes.text());

  console.log('\n--- All Tests Completed ---');
}

testFeatures().catch(console.error);
