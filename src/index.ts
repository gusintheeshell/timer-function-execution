class Timer {
  private startTime: number | undefined;
  private endTime: number | undefined;

  async measureAsync(fn: () => Promise<any>): Promise<number> {
    this.start();
    try {
      await fn();
    } catch (error) {
      console.error(error);
    } finally {
      this.stop();
      return this.getElapsedTime();
    }
  }

  start() {
    this.startTime = Date.now();
  }

  stop() {
    this.endTime = Date.now();
    if (this.startTime !== undefined) {
      const elapsedTime = this.endTime - this.startTime;
      console.debug(`Elapsed time: ${elapsedTime} ms`);
    }
  }

  getElapsedTime(): number {
    if (this.startTime !== undefined && this.endTime !== undefined) {
      return this.endTime - this.startTime;
    }
    return 0;
  }
}

export default Timer;
