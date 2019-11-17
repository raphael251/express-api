class TestJob {
  get key() {
    return 'TestJob';
  }

  get options() {
    return {
      delay: 5000,
    };
  }

  async handle(job, done) {
    job.progress(1);
    console.log(job.data);
    console.log('Logic here...');
    job.progress(100);
    done(null, { msg: 'Okay' });
  }

  async errorEvent(error) {
    console.log('Queue error');
  }

  async waitingEvent(jobId) {
    console.log('Queue waiting');
  }

  async activeEvent(job, jobPromise) {
    console.log('Queue Active');
  }

  async stalledEvent(job) {
    console.log('Queue stalled');
  }

  async progressEvent(job, progress) {
    console.log('Queue progress');
  }

  async completedEvent(job, result) {
    console.log('Queue completed');
  }

  async failedEvent(job, error) {
    console.log('Queue failed');
  }

  async pausedEvent() {
    console.log('Queue Paused');
  }

  async resumedEvent(job) {
    console.log('Queue Resumed');
  }

  async cleanedEvent(jobs, type) {
    console.log('Queue Cleaned');
  }

  async drainedEvent(jobs, type) {
    console.log('Queue drained');
  }

  async removedEvent(jobs, type) {
    console.log('Queue Removed');
  }
}

module.exports = new TestJob();
