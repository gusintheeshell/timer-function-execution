declare module "timer-function-execution" {
  class Timer {
    private startTime: number | undefined;
    private endTime: number | undefined;

    async measureAsync(fn: () => Promise<any>): Promise<number>;

    start(): void;

    stop(): void;

    getElapsedTime(): number;
  }

  function useTimer(): {
    measureAsync: (fn: () => Promise<any>) => Promise<number>;
    measureSync: (fn: () => any) => number;
  };

  export { Timer, useTimer };
}
