const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  destination: 'Kepler-442 b',
  customer: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

async function getAllLaunches(skip, limit) {
  return Array.from(launch.values());
  //   return await launchesDatabase
  //     .find({}, { _id: 0, __v: 0 })
  //     .sort({ flightNumber: 1 })
  //     .skip(skip)
  //     .limit(limit);
}

module.exports = {
    getAllLaunches,
};
