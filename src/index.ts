const CONFIG = {
  QUERY_STRING: "category:{Promotions Social Forums}",
  STARTING_THREAD: 100, // Keeps the 100 most recent threads from being deleted
  MAX_THREADS: 500, // This is the max number of threads Search can return
};

const runScript = () => {
  try {
    const startTime = Date.now();
    const timeLimit = 240 * 1000; // 4 minutes

    do {
      const threads = GmailApp.search(
        CONFIG.QUERY_STRING,
        CONFIG.STARTING_THREAD,
        CONFIG.MAX_THREADS
      );
      threads.forEach((thread) => thread.moveToTrash());
      // Max script runtime is 6m. Deleting 500 Threads takes ~2m.
      // This WHILE condition will ensure that the loop stops within max runtime
    } while (Date.now() - startTime < timeLimit);
  } catch (error) {
    Logger.log(error);
  }
};
