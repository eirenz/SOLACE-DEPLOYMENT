const prisma = require('../config/db');
const bcrypt = require('bcryptjs');

// Get Current User Profile
exports.getProfile = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        fullName: true,
        firstName: true,
        lastName: true,
        username: true,
        email: true,
        phoneNumber: true,
        role: true,
        alias: true,
        avatarUrl: true,
        createdAt: true,
        // Include counselor-specific profile data if user is a counselor
        counselorProfile: {
          select: {
            employeeId: true,
            workPhone: true,
            license: true,
            specialization: true,
            officeLocation: true,
            experience: true,
            isAvailable: true,
          }
        },
      }
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
};

// Update Current User Profile
exports.updateProfile = async (req, res, next) => {
  try {
    const { firstName, lastName, username, phoneNumber, email, avatarUrl,
            // Counselor-specific fields
            employeeId, workPhone, license, specialization, officeLocation, experience } = req.body;

    // Check if username is already taken by someone else
    if (username) {
      const existing = await prisma.user.findFirst({
        where: { 
          username,
          NOT: { id: req.user.id }
        }
      });
      if (existing) {
        return res.status(409).json({ error: 'Username is already taken' });
      }
    }

    // Construct fullName if names are provided
    let fullName = req.user.fullName;
    if (firstName || lastName) {
      const fName = firstName || (req.user.fullName?.split(' ')[0] || '');
      const lName = lastName || (req.user.fullName?.split(' ').slice(1).join(' ') || '');
      fullName = `${fName} ${lName}`.trim();
    }

    const updatedUser = await prisma.user.update({
      where: { id: req.user.id },
      data: {
        ...(fullName && { fullName }),
        ...(firstName && { firstName }),
        ...(lastName && { lastName }),
        ...(username && { username }),
        ...(phoneNumber && { phoneNumber }),
        ...(email && { email }),
        ...(avatarUrl !== undefined && { avatarUrl })
      },
      select: {
        id: true,
        fullName: true,
        firstName: true,
        lastName: true,
        username: true,
        email: true,
        phoneNumber: true,
        role: true,
        alias: true,
        avatarUrl: true,
        createdAt: true,
        counselorProfile: {
          select: {
            employeeId: true,
            workPhone: true,
            license: true,
            specialization: true,
            officeLocation: true,
            experience: true,
            isAvailable: true,
          }
        },
      }
    });

    // If user is a counselor and counselor-specific fields are provided, upsert CounselorProfile
    if (req.user.role === 'COUNSELOR') {
      const counselorData = {};
      if (employeeId !== undefined) counselorData.employeeId = employeeId;
      if (workPhone !== undefined) counselorData.workPhone = workPhone;
      if (license !== undefined) counselorData.license = license;
      if (specialization !== undefined) counselorData.specialization = specialization;
      if (officeLocation !== undefined) counselorData.officeLocation = officeLocation;
      if (experience !== undefined) counselorData.experience = experience;

      if (Object.keys(counselorData).length > 0) {
        await prisma.counselorProfile.upsert({
          where: { userId: req.user.id },
          update: counselorData,
          create: { userId: req.user.id, ...counselorData },
        });

        // Re-fetch updated profile to include counselor data
        const refreshed = await prisma.user.findUnique({
          where: { id: req.user.id },
          select: {
            id: true, fullName: true, firstName: true, lastName: true,
            username: true, email: true, phoneNumber: true, role: true,
            alias: true, avatarUrl: true, createdAt: true,
            counselorProfile: {
              select: {
                employeeId: true, workPhone: true, license: true,
                specialization: true, officeLocation: true, experience: true, isAvailable: true,
              }
            },
          }
        });
        return res.json(refreshed);
      }
    }

    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
};

// Update User Password
exports.updatePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;

    // Fetch user with passwordHash
    const user = await prisma.user.findUnique({
      where: { id: req.user.id }
    });

    if (!user || !user.passwordHash) {
      return res.status(400).json({ error: 'Invalid operation for social login accounts' });
    }

    // Verify current password
    const isMatch = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ error: 'Incorrect current password' });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(newPassword, salt);

    await prisma.user.update({
      where: { id: req.user.id },
      data: { passwordHash }
    });

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    next(error);
  }
};
