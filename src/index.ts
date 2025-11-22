const CONFIG = {
  QUERY_STRING: "category:{Promotions Social Forums}",
  STARTING_THREAD: 100, // Keeps the 100 most recent threads from being deleted
  MAX_THREADS: 500, // This is the max number of threads Search can return
};

const runScript = () => {
  try {
    /* Max script runtime is 6m; it takes ~2m for each batch of 500 threads to be deleted
     * Therefore, we can only run the loop 3 times to keep it under the runtime threshold
     */
    for (let runCnt = 0; runCnt < 3; runCnt++) {
      const threads = GmailApp.search(
        CONFIG.QUERY_STRING,
        CONFIG.STARTING_THREAD,
        CONFIG.MAX_THREADS
      );
      threads.forEach((thread) => thread.moveToTrash());
    }
  } catch (error) {
    Logger.log(error);
  }
};
