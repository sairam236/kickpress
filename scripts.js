document.addEventListener('DOMContentLoaded', function() {
  const jobListings = [
      { title: 'Structural Engineer', location: 'New York, NY', company: 'ABC Engineering' },
      { title: 'Site Engineer', location: 'Los Angeles, CA', company: 'XYZ Construction' },
      { title: 'Project Manager', location: 'Chicago, IL', company: 'Civil Group' },
  ];

  const jobListElement = document.getElementById('job-listings');

  jobListings.forEach(job => {
      const jobItem = document.createElement('li');
      jobItem.textContent = `${job.title} - ${job.location} at ${job.company}`;
      jobListElement.appendChild(jobItem);
  });
});
